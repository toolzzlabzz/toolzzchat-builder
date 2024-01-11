import { SwitchWithRelatedSettings } from '@/components/SwitchWithRelatedSettings'
import { TextInput } from '@/components/inputs'
import { SwitchWithLabel } from '@/components/inputs/SwitchWithLabel'
import { VariableSearchInput } from '@/components/inputs/VariableSearchInput'
import { FormLabel, Stack } from '@chakra-ui/react'
import { DateInputBlock, Variable } from '@typebot.io/schemas'
import React from 'react'
import { defaultDateInputOptions } from '@typebot.io/schemas/features/blocks/inputs/date/constants'
<<<<<<< HEAD
=======
import { useTranslate } from '@tolgee/react'
>>>>>>> upstream/main

type Props = {
  options: DateInputBlock['options']
  onOptionsChange: (options: DateInputBlock['options']) => void
}

export const DateInputSettings = ({ options, onOptionsChange }: Props) => {
  const { t } = useTranslate()
  const updateFromLabel = (from: string) =>
    onOptionsChange({ ...options, labels: { ...options?.labels, from } })
  const updateToLabel = (to: string) =>
    onOptionsChange({ ...options, labels: { ...options?.labels, to } })
  const updateButtonLabel = (button: string) =>
    onOptionsChange({ ...options, labels: { ...options?.labels, button } })
  const updateIsRange = (isRange: boolean) =>
    onOptionsChange({ ...options, isRange })
  const updateHasTime = (hasTime: boolean) =>
    onOptionsChange({ ...options, hasTime })
  const updateVariable = (variable?: Variable) =>
    onOptionsChange({ ...options, variableId: variable?.id })
  const updateFormat = (format: string) => {
    if (format === '') return onOptionsChange({ ...options, format: undefined })
    onOptionsChange({ ...options, format })
  }
  const updateMin = (min: string) => {
    if (min === '') return onOptionsChange({ ...options, min: undefined })
    onOptionsChange({ ...options, min })
  }
  const updateMax = (max: string) => {
    if (max === '') return onOptionsChange({ ...options, max: undefined })
    onOptionsChange({ ...options, max })
  }

  return (
    <Stack spacing={4}>
      <SwitchWithRelatedSettings
<<<<<<< HEAD
        label="Is range?"
=======
        label={t('blocks.inputs.date.settings.isRange.label')}
>>>>>>> upstream/main
        initialValue={options?.isRange ?? defaultDateInputOptions.isRange}
        onCheckChange={updateIsRange}
      >
        <TextInput
<<<<<<< HEAD
          label="From label:"
=======
          label={t('blocks.inputs.date.settings.from.label')}
>>>>>>> upstream/main
          defaultValue={
            options?.labels?.from ?? defaultDateInputOptions.labels.from
          }
          onChange={updateFromLabel}
        />
        <TextInput
<<<<<<< HEAD
          label="To label:"
          defaultValue={
            options?.labels?.to ?? defaultDateInputOptions.labels.to
=======
          label={t('blocks.inputs.date.settings.to.label')}
          defaultValue={
            options?.labels?.to ??
            t('blocks.inputs.date.settings.toInputValue.label')
>>>>>>> upstream/main
          }
          onChange={updateToLabel}
        />
      </SwitchWithRelatedSettings>
      <SwitchWithLabel
<<<<<<< HEAD
        label="With time?"
=======
        label={t('blocks.inputs.date.settings.withTime.label')}
>>>>>>> upstream/main
        initialValue={options?.hasTime ?? defaultDateInputOptions.hasTime}
        onCheckChange={updateHasTime}
      />
      <TextInput
<<<<<<< HEAD
        label="Button label:"
=======
        label={t('blocks.inputs.settings.button.label')}
>>>>>>> upstream/main
        defaultValue={
          options?.labels?.button ?? defaultDateInputOptions.labels.button
        }
        onChange={updateButtonLabel}
      />
      <TextInput
<<<<<<< HEAD
        label="Min:"
=======
        label={t('blocks.inputs.settings.min.label')}
>>>>>>> upstream/main
        defaultValue={options?.min}
        placeholder={options?.hasTime ? 'YYYY-MM-DDTHH:mm' : 'YYYY-MM-DD'}
        onChange={updateMin}
      />
      <TextInput
<<<<<<< HEAD
        label="Max:"
=======
        label={t('blocks.inputs.settings.max.label')}
>>>>>>> upstream/main
        defaultValue={options?.max}
        placeholder={options?.hasTime ? 'YYYY-MM-DDTHH:mm' : 'YYYY-MM-DD'}
        onChange={updateMax}
      />
      <TextInput
<<<<<<< HEAD
        label="Format:"
=======
        label={t('blocks.inputs.date.settings.format.label')}
>>>>>>> upstream/main
        defaultValue={
          options?.format ??
          (options?.hasTime
            ? defaultDateInputOptions.formatWithTime
            : defaultDateInputOptions.format)
        }
<<<<<<< HEAD
        moreInfoTooltip="i.e dd/MM/yyyy, MM/dd/yy, yyyy-MM-dd"
=======
        moreInfoTooltip={`
					${t(
            'blocks.inputs.date.settings.format.example.label'
          )} dd/MM/yyyy, MM/dd/yy, yyyy-MM-dd
				`}
>>>>>>> upstream/main
        placeholder={options?.hasTime ? 'dd/MM/yyyy HH:mm' : 'dd/MM/yyyy'}
        onChange={updateFormat}
      />
      <Stack>
        <FormLabel mb="0" htmlFor="variable">
          {t('blocks.inputs.settings.saveAnswer.label')}
        </FormLabel>
        <VariableSearchInput
          initialVariableId={options?.variableId}
          onSelectVariable={updateVariable}
        />
      </Stack>
    </Stack>
  )
}
