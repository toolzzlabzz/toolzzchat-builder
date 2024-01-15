import { OrderedList, ListItem, Code, Stack, Text } from '@chakra-ui/react'
import { useState } from 'react'
import { PopupSettings } from '../../../settings/PopupSettings'
import { JavascriptPopupSnippet } from '../../Javascript/JavascriptPopupSnippet'

export const WixPopupInstructions = () => {
  const [inputValue, setInputValue] = useState<number>()

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
          <PopupSettings
            onUpdateSettings={(settings) =>
              setInputValue(settings.autoShowDelay)
            }
          />
          <Text>Cole este trecho na caixa de código:</Text>
          <JavascriptPopupSnippet autoShowDelay={inputValue} />
        </Stack>
      </ListItem>
      <ListItem>
        Selecione &quot;Body - start&quot; em <Code>Place Code in</Code>
      </ListItem>
      <ListItem>Clique em Aplicar</ListItem>
    </OrderedList>
  )
}
