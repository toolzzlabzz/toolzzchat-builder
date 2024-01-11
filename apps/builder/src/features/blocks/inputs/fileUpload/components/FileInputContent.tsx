import { WithVariableContent } from '@/features/graph/components/nodes/block/WithVariableContent'
import { Text } from '@chakra-ui/react'
<<<<<<< HEAD
=======
import { useTranslate } from '@tolgee/react'
>>>>>>> upstream/main
import { FileInputBlock } from '@typebot.io/schemas'

type Props = {
  options: FileInputBlock['options']
}

<<<<<<< HEAD
export const FileInputContent = ({ options }: Props) =>
  options?.variableId ? (
    <WithVariableContent variableId={options.variableId} />
  ) : (
    <Text noOfLines={1} pr="6">
      Collect {options?.isMultipleAllowed ? 'files' : 'file'}
=======
export const FileInputContent = ({ options }: Props) => {
  const { t } = useTranslate()

  return options?.variableId ? (
    <WithVariableContent variableId={options.variableId} />
  ) : (
    <Text noOfLines={1} pr="6">
      {options?.isMultipleAllowed
        ? t('blocks.inputs.file.collectMultiple.label')
        : t('blocks.inputs.file.collectSingle.label')}
>>>>>>> upstream/main
    </Text>
  )
}
