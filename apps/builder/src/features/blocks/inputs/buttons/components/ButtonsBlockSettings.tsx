import { TextInput } from '@/components/inputs'
import { MoreInfoTooltip } from '@/components/MoreInfoTooltip'
import { VariableSearchInput } from '@/components/inputs/VariableSearchInput'
import { FormControl, FormLabel, Stack } from '@chakra-ui/react'
import { ChoiceInputBlock, Variable } from '@typebot.io/schemas'
import React from 'react'
import { SwitchWithRelatedSettings } from '@/components/SwitchWithRelatedSettings'
import { defaultChoiceInputOptions } from '@typebot.io/schemas/features/blocks/inputs/choice/constants'
<<<<<<< HEAD
=======
import { useTranslate } from '@tolgee/react'
>>>>>>> upstream/main

type Props = {
  options?: ChoiceInputBlock['options']
  onOptionsChange: (options: ChoiceInputBlock['options']) => void
}

export const ButtonsBlockSettings = ({ options, onOptionsChange }: Props) => {
  const { t } = useTranslate()
  const updateIsMultiple = (isMultipleChoice: boolean) =>
    onOptionsChange({ ...options, isMultipleChoice })
  const updateIsSearchable = (isSearchable: boolean) =>
    onOptionsChange({ ...options, isSearchable })
  const updateButtonLabel = (buttonLabel: string) =>
    onOptionsChange({ ...options, buttonLabel })
  const updateSearchInputPlaceholder = (searchInputPlaceholder: string) =>
    onOptionsChange({ ...options, searchInputPlaceholder })
  const updateSaveVariable = (variable?: Variable) =>
    onOptionsChange({ ...options, variableId: variable?.id })
  const updateDynamicDataVariable = (variable?: Variable) =>
    onOptionsChange({ ...options, dynamicVariableId: variable?.id })

  return (
    <Stack spacing={4}>
      <SwitchWithRelatedSettings
<<<<<<< HEAD
        label="Multiple choice?"
=======
        label={t('blocks.inputs.settings.multipleChoice.label')}
>>>>>>> upstream/main
        initialValue={
          options?.isMultipleChoice ??
          defaultChoiceInputOptions.isMultipleChoice
        }
        onCheckChange={updateIsMultiple}
      >
        <TextInput
<<<<<<< HEAD
          label="Submit button label:"
          defaultValue={
            options?.buttonLabel ?? defaultChoiceInputOptions.buttonLabel
=======
          label={t('blocks.inputs.settings.submitButton.label')}
          defaultValue={
            options?.buttonLabel ?? t('blocks.inputs.settings.buttonText.label')
>>>>>>> upstream/main
          }
          onChange={updateButtonLabel}
        />
      </SwitchWithRelatedSettings>
      <SwitchWithRelatedSettings
<<<<<<< HEAD
        label="Is searchable?"
=======
        label={t('blocks.inputs.settings.isSearchable.label')}
>>>>>>> upstream/main
        initialValue={
          options?.isSearchable ?? defaultChoiceInputOptions.isSearchable
        }
        onCheckChange={updateIsSearchable}
      >
        <TextInput
          label={t('blocks.inputs.settings.input.placeholder.label')}
          defaultValue={
            options?.searchInputPlaceholder ??
            t('blocks.inputs.settings.input.filterOptions.label')
          }
          onChange={updateSearchInputPlaceholder}
        />
      </SwitchWithRelatedSettings>
      <FormControl>
        <FormLabel>
          {t('blocks.inputs.button.settings.dynamicData.label')}{' '}
          <MoreInfoTooltip>
            {t('blocks.inputs.button.settings.dynamicData.infoText.label')}
          </MoreInfoTooltip>
        </FormLabel>
        <VariableSearchInput
          initialVariableId={options?.dynamicVariableId}
          onSelectVariable={updateDynamicDataVariable}
        />
      </FormControl>
      <Stack>
        <FormLabel mb="0" htmlFor="variable">
          {t('blocks.inputs.settings.saveAnswer.label')}
        </FormLabel>
        <VariableSearchInput
          initialVariableId={options?.variableId}
          onSelectVariable={updateSaveVariable}
        />
      </Stack>
    </Stack>
  )
}
