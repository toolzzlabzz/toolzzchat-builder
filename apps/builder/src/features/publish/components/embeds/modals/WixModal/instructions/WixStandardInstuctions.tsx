import { OrderedList, ListItem, Code, Stack, Text } from '@chakra-ui/react'
import { JavascriptStandardSnippet } from '../../Javascript/JavascriptStandardSnippet'

export const WixStandardInstructions = () => {
  return (
    <OrderedList spacing={4} pl={5}>
      <ListItem>
        No Editor de Sites Wix:
        <Code>
          Adicionar {'>'} código incorporado {'>'} HTML de incorporação
        </Code>
      </ListItem>
      <ListItem>
        <Stack spacing={4}>
          <Text>
            Clique em <Code>Enter code</Code> e cole este código:
          </Text>
          <JavascriptStandardSnippet widthLabel="100%" heightLabel="100%" />
        </Stack>
      </ListItem>
    </OrderedList>
  )
}
