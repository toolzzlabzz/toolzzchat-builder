import { TextInput } from '@/components/inputs'
import { VariableSearchInput } from '@/components/inputs/VariableSearchInput'
import { FormLabel, Stack } from '@chakra-ui/react'
import { PhoneNumberInputBlock, Variable } from '@typebot.io/schemas'
import React from 'react'
import { CountryCodeSelect } from './CountryCodeSelect'
<<<<<<< HEAD
=======
import { useTranslate } from '@tolgee/react'
>>>>>>> upstream/main
import { defaultPhoneInputOptions } from '@typebot.io/schemas/features/blocks/inputs/phone/constants'

type Props = {
  options: PhoneNumberInputBlock['options']
  onOptionsChange: (options: PhoneNumberInputBlock['options']) => void
}

export const PhoneInputSettings = ({ options, onOptionsChange }: Props) => {
  const { t } = useTranslate()
  const handlePlaceholderChange = (placeholder: string) =>
    onOptionsChange({ ...options, labels: { ...options?.labels, placeholder } })
  const handleButtonLabelChange = (button: string) =>
    onOptionsChange({ ...options, labels: { ...options?.labels, button } })
  const handleVariableChange = (variable?: Variable) =>
    onOptionsChange({ ...options, variableId: variable?.id })
  const handleRetryMessageChange = (retryMessageContent: string) =>
    onOptionsChange({ ...options, retryMessageContent })
  const handleDefaultCountryChange = (defaultCountryCode: string) =>
    onOptionsChange({ ...options, defaultCountryCode })

  return (
    <Stack spacing={4}>
      <TextInput
<<<<<<< HEAD
        label="Placeholder:"
=======
        label={t('blocks.inputs.settings.placeholder.label')}
>>>>>>> upstream/main
        defaultValue={
          options?.labels?.placeholder ??
          defaultPhoneInputOptions.labels.placeholder
        }
        onChange={handlePlaceholderChange}
      />
      <TextInput
<<<<<<< HEAD
        label="Button label:"
=======
        label={t('blocks.inputs.settings.button.label')}
>>>>>>> upstream/main
        defaultValue={
          options?.labels?.button ?? defaultPhoneInputOptions.labels.button
        }
        onChange={handleButtonLabelChange}
      />
      <Stack>
        <FormLabel mb="0" htmlFor="button">
          {t('blocks.inputs.phone.settings.defaultCountry.label')}
        </FormLabel>
        <CountryCodeSelect
          onSelect={handleDefaultCountryChange}
          countryCode={options?.defaultCountryCode}
        />
      </Stack>
      <TextInput
<<<<<<< HEAD
        label="Retry message:"
=======
        label={t('blocks.inputs.settings.retryMessage.label')}
>>>>>>> upstream/main
        defaultValue={
          options?.retryMessageContent ??
          defaultPhoneInputOptions.retryMessageContent
        }
        onChange={handleRetryMessageChange}
      />
      <Stack>
        <FormLabel mb="0" htmlFor="variable">
          {t('blocks.inputs.settings.saveAnswer.label')}
        </FormLabel>
        <VariableSearchInput
          initialVariableId={options?.variableId}
          onSelectVariable={handleVariableChange}
        />
      </Stack>
    </Stack>
  )
}
