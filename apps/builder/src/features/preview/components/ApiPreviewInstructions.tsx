import { CodeEditor } from '@/components/inputs/CodeEditor'
import { TextLink } from '@/components/TextLink'
import { useEditor } from '@/features/editor/providers/EditorProvider'
import { useTypebot } from '@/features/editor/providers/TypebotProvider'
import { parseApiHost } from '@/features/publish/components/embeds/snippetParsers'
import {
  Code,
  ListItem,
  OrderedList,
  Stack,
  StackProps,
  Text,
} from '@chakra-ui/react'

export const ApiPreviewInstructions = (props: StackProps) => {
  const { typebot } = useTypebot()
  const toolz = typebot
  const { startPreviewAtGroup } = useEditor()

  const startParamsBody = startPreviewAtGroup
    ? `{
    "startGroupId": "${startPreviewAtGroup}"
}`
    : undefined

  const replyBody = `{
  "message": "This is my reply"
}`

  return (
    <Stack
      spacing={10}
      overflowY="scroll"
      className="hide-scrollbar"
      w="full"
      {...props}
    >
      <OrderedList spacing={6} px="1">
        <ListItem>
          Todas as suas requisições precisam ser autenticadas com um token de
          API. <TextLink href="">Veja as instruções</TextLink>.
        </ListItem>
        <ListItem>
          <Stack>
            <Text>
              Para iniciar o chat, envie uma requisição <Code>POST</Code> para
            </Text>
            <CodeEditor
              isReadOnly
              lang={'shell'}
              value={`${parseApiHost(toolz?.customDomain)}/api/v1/toolzz/${
                toolz?.id
              }/preview/startChat`}
            />
            {startPreviewAtGroup && (
              <>
                <Text>with the following JSON body:</Text>
                <CodeEditor isReadOnly lang={'json'} value={startParamsBody} />
              </>
            )}
          </Stack>
        </ListItem>
        <ListItem>
          A primeira resposta conterá um <Code>sessionId</Code> que você
          precisará para solicitações subsequentes.
        </ListItem>
        <ListItem>
          <Stack>
            <Text>
              Para enviar respostas, envie requisições <Code>POST</Code> para
            </Text>
            <CodeEditor
              isReadOnly
              lang={'shell'}
              value={`${parseApiHost(
                toolz?.customDomain
              )}/api/v1/sessions/<ID_FROM_FIRST_RESPONSE>/continueChat`}
            />
            <Text>Com o seguinte corpo JSON:</Text>
            <CodeEditor isReadOnly lang={'json'} value={replyBody} />
            <Text>
              Substitua <Code>{'<ID_FROM_FIRST_RESPONSE>'}</Code> por{' '}
              <Code>sessionId</Code>.
            </Text>
          </Stack>
        </ListItem>
      </OrderedList>
      <Text fontSize="sm" pl="1">
        Confira a{' '}
        <TextLink href="" isExternal>
          referência da API
        </TextLink>{' '}
        para mais informações
      </Text>
    </Stack>
  )
}
