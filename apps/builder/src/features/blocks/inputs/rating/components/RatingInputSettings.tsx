import { FormLabel, Stack } from '@chakra-ui/react'
import { DropdownList } from '@/components/DropdownList'
import { RatingInputBlock, Variable } from '@typebot.io/schemas'
import React from 'react'
import { SwitchWithLabel } from '@/components/inputs/SwitchWithLabel'
import { TextInput } from '@/components/inputs'
import { VariableSearchInput } from '@/components/inputs/VariableSearchInput'
import { defaultRatingInputOptions } from '@typebot.io/schemas/features/blocks/inputs/rating/constants'
<<<<<<< HEAD
=======
import { useTranslate } from '@tolgee/react'
>>>>>>> upstream/main

type Props = {
  options: RatingInputBlock['options']
  onOptionsChange: (options: RatingInputBlock['options']) => void
}

export const RatingInputSettings = ({ options, onOptionsChange }: Props) => {
  const { t } = useTranslate()

  const handleLengthChange = (length: number) =>
    onOptionsChange({ ...options, length })

  const handleTypeChange = (buttonType: 'Icons' | 'Numbers') =>
    onOptionsChange({ ...options, buttonType })

  const handleCustomIconCheck = (isEnabled: boolean) =>
    onOptionsChange({
      ...options,
      customIcon: { ...options?.customIcon, isEnabled },
    })

  const handleIconSvgChange = (svg: string) =>
    onOptionsChange({ ...options, customIcon: { ...options?.customIcon, svg } })

  const handleLeftLabelChange = (left: string) =>
    onOptionsChange({ ...options, labels: { ...options?.labels, left } })

  const handleRightLabelChange = (right: string) =>
    onOptionsChange({ ...options, labels: { ...options?.labels, right } })

  const handleButtonLabelChange = (button: string) =>
    onOptionsChange({ ...options, labels: { ...options?.labels, button } })

  const handleVariableChange = (variable?: Variable) =>
    onOptionsChange({ ...options, variableId: variable?.id })

  const handleOneClickSubmitChange = (isOneClickSubmitEnabled: boolean) =>
    onOptionsChange({ ...options, isOneClickSubmitEnabled })

  const length = options?.length ?? defaultRatingInputOptions.length
  const isOneClickSubmitEnabled =
    options?.isOneClickSubmitEnabled ??
    defaultRatingInputOptions.isOneClickSubmitEnabled

  return (
    <Stack spacing={4}>
      <Stack>
        <FormLabel mb="0" htmlFor="button">
          {t('blocks.inputs.rating.settings.maximum.label')}
        </FormLabel>
        <DropdownList
          onItemSelect={handleLengthChange}
          items={[3, 4, 5, 6, 7, 8, 9, 10]}
          currentItem={length}
        />
      </Stack>

      <Stack>
        <FormLabel mb="0" htmlFor="button">
          {t('blocks.inputs.rating.settings.type.label')}
        </FormLabel>
        <DropdownList
          onItemSelect={handleTypeChange}
          items={['Icons', 'Numbers'] as const}
          currentItem={
            options?.buttonType ?? defaultRatingInputOptions.buttonType
          }
        />
      </Stack>

      {options?.buttonType === 'Icons' && (
        <SwitchWithLabel
<<<<<<< HEAD
          label="Custom icon?"
=======
          label={t('blocks.inputs.rating.settings.customIcon.label')}
>>>>>>> upstream/main
          initialValue={
            options?.customIcon?.isEnabled ??
            defaultRatingInputOptions.customIcon.isEnabled
          }
          onCheckChange={handleCustomIconCheck}
        />
      )}
      {options?.buttonType === 'Icons' && options.customIcon?.isEnabled && (
        <TextInput
          label={t('blocks.inputs.rating.settings.iconSVG.label')}
          defaultValue={options.customIcon.svg}
          onChange={handleIconSvgChange}
          placeholder="<svg>...</svg>"
        />
      )}
      <TextInput
<<<<<<< HEAD
        label={`${options?.buttonType === 'Icons' ? '1' : '0'} label:`}
=======
        label={t('blocks.inputs.rating.settings.rateLabel.label', {
          rate: options?.buttonType === 'Icons' ? '1' : '0',
        })}
>>>>>>> upstream/main
        defaultValue={options?.labels?.left}
        onChange={handleLeftLabelChange}
        placeholder={t(
          'blocks.inputs.rating.settings.notLikely.placeholder.label'
        )}
      />
      <TextInput
<<<<<<< HEAD
        label={`${length} label:`}
=======
        label={t('blocks.inputs.rating.settings.rateLabel.label', {
          rate: length,
        })}
>>>>>>> upstream/main
        defaultValue={options?.labels?.right}
        onChange={handleRightLabelChange}
        placeholder={t(
          'blocks.inputs.rating.settings.extremelyLikely.placeholder.label'
        )}
      />
      <SwitchWithLabel
<<<<<<< HEAD
        label="One click submit"
        moreInfoContent='If enabled, the answer will be submitted as soon as the user clicks on a rating instead of showing the "Send" button.'
=======
        label={t('blocks.inputs.rating.settings.oneClickSubmit.label')}
        moreInfoContent={t(
          'blocks.inputs.rating.settings.oneClickSubmit.infoText.label'
        )}
>>>>>>> upstream/main
        initialValue={isOneClickSubmitEnabled}
        onCheckChange={handleOneClickSubmitChange}
      />
      {!isOneClickSubmitEnabled && (
        <TextInput
<<<<<<< HEAD
          label="Button label:"
=======
          label={t('blocks.inputs.settings.button.label')}
>>>>>>> upstream/main
          defaultValue={
            options?.labels?.button ?? defaultRatingInputOptions.labels.button
          }
          onChange={handleButtonLabelChange}
        />
      )}
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
