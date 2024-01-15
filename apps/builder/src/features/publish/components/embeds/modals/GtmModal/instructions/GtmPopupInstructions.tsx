import { OrderedList, ListItem, Code, Stack, Text } from '@chakra-ui/react'
import { useState } from 'react'
import { PopupSettings } from '../../../settings/PopupSettings'
import { JavascriptPopupSnippet } from '../../Javascript/JavascriptPopupSnippet'

export const GtmPopupInstructions = () => {
  const [inputValue, setInputValue] = useState<number>()

  return (
    <OrderedList spacing={4} pl={5}>
      <ListItem>
        No painel da sua conta GTM, Clique em
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
          <PopupSettings
            onUpdateSettings={(settings) =>
              setInputValue(settings.autoShowDelay)
            }
          />
          <Text>Cole o código abaixo:</Text>
          <JavascriptPopupSnippet autoShowDelay={inputValue} />
        </Stack>
      </ListItem>
    </OrderedList>
  )
}
