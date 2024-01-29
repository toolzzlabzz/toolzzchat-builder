import { Alert, AlertIcon, Button, Link, Stack, Text } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@/components/icons'
import { MakeComBlock, Webhook } from '@typebot.io/schemas'
import React from 'react'
import { WebhookAdvancedConfigForm } from '../../webhook/components/WebhookAdvancedConfigForm'

type Props = {
  block: MakeComBlock
  onOptionsChange: (options: MakeComBlock['options']) => void
}

export const MakeComSettings = ({
  block: { id: blockId, options },
  onOptionsChange,
}: Props) => {
  const setLocalWebhook = async (newLocalWebhook: Webhook) => {
    onOptionsChange({
      ...options,
      webhook: newLocalWebhook,
    })
  }

  const url = options?.webhook?.url

  return (
    <Stack spacing={4}>
      <Alert status={url ? 'success' : 'info'} rounded="md">
        <AlertIcon />
        {url ? (
          <>Seu cenário está configurado corretamente 🚀</>
        ) : (
          <Stack>
            <Text>Dirija-se ao Toolzz Connect para configurar este bloco:</Text>
            <Button
              as={Link}
              href="https://toolzz.com.br"
              isExternal
              colorScheme="blue"
            >
              <Text mr="2">Toolz Connect</Text> <ExternalLinkIcon />
            </Button>
          </Stack>
        )}
      </Alert>
      <WebhookAdvancedConfigForm
        blockId={blockId}
        webhook={options?.webhook}
        options={options}
        onWebhookChange={setLocalWebhook}
        onOptionsChange={onOptionsChange}
      />
    </Stack>
  )
}
