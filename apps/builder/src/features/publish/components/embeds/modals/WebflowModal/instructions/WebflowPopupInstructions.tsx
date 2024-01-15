import { OrderedList, ListItem, Code, Stack, Text } from '@chakra-ui/react'
import { useState } from 'react'
import { PopupSettings } from '../../../settings/PopupSettings'
import { JavascriptPopupSnippet } from '../../Javascript/JavascriptPopupSnippet'
import { TextLink } from '@/components/TextLink'

export const WebflowPopupInstructions = () => {
  const [inputValue, setInputValue] = useState<number>()

  return (
    <>
      <OrderedList spacing={4} pl={5}>
        <ListItem>
          Pressione <Code>A</Code> para abrir o painel
          <Code>Adicionar elementos</Code>
        </ListItem>
        <ListItem>
          <Stack spacing={4}>
            <PopupSettings
              onUpdateSettings={(settings) =>
                setInputValue(settings.autoShowDelay)
              }
            />
            <Text>
              Adicione um elemento <Code>Embed</Code> da seção{' '}
              <Code>components</Code> e cole este código:
            </Text>
            <JavascriptPopupSnippet autoShowDelay={inputValue} />
          </Stack>
        </ListItem>
      </OrderedList>
      <Text fontSize="sm" colorScheme="gray" pl="5">
        Verifique a{' '}
        <TextLink href="" isExternal>
          documentação de integração do Webflow
        </TextLink>{' '}
        para mais opções.
      </Text>
    </>
  )
}
