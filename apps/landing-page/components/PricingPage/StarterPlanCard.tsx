import { chakra, Tooltip, Text, HStack, Button, Stack } from '@chakra-ui/react'
import { HelpCircleIcon } from 'assets/icons/HelpCircleIcon'
import { Plan } from '@typebot.io/prisma'
import Link from 'next/link'
import React from 'react'
import { PricingCard } from './PricingCard'
import { prices, seatsLimits } from '@typebot.io/lib/billing/constants'

export const StarterPlanCard = () => {
  return (
    <PricingCard
      data={{
        price: prices.STARTER,
        name: 'Starter',
        featureLabel: 'Everything in Personal, plus:',
        features: [
          <Text key="seats">
            <chakra.span fontWeight="bold">
              {seatsLimits.STARTER} seats
            </chakra.span>{' '}
            included
          </Text>,
          <Stack key="chats" spacing={0}>
            <HStack spacing={1.5}>
              <Text>2,000 chats/mo</Text>
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
              Chats extra: R$10 por 500
            </Text>
          </Stack>,
          // 'Branding removed',
          'Colete arquivos dos usuários',
          'Crie pastas',
        ],
      }}
      borderWidth="1px"
      borderColor="orange.200"
      button={
        <Button
          as={Link}
          href={`https://chatbuilder.toolzz.ai/register?subscribePlan=${Plan.STARTER}`}
          colorScheme="orange"
          size="lg"
          w="full"
          fontWeight="extrabold"
          py={{ md: '8' }}
          variant="outline"
        >
          Assine Agora
        </Button>
      }
    />
  )
}
