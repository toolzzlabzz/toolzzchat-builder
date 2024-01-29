import { TextInput } from '@/components/inputs'
import { VariableSearchInput } from '@/components/inputs/VariableSearchInput'
import { FormLabel, Stack } from '@chakra-ui/react'
import { EmailInputBlock, Variable } from '@typebot.io/schemas'
import { defaultEmailInputOptions } from '@typebot.io/schemas/features/blocks/inputs/email/constants'
import React from 'react'

type Props = {
  options: EmailInputBlock['options']
  onOptionsChange: (options: EmailInputBlock['options']) => void
}

export const EmailInputSettings = ({ options, onOptionsChange }: Props) => {
  const handlePlaceholderChange = (placeholder: string) =>
    onOptionsChange({ ...options, labels: { ...options?.labels, placeholder } })
  const handleButtonLabelChange = (button: string) =>
    onOptionsChange({ ...options, labels: { ...options?.labels, button } })
  const handleVariableChange = (variable?: Variable) =>
    onOptionsChange({ ...options, variableId: variable?.id })
  const handleRetryMessageChange = (retryMessageContent: string) =>
    onOptionsChange({ ...options, retryMessageContent })

  return (
    <Stack spacing={4}>
      <TextInput
        label="Placeholder:"
        defaultValue={
          options?.labels?.placeholder ??
          defaultEmailInputOptions.labels.placeholder
        }
        onChange={handlePlaceholderChange}
      />
      <TextInput
        label="Texto do botão:"
        defaultValue={
          options?.labels?.button ?? defaultEmailInputOptions.labels.button
        }
        onChange={handleButtonLabelChange}
      />
      <TextInput
        label="Mensagem de nova tentativa:"
        defaultValue={
          options?.retryMessageContent ??
          defaultEmailInputOptions.retryMessageContent
        }
        onChange={handleRetryMessageChange}
      />
      <Stack>
        <FormLabel mb="0" htmlFor="variable">
          Salvar mensagem em uma nova variavel:
        </FormLabel>
        <VariableSearchInput
          initialVariableId={options?.variableId}
          onSelectVariable={handleVariableChange}
        />
      </Stack>
    </Stack>
  )
}
