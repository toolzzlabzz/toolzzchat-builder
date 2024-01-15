import { CopyButton } from '@/components/CopyButton'
import { TextLink } from '@/components/TextLink'
import { ChevronLeftIcon, ExternalLinkIcon } from '@/components/icons'
import { TextInput } from '@/components/inputs/TextInput'
import { useWorkspace } from '@/features/workspace/WorkspaceProvider'
import { useToast } from '@/hooks/useToast'
import { trpc, trpcVanilla } from '@/lib/trpc'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Stack,
  ModalFooter,
  Stepper,
  useSteps,
  Step,
  StepIndicator,
  Box,
  StepIcon,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  UnorderedList,
  ListItem,
  Text,
  Image,
  Button,
  HStack,
  IconButton,
  Heading,
  OrderedList,
  Link,
  Code,
  Input,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react'
import { env } from '@typebot.io/env'
import { isEmpty, isNotEmpty } from '@typebot.io/lib/utils'
import React, { useState } from 'react'
import { createId } from '@paralleldrive/cuid2'

const steps = [
  { title: 'Requerimentos' },
  { title: 'Token do Usuário' },
  { title: 'Numbero do Telefone' },
  { title: 'Webhook' },
]

type Props = {
  isOpen: boolean
  onClose: () => void
  onNewCredentials: (id: string) => void
}

const credentialsId = createId()

