import { OrderedList, ListItem, Code, Stack, Text } from '@chakra-ui/react'
import { JavascriptStandardSnippet } from '../../Javascript/JavascriptStandardSnippet'

export const WebflowStandardInstructions = () => (
  <OrderedList spacing={4} pl={5}>
    <ListItem>
      Pressione <Code>A</Code> para abrir o painel
      <Code>Adicionar elementos</Code>
    </ListItem>
    <ListItem>
      <Stack spacing={4}>
        <Text>
          Adicione um elemento <Code>Embed</Code> da seção{' '}
          <Code>components</Code> e cole este código:
        </Text>
        <JavascriptStandardSnippet />
      </Stack>
    </ListItem>
  </OrderedList>
)
