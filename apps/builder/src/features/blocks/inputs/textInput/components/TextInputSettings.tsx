import { TextInput } from '@/components/inputs'
import { SwitchWithLabel } from '@/components/inputs/SwitchWithLabel'
import { VariableSearchInput } from '@/components/inputs/VariableSearchInput'
import { FormLabel, Stack } from '@chakra-ui/react'
<<<<<<< HEAD
=======
import { useTranslate } from '@tolgee/react'
>>>>>>> upstream/main
import { TextInputBlock, Variable } from '@typebot.io/schemas'
import { defaultTextInputOptions } from '@typebot.io/schemas/features/blocks/inputs/text/constants'
import React from 'react'

type Props = {
  options: TextInputBlock['options']
  onOptionsChange: (options: TextInputBlock['options']) => void
}

export const TextInputSettings = ({ options, onOptionsChange }: Props) => {
  const { t } = useTranslate()
  const handlePlaceholderChange = (placeholder: string) =>
    onOptionsChange({ ...options, labels: { ...options?.labels, placeholder } })
  const handleButtonLabelChange = (button: string) =>
    onOptionsChange({ ...options, labels: { ...options?.labels, button } })
  const handleLongChange = (isLong: boolean) =>
    onOptionsChange({ ...options, isLong })
  const handleVariableChange = (variable?: Variable) =>
    onOptionsChange({ ...options, variableId: variable?.id })

  return (
    <Stack spacing={4}>
      <SwitchWithLabel
<<<<<<< HEAD
        label="Long text?"
=======
        label={t('blocks.inputs.text.settings.longText.label')}
>>>>>>> upstream/main
        initialValue={options?.isLong ?? defaultTextInputOptions.isLong}
        onCheckChange={handleLongChange}
      />
      <TextInput
<<<<<<< HEAD
        label="Placeholder:"
=======
        label={t('blocks.inputs.settings.placeholder.label')}
>>>>>>> upstream/main
        defaultValue={
          options?.labels?.placeholder ??
          defaultTextInputOptions.labels.placeholder
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
          options?.labels?.button ?? defaultTextInputOptions.labels.button
        }
        onChange={handleButtonLabelChange}
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