export const WhatsAppCredentialsModal = ({
  isOpen,
  onClose,
  onNewCredentials,
}: Props) => {
  const { workspace } = useWorkspace()
  const { showToast } = useToast()
  const { activeStep, goToNext, goToPrevious, setActiveStep } = useSteps({
    index: 0,
    count: steps.length,
  })
  const [systemUserAccessToken, setSystemUserAccessToken] = useState('')
  const [phoneNumberId, setPhoneNumberId] = useState('')
  const [phoneNumberName, setPhoneNumberName] = useState('')
  const [verificationToken, setVerificationToken] = useState('')
  const [isVerifying, setIsVerifying] = useState(false)
  const [isCreating, setIsCreating] = useState(false)

  const {
    credentials: {
      listCredentials: { refetch: refetchCredentials },
    },
  } = trpc.useContext()

  const { mutate } = trpc.credentials.createCredentials.useMutation({
    onMutate: () => setIsCreating(true),
    onSettled: () => setIsCreating(false),
    onError: (err) => {
      showToast({
        description: err.message,
        status: 'error',
      })
    },
    onSuccess: (data) => {
      refetchCredentials()
      onNewCredentials(data.credentialsId)
      onClose()
      resetForm()
    },
  })

  const { data: tokenInfoData } = trpc.whatsApp.getSystemTokenInfo.useQuery(
    {
      token: systemUserAccessToken,
    },
    { enabled: isNotEmpty(systemUserAccessToken) }
  )

  const resetForm = () => {
    setActiveStep(0)
    setSystemUserAccessToken('')
    setPhoneNumberId('')
  }

  const createMetaCredentials = async () => {
    if (!workspace) return
    mutate({
      credentials: {
        id: credentialsId,
        type: 'whatsApp',
        workspaceId: workspace.id,
        name: phoneNumberName,
        data: {
          systemUserAccessToken,
          phoneNumberId,
        },
      },
    })
  }

  const isTokenValid = async () => {
    setIsVerifying(true)
    try {
      const { expiresAt, scopes } =
        await trpcVanilla.whatsApp.getSystemTokenInfo.query({
          token: systemUserAccessToken,
        })
      if (expiresAt !== 0) {
        showToast({
          description:
            'Token expiration was not set to *never*. Create the token again with the correct expiration.',
        })
        return false
      }
      if (
        ['whatsapp_business_management', 'whatsapp_business_messaging'].find(
          (scope) => !scopes.includes(scope)
        )
      ) {
        showToast({
          description: 'Token does not have all the necessary scopes',
        })
        return false
      }
    } catch (err) {
      setIsVerifying(false)
      showToast({
        description: 'Could not get system info',
      })
      return false
    }
    setIsVerifying(false)
    return true
  }

  const isPhoneNumberAvailable = async () => {
    setIsVerifying(true)
    try {
      const { name } = await trpcVanilla.whatsApp.getPhoneNumber.query({
        systemToken: systemUserAccessToken,
        phoneNumberId,
      })
      setPhoneNumberName(name)
      try {
        const { message } =
          await trpcVanilla.whatsApp.verifyIfPhoneNumberAvailable.query({
            phoneNumberDisplayName: name,
          })

        if (message === 'taken') {
          setIsVerifying(false)
          showToast({
            description: 'Phone number is already registered on Typebot',
          })
          return false
        }
        const { verificationToken } =
          await trpcVanilla.whatsApp.generateVerificationToken.mutate()
        setVerificationToken(verificationToken)
      } catch (err) {
        console.error(err)
        setIsVerifying(false)
        showToast({
          description: 'Could not verify if phone number is available',
        })
        return false
      }
    } catch (err) {
      console.error(err)
      setIsVerifying(false)
      showToast({
        description: 'Could not get phone number info',
      })
      return false
    }
    setIsVerifying(false)
    return true
  }

  const goToNextStep = async () => {
    if (activeStep === steps.length - 1) return createMetaCredentials()
    if (activeStep === 1 && !(await isTokenValid())) return
    if (activeStep === 2 && !(await isPhoneNumberAvailable())) return

    goToNext()
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="3xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <HStack h="40px">
            {activeStep > 0 && (
              <IconButton
                icon={<ChevronLeftIcon />}
                aria-label={'Go back'}
                variant="ghost"
                onClick={goToPrevious}
              />
            )}
            <Heading size="md">Add a WhatsApp phone number</Heading>
          </HStack>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody as={Stack} spacing="10">
          <Stepper index={activeStep} size="sm" pt="4">
            {steps.map((step, index) => (
              <Step key={index}>
                <StepIndicator>
                  <StepStatus
                    complete={<StepIcon />}
                    incomplete={<StepNumber />}
                    active={<StepNumber />}
                  />
                </StepIndicator>

                <Box flexShrink="0">
                  <StepTitle>{step.title}</StepTitle>
                </Box>

                <StepSeparator />
              </Step>
            ))}
          </Stepper>
          {activeStep === 0 && <Requirements />}
          {activeStep === 1 && (
            <SystemUserToken
              initialToken={systemUserAccessToken}
              setToken={setSystemUserAccessToken}
            />
          )}
          {activeStep === 2 && (
            <PhoneNumber
              appId={tokenInfoData?.appId}
              initialPhoneNumberId={phoneNumberId}
              setPhoneNumberId={setPhoneNumberId}
            />
          )}
          {activeStep === 3 && (
            <Webhook
              appId={tokenInfoData?.appId}
              verificationToken={verificationToken}
              credentialsId={credentialsId}
            />
          )}
        </ModalBody>
        <ModalFooter>
          <Button
            onClick={goToNextStep}
            colorScheme="blue"
            isDisabled={
              (activeStep === 1 && isEmpty(systemUserAccessToken)) ||
              (activeStep === 2 && isEmpty(phoneNumberId))
            }
            isLoading={isVerifying || isCreating}
          >
            {activeStep === steps.length - 1 ? 'Submit' : 'Continue'}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

const Requirements = () => (
  <Stack spacing={4}>
    <Text>
      Assegure-se de ter{' '}
      <TextLink href="" isExternal>
        criado um aplicativo WhatsApp Meta
      </TextLink>
      . Você deve conseguir visualizar esta página:
    </Text>
    <Image
      src="/images/whatsapp-quickstart-page.png"
      alt="WhatsApp quickstart page"
      rounded="md"
    />
  </Stack>
)

const SystemUserToken = ({
  initialToken,
  setToken,
}: {
  initialToken: string
  setToken: (id: string) => void
}) => (
  <OrderedList spacing={4}>
    <ListItem>
      Vá para sua{' '}
      <Button
        as={Link}
        href="https://business.facebook.com/settings/system-users"
        isExternal
        rightIcon={<ExternalLinkIcon />}
        size="sm"
      >
        Página de usuários do sistema
      </Button>
    </ListItem>
    <ListItem>
      Crie um novo usuário clicando em <Code>Add</Code>
    </ListItem>
    <ListItem>
      Preencha-o com qualquer nome e dê-lhe o cargo de <Code>Admin</Code>
    </ListItem>
    <ListItem>
      <Stack>
        <Text>
          Clique em <Code>Add assets</Code>. Localizado em <Code>Apps</Code>,
          procure seu aplicativo criado anteriormente, selecione-o e clique em{' '}
          <Code>Manage app</Code>
        </Text>
        <Image
          src="/images/meta-system-user-assets.png"
          alt="Meta system user assets"
          rounded="md"
        />
      </Stack>
    </ListItem>
    <ListItem>
      <Stack spacing={4}>
        <Text>
          Agora, Clique em <Code>Generate new token</Code>. e selecione o seu
          aplicativo.
        </Text>
        <UnorderedList spacing={4}>
          <ListItem>
            Token expiration: <Code>Never</Code>
          </ListItem>
          <ListItem>
            Selecione as seguintes Permissões disponíveis:{' '}
            <Code>whatsapp_business_messaging</Code>,{' '}
            <Code>whatsapp_business_management</Code>{' '}
          </ListItem>
        </UnorderedList>
      </Stack>
    </ListItem>
    <ListItem>Copie e cole o token gerado:</ListItem>
    <TextInput
      isRequired
      label="System User Token"
      defaultValue={initialToken}
      onChange={(val) => setToken(val.trim())}
      withVariableButton={false}
      debounceTimeout={0}
    />
  </OrderedList>
)

const PhoneNumber = ({
  appId,
  initialPhoneNumberId,
  setPhoneNumberId,
}: {
  appId?: string
  initialPhoneNumberId: string
  setPhoneNumberId: (id: string) => void
}) => (
  <OrderedList spacing={4}>
    <ListItem>
      <HStack>
        <Text>
          Go to your{' '}
          <Button
            as={Link}
            href={`https://developers.facebook.com/apps/${appId}/whatsapp-business/wa-dev-console`}
            isExternal
            rightIcon={<ExternalLinkIcon />}
            size="sm"
          >
            WhatsApp Dev Console{' '}
          </Button>
        </Text>
      </HStack>
    </ListItem>
    <ListItem>
      Adicione seu número de telefone clicando em{' '}
      <Code>Add numero de telefone</Code> button.
    </ListItem>
    <ListItem>
      <Stack>
        <Text>
          Selecione e cole um número de telefone associado{' '}
          <Code>ID do número de telefone</Code> and{' '}
          <Code>ID da Conta WhatsApp Business</Code>:
        </Text>
        <HStack>
          <TextInput
            label="Phone number ID"
            defaultValue={initialPhoneNumberId}
            withVariableButton={false}
            debounceTimeout={0}
            isRequired
            onChange={setPhoneNumberId}
          />
        </HStack>
        <Image
          src="/images/whatsapp-phone-selection.png"
          alt="WA phone selection"
        />
      </Stack>
    </ListItem>
  </OrderedList>
)

const Webhook = ({
  appId,
  verificationToken,
  credentialsId,
}: {
  appId?: string
  verificationToken: string
  credentialsId: string
}) => {
  const { workspace } = useWorkspace()
  const webhookUrl = `${
    env.NEXT_PUBLIC_VIEWER_URL.at(1) ?? env.NEXT_PUBLIC_VIEWER_URL[0]
  }/api/v1/workspaces/${workspace?.id}/whatsapp/${credentialsId}/webhook`

  return (
    <Stack spacing={6}>
      <Text>
        Na sua página de{' '}
        <Button
          as={Link}
          href={`https://developers.facebook.com/apps/${appId}/whatsapp-business/wa-settings`}
          rightIcon={<ExternalLinkIcon />}
          isExternal
          size="sm"
        >
          configurações do WhatsApp
        </Button>
        , clique no botão Editar e insira os seguintes valores:
      </Text>
      <UnorderedList spacing={6}>
        <ListItem>
          <HStack>
            <Text flexShrink={0}>Callback URL:</Text>
            <InputGroup size="sm">
              <Input type={'text'} defaultValue={webhookUrl} />
              <InputRightElement width="60px">
                <CopyButton size="sm" textToCopy={webhookUrl} />
              </InputRightElement>
            </InputGroup>
          </HStack>
        </ListItem>
        <ListItem>
          <HStack>
            <Text flexShrink={0}>Verificar token:</Text>
            <InputGroup size="sm">
              <Input type={'text'} defaultValue={verificationToken} />
              <InputRightElement width="60px">
                <CopyButton size="sm" textToCopy={verificationToken} />
              </InputRightElement>
            </InputGroup>
          </HStack>
        </ListItem>
        <ListItem>
          <HStack>
            <Text flexShrink={0}>
              Campos de webhook: check <Code>messages</Code>
            </Text>
          </HStack>
        </ListItem>
      </UnorderedList>
    </Stack>
  )
}
