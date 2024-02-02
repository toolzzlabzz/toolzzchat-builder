import {
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Text,
  Stack,
  HStack,
  Tooltip,
  chakra,
  Button,
  Heading,
} from '@chakra-ui/react'
import { CheckIcon } from 'assets/icons/CheckIcon'
import { HelpCircleIcon } from 'assets/icons/HelpCircleIcon'
import { Plan } from '@typebot.io/prisma'
import Link from 'next/link'
import React from 'react'
import { parseNumberWithCommas } from '@typebot.io/lib'
import {
  chatsLimits,
  prices,
  seatsLimits,
} from '@typebot.io/lib/billing/constants'
import { formatPrice } from '@typebot.io/lib/billing/formatPrice'

type Props = {
  onChatsTiersClick: () => void
}

export const PlanComparisonTables = ({ onChatsTiersClick }: Props) => (
  <Stack spacing="12">
    <TableContainer>
      <Table>
        <Thead>
          <Tr>
            <Th fontWeight="bold" color="white" w="400px">
              Uso
            </Th>
            <Th>Free</Th>
            <Th color="orange.200">Starter</Th>
            <Th color="blue.200">Pro</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>Total bots</Td>
            <Td>Ilimitado</Td>
            <Td>Ilimitado</Td>
            <Td>Ilimitado</Td>
          </Tr>
          <Tr>
            <Td>Chats</Td>
            <Td>{chatsLimits.FREE} / mês</Td>
            <Td>{parseNumberWithCommas(chatsLimits.STARTER)} / mês</Td>
            <Td>{parseNumberWithCommas(chatsLimits.PRO)} / mês</Td>
          </Tr>
          <Tr>
            <Td>Chats adicionais</Td>
            <Td />
            <Td>{formatPrice(10)} por 500 chats</Td>
            <Td>
              <Button
                variant="outline"
                size="xs"
                onClick={onChatsTiersClick}
                colorScheme="gray"
              >
                Veja planos
              </Button>
            </Td>
          </Tr>
          <Tr>
            <Td>Armazenamento</Td>
            <Td />
            <Td>2 GB</Td>
            <Td>10 GB</Td>
          </Tr>
          <Tr>
            <Td>Membros</Td>
            <Td>Apenas você</Td>
            <Td>{seatsLimits.STARTER} vagas</Td>
            <Td>{seatsLimits.PRO} vagas</Td>
          </Tr>
          <Tr>
            <Td>Convidados</Td>
            <Td>Ilimitado</Td>
            <Td>Ilimitado</Td>
            <Td>Ilimitado</Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
    <TableContainer>
      <Table>
        <Thead>
          <Tr>
            <Th fontWeight="bold" color="white" w="400px">
              Funcionalidades
            </Th>
            <Th>Trial</Th>
            <Th color="orange.200">Starter</Th>
            <Th color="blue.200">Pro</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <TdWithTooltip
              text="20+ blocks"
              tooltip="Includes display bubbles (text, image, video, embed), question inputs (email, url, phone number...) and logic blocks (conditions, set variables...)"
            />
            <Td>
              <CheckIcon />
            </Td>
            <Td>
              <CheckIcon />
            </Td>
            <Td>
              <CheckIcon />
            </Td>
          </Tr>
          <Tr>
            <Td>Modelos iniciais</Td>
            <Td>
              <CheckIcon />
            </Td>
            <Td>
              <CheckIcon />
            </Td>
            <Td>
              <CheckIcon />
            </Td>
          </Tr>
          <Tr>
            <Td>Webhooks</Td>
            <Td>
              <CheckIcon />
            </Td>
            <Td>
              <CheckIcon />
            </Td>
            <Td>
              <CheckIcon />
            </Td>
          </Tr>
          <Tr>
            <Td>Google Sheets</Td>
            <Td>
              <CheckIcon />
            </Td>
            <Td>
              <CheckIcon />
            </Td>
            <Td>
              <CheckIcon />
            </Td>
          </Tr>
          <Tr>
            <Td>Google Analytics</Td>
            <Td>
              <CheckIcon />
            </Td>
            <Td>
              <CheckIcon />
            </Td>
            <Td>
              <CheckIcon />
            </Td>
          </Tr>
          <Tr>
            <Td>Envie emails</Td>
            <Td>
              <CheckIcon />
            </Td>
            <Td>
              <CheckIcon />
            </Td>
            <Td>
              <CheckIcon />
            </Td>
          </Tr>
          <Tr>
            <Td>Zapier</Td>
            <Td>
              <CheckIcon />
            </Td>
            <Td>
              <CheckIcon />
            </Td>
            <Td>
              <CheckIcon />
            </Td>
          </Tr>
          <Tr>
            <Td>Pabbly Connect</Td>
            <Td>
              <CheckIcon />
            </Td>
            <Td>
              <CheckIcon />
            </Td>
            <Td>
              <CheckIcon />
            </Td>
          </Tr>
          {/* <Tr>
            <Td>Make.com</Td>
            <Td>
              <CheckIcon />
            </Td>
            <Td>
              <CheckIcon />
            </Td>
            <Td>
              <CheckIcon />
            </Td>
          </Tr> */}
          <Tr>
            <Td>Javascript e CSS personalizados</Td>
            <Td>
              <CheckIcon />
            </Td>
            <Td>
              <CheckIcon />
            </Td>
            <Td>
              <CheckIcon />
            </Td>
          </Tr>
          <Tr>
            <Td>Exportar CSV</Td>
            <Td>
              <CheckIcon />
            </Td>
            <Td>
              <CheckIcon />
            </Td>
            <Td>
              <CheckIcon />
            </Td>
          </Tr>
          <Tr>
            <Td>Entradas de upload de arquivo</Td>
            <Td />
            <Td>
              <CheckIcon />
            </Td>
            <Td>
              <CheckIcon />
            </Td>
          </Tr>
          <Tr>
            <TdWithTooltip
              text="Pastas"
              tooltip="Organize seus bots em pastas"
            />
            <Td />
            <Td>Ilimitado</Td>
            <Td>Ilimitado</Td>
          </Tr>
          {/* <Tr>
            <Td>Remove branding</Td>
            <Td />
            <Td>
              <CheckIcon />
            </Td>
            <Td>
              <CheckIcon />
            </Td>
          </Tr> */}
          <Tr>
            <Td>Integração com WhatsApp </Td>
            <Td />
            <Td />
            <Td>
              <CheckIcon />
            </Td>
          </Tr>
          <Tr>
            <Td>Dominios customizados</Td>
            <Td />
            <Td />
            <Td>Ilimitado</Td>
          </Tr>
          <Tr>
            <TdWithTooltip
              text="Análise aprofundada"
              tooltip="Gráfico analítico que mostra a taxa de desistência do formulário, taxa de envio e muito mais."
            />
            <Td />
            <Td />
            <Td>
              <CheckIcon />
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
    <TableContainer>
      <Table>
        <Thead>
          <Tr>
            <Th fontWeight="bold" color="white" w="400px">
              Support
            </Th>
            <Th>Free</Th>
            <Th color="orange.200">Starter</Th>
            <Th color="blue.200">Pro</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>Priority support</Td>
            <Td />
            <Td />
            <Td>
              <CheckIcon />
            </Td>
          </Tr>
          {/* <Tr>
            <Td>Feature request priority</Td>
            <Td />
            <Td />
            <Td>
              <CheckIcon />
            </Td>
          </Tr> */}
        </Tbody>
      </Table>
    </TableContainer>
    <Stack
      direction={['column', 'row']}
      spacing={4}
      w="full"
      justify="space-around"
    >
      <Stack spacing={4}>
        <Heading as="h3" size="md">
          Personal
        </Heading>
        <Heading as="h3">Free</Heading>
        <Link href="https://chatbuilder.toolzz.ai/register">
          <Button variant="outline" colorScheme="gray">
            Get started
          </Button>
        </Link>
      </Stack>
      <Stack spacing={4}>
        <Heading as="h3" size="md" color="orange.200">
          Starter
        </Heading>
        <Heading as="h3">
          {formatPrice(prices.STARTER)}{' '}
          <chakra.span fontSize="lg">/ month</chakra.span>
        </Heading>
        <Link
          href={`https://chatbuilder.toolzz.ai/register?subscribePlan=${Plan.STARTER}`}
        >
          <Button variant="outline" colorScheme="orange">
            Contrate
          </Button>
        </Link>
      </Stack>
      <Stack spacing={4}>
        <Heading as="h3" size="md" color="blue.200">
          Pro
        </Heading>
        <Heading as="h3">
          {formatPrice(prices.PRO)}{' '}
          <chakra.span fontSize="lg">/ month</chakra.span>
        </Heading>
        <Link
          href={`https://chatbuilder.toolzz.ai/register?subscribePlan=${Plan.PRO}`}
        >
          <Button>Contrate</Button>
        </Link>
      </Stack>
    </Stack>
  </Stack>
)

const TdWithTooltip = ({
  text,
  tooltip,
}: {
  text: string
  tooltip: string
}) => (
  <HStack as={Td}>
    <Text>{text}</Text>
    <Tooltip hasArrow placement="top" label={tooltip}>
      <chakra.span cursor="pointer">
        <HelpCircleIcon />
      </chakra.span>
    </Tooltip>
  </HStack>
)
