import { Seo } from '@/components/Seo'
import { TextLink } from '@/components/TextLink'
import { T, useTranslate } from '@tolgee/react'
<<<<<<< HEAD
import {
  VStack,
  Heading,
  Text,
  Image,
  Box,
  useColorMode,
} from '@chakra-ui/react'
=======
import { VStack, Heading, Text } from '@chakra-ui/react'
>>>>>>> upstream/main
import { useRouter } from 'next/router'
import { SignInForm } from './SignInForm'

type Props = {
  type: 'signin' | 'signup'
  defaultEmail?: string
}

export const SignInPage = ({ type }: Props) => {
  const { t } = useTranslate()
  const { query } = useRouter()
  const { colorMode } = useColorMode()

  return (
    <VStack spacing={4} h="100vh" justifyContent="center">
      <Box
        w="full"
        justifyContent="center"
        alignContent="center"
        display="flex"
        marginBottom="25px"
      >
        <Image
          pointerEvents="none"
          width="150px"
          height="65px"
          src={
            colorMode === 'dark'
              ? '/images/tzz_bots_light.png'
              : '/images/tzz_bots_dark.png'
          }
          alt="Group image"
          rounded="md"
          objectFit="cover"
        />
      </Box>
      <Seo
        title={
          type === 'signin'
            ? t('auth.signin.heading')
            : t('auth.register.heading')
        }
      />
      <Heading
        onClick={() => {
          throw new Error('Sentry is working')
        }}
      >
        {type === 'signin'
          ? t('auth.signin.heading')
          : t('auth.register.heading')}
      </Heading>
      {type === 'signin' ? (
        <Text>
          {t('auth.signin.noAccountLabel.preLink')}{' '}
          <TextLink href="/register">
            {t('auth.signin.noAccountLabel.link')}
          </TextLink>
        </Text>
      ) : (
        <Text>
          {t('auth.register.alreadyHaveAccountLabel.preLink')}{' '}
          <TextLink href="/signin">
            {t('auth.register.alreadyHaveAccountLabel.link')}
          </TextLink>
        </Text>
      )}
      <SignInForm defaultEmail={query.g?.toString()} />
      {type === 'signup' ? (
        <Text fontSize="sm" maxW="400px" textAlign="center">
          <T
            keyName="auth.register.aggreeToTerms"
            params={{
              terms: <TextLink href={'https://typebot.io/terms-of-service'} />,
              privacy: (
                <TextLink href={'https://typebot.io/privacy-policies'} />
              ),
            }}
          />
        </Text>
      ) : null}
    </VStack>
  )
}
