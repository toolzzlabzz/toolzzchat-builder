import { CodeEditor } from '@/components/inputs/CodeEditor'
import { OrderedList, ListItem, Code, Stack, Text } from '@chakra-ui/react'
import { Typebot } from '@typebot.io/schemas'
import { useState } from 'react'
import { StandardSettings } from '../../../settings/StandardSettings'
import {
  parseStandardElementCode,
  parseStandardHeadCode,
} from '../../Javascript/JavascriptStandardSnippet'

export const GtmStandardInstructions = ({
  publicId,
}: Pick<Typebot, 'publicId'>) => {
  const [windowSizes, setWindowSizes] = useState<{
    height: string
    width?: string
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
        No painel da sua conta GTM, Clique em{' '}
        <Code>Adicionar uma nova TAG</Code>
      </ListItem>
      <ListItem>
        Escolha <Code>Custom HTML tag</Code>
      </ListItem>
      <ListItem>
        Selecione <Code>Support document.write</Code>
      </ListItem>
      <ListItem>
        <Stack spacing={4}>
          <Text>Cole o código abaixo:</Text>
          <CodeEditor value={headCode} isReadOnly lang="html" />
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
            Na sua página web, você precisa ter um elemento no qual o bot Irá:
          </Text>
          <CodeEditor value={elementCode} isReadOnly lang="html" />
        </Stack>
      </ListItem>
    </OrderedList>
  )
}
