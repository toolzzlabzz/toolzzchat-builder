import { CodeEditor } from '@/components/inputs/CodeEditor'
import { ExternalLinkIcon } from '@/components/icons'
import {
  OrderedList,
  ListItem,
  useColorModeValue,
  Link,
  Stack,
  Text,
} from '@chakra-ui/react'
import { useState } from 'react'
import { PopupSettings } from '../../../settings/PopupSettings'
import { parseInitPopupCode } from '../../../snippetParsers/popup'
import { parseApiHostValue } from '../../../snippetParsers'

type Props = {
  publicId: string
  customDomain?: string
}
export const WordpressPopupInstructions = ({
  publicId,
  customDomain,
}: Props) => {
  const [autoShowDelay, setAutoShowDelay] = useState<number>()

  const initCode = parseInitPopupCode({
    typebot: publicId,
    apiHost: parseApiHostValue(customDomain),
    autoShowDelay,
  })

  return (
    <OrderedList spacing={4} pl={5}>
      <ListItem>
        Instale{' '}
        <Link
          href="https://wordpress.org/plugins/typebot/"
          isExternal
          color={useColorModeValue('blue.500', 'blue.300')}
        >
          o plugin oficial do WordPress
          <ExternalLinkIcon mx="2px" />
        </Link>
      </ListItem>
      <ListItem>
        <Stack spacing={4}>
          <PopupSettings
            onUpdateSettings={(settings) =>
              setAutoShowDelay(settings.autoShowDelay)
            }
          />
          <Text>
            Agora você pode colocar o seguinte trecho de código em seu painel de
            administrador do WordPress:
          </Text>
          <CodeEditor value={initCode} lang="javascript" isReadOnly />
        </Stack>
      </ListItem>
    </OrderedList>
  )
}
