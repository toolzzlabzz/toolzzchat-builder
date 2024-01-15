import { useTypebot } from '@/features/editor/providers/TypebotProvider'
import { OrderedList, ListItem, Code, Stack, Text } from '@chakra-ui/react'
import { BubbleProps } from '@typebot.io/nextjs'
import { useState } from 'react'
import { BubbleSettings } from '../../../settings/BubbleSettings/BubbleSettings'
import { parseDefaultBubbleTheme } from '../../Javascript/instructions/JavascriptBubbleInstructions'
import { JavascriptBubbleSnippet } from '../../Javascript/JavascriptBubbleSnippet'

export const WixBubbleInstructions = () => {
  const { typebot } = useTypebot()

  const [theme, setTheme] = useState<BubbleProps['theme']>(
    parseDefaultBubbleTheme(typebot)
  )
  const [previewMessage, setPreviewMessage] =
    useState<BubbleProps['previewMessage']>()

  return (
    <OrderedList spacing={4} pl={5}>
      <ListItem>
        Vá até <Code>Configurações</Code> no seu painel no Wix
      </ListItem>
      <ListItem>
        Clique em <Code>Custom Code</Code> em <Code>Avançado</Code>
      </ListItem>
      <ListItem>
        Clique em <Code>+ Add Custom Code</Code> no canto superior direito.
      </ListItem>
      <ListItem>
        <Stack spacing={4}>
          <BubbleSettings
            previewMessage={previewMessage}
            defaultPreviewMessageAvatar={
              typebot?.theme.chat?.hostAvatar?.url ?? ''
            }
            theme={theme}
            onPreviewMessageChange={setPreviewMessage}
            onThemeChange={setTheme}
          />
          <Text> Cole este trecho na caixa de código:</Text>
          <JavascriptBubbleSnippet
            theme={theme}
            previewMessage={previewMessage}
          />
        </Stack>
      </ListItem>
      <ListItem>
        Selecione &quot;Body - start&quot; em <Code>Place Code in</Code>
      </ListItem>
      <ListItem>Clique em Aplicar</ListItem>
    </OrderedList>
  )
}
