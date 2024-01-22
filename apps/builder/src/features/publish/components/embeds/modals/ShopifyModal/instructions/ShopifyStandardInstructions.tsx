import { CodeEditor } from '@/components/inputs/CodeEditor'
import { OrderedList, ListItem, Stack, Text, Code } from '@chakra-ui/react'
import { useState } from 'react'
import { StandardSettings } from '../../../settings/StandardSettings'
import {
  parseStandardElementCode,
  parseStandardHeadCode,
} from '../../Javascript/JavascriptStandardSnippet'

type Props = {
  publicId: string
}

export const ShopifyStandardInstructions = ({ publicId }: Props) => {
  const [windowSizes, setWindowSizes] = useState<{
    width?: string
    height: string
  }>({
    height: '100%',
    width: '100%',
  })

  const headCode = parseStandardHeadCode(publicId)

  const elementCode = parseStandardElementCode(
    windowSizes.width,
    windowSizes.height
  )

  return (
    <OrderedList spacing={4} pl={5}>
      <ListItem>
        No painel da sua loja na pagina de <Code>Themes</Code>, clique em{' '}
        <Code>Actions {'>'} Edit code</Code>
      </ListItem>
      <ListItem>
        <Stack spacing={4}>
          <Text>
            Em <Code>Layout {'>'} theme.liquid</Code> arquivo, cole este código
            antes do fechamento da tag <Code>{'<head>'}</Code>
          </Text>

          <CodeEditor value={headCode} lang="html" isReadOnly />
        </Stack>
      </ListItem>
      <ListItem>
        <Stack spacing={4}>
          <StandardSettings
            onUpdateWindowSettings={(sizes) =>
              setWindowSizes({
                height: sizes.heightLabel,
                width: sizes.widthLabel,
              })
            }
          />
          <Text>
            Place an element on which the typebot will go in any file in the{' '}
            <Code>{'<body>'}</Code>:
          </Text>
          <CodeEditor value={elementCode} lang="html" isReadOnly />
        </Stack>
      </ListItem>
    </OrderedList>
  )
}
