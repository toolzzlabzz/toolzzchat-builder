import {
  chakra,
  Tooltip,
  Text,
  Button,
  HStack,
  Stack,
  Link,
} from '@chakra-ui/react'
import { HelpCircleIcon } from 'assets/icons/HelpCircleIcon'
import { Plan } from '@typebot.io/prisma'
import React from 'react'
import { PricingCard } from './PricingCard'
import { prices, seatsLimits } from '@typebot.io/lib/billing/constants'

type Props = {
  onChatsTiersClick: () => void
}

export const ProPlanCard = ({ onChatsTiersClick }: Props) => (
  <PricingCard
    data={{
      price: prices.PRO,
      name: 'Pro',
      featureLabel: 'Everything in Personal, plus:',
      features: [
        <Text key="seats">
          <chakra.span fontWeight="bold">{seatsLimits.PRO} seats</chakra.span>{' '}
          included
        </Text>,
        <Stack key="chats" spacing={0}>
          <HStack spacing={1.5}>
            <Text>10,000 chats/mo</Text>
            <Tooltip
              hasArrow
              placement="top"
              label="Um chat é contado sempre que um usuário inicia uma discussão. Isso é
              independente do número de mensagens que ele envia e recebe."
            >
              <chakra.span cursor="pointer" h="7">
                <HelpCircleIcon />
              </chakra.span>
            </Tooltip>
          </HStack>
          <Text fontSize="sm" color="gray.400">
            Extra chats:{' '}
            <Button
              variant="outline"
              size="xs"
              colorScheme="gray"
              onClick={onChatsTiersClick}
            >
              Veja os tipos de assinatura
            </Button>
          </Text>
        </Stack>,
        'Integração com WhatsApp ',
        'Dominios personalizados',
        'Análise aprofundada',
      ],
    }}
    borderWidth="3px"
    borderColor="blue.200"
    button={
      <Button
        as={Link}
        href={`https://chatbuilder.toolzz.ai/register?subscribePlan=${Plan.PRO}`}
        colorScheme="blue"
        size="lg"
        w="full"
        fontWeight="extrabold"
        py={{ md: '8' }}
      >
        Contrate agora
      </Button>
    }
  />
)
