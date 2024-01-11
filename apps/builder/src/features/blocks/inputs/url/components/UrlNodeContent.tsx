import React from 'react'
import { Text } from '@chakra-ui/react'
import { WithVariableContent } from '@/features/graph/components/nodes/block/WithVariableContent'
import { UrlInputBlock } from '@typebot.io/schemas'
import { defaultUrlInputOptions } from '@typebot.io/schemas/features/blocks/inputs/url/constants'

type Props = {
  options: UrlInputBlock['options']
}

<<<<<<< HEAD
export const UrlNodeContent = ({ options }: Props) =>
  options?.variableId ? (
=======
export const UrlNodeContent = ({ options }: Props) => {
  return options?.variableId ? (
>>>>>>> upstream/main
    <WithVariableContent variableId={options.variableId} />
  ) : (
    <Text color={'gray.500'} w="90%">
      {options?.labels?.placeholder ??
        defaultUrlInputOptions.labels.placeholder}
    </Text>
  )
}
