import { Flex, Stack, Heading, Box, Text, Button } from '@chakra-ui/react'
import React from 'react'
import Image from 'next/image'
import nativeFeelingSrc from 'public/images/native-feeling.png'
import { ArrowRight } from 'assets/icons/ArrowRight'
import { Flare } from 'assets/illustrations/Flare'
import Link from 'next/link'

export const EasyEmbed = () => {
  return (
    <Flex as="section" justify="center" pos="relative">
      <Flare
        color="orange"
        pos="absolute"
        right="-200px"
        top="100px"
        data-aos="fade"
        data-aos-delay="500"
      />
      <Stack
        style={{ maxWidth: '1000px' }}
        pt={32}
        w="full"
        px="4"
        spacing={12}
        direction={['column', 'row']}
        justifyContent="space-between"
        alignItems="center"
      >
        <Stack spacing="6" maxW="300px" minW={[0, '300px']}>
          <Heading as="h1" data-aos="fade">
            Integre com apenas um clique
          </Heading>
          <Text
            color="gray.400"
            fontSize={{ base: 'lg', xl: 'xl' }}
            data-aos="fade"
          >
            Incorporar seu bot em suas aplicações é moleza. O Toolz Bots fornece
            instruções passo a passo específicas para cada plataforma. Seu
            typebot sempre terá uma sensação &quot;nativa&quot;.
          </Text>
          <Flex data-aos="fade">
            <Button
              as={Link}
              rightIcon={<ArrowRight />}
              href={`https://chatbuilder.toolzz.ai/register`}
              variant="ghost"
              colorScheme="orange"
            >
              Experimente agora.
            </Button>
          </Flex>
        </Stack>
        <Box rounded="md" data-aos="fade">
          <Image
            src={nativeFeelingSrc}
            alt="incomplete results illustration"
            placeholder="blur"
          />
        </Box>
      </Stack>
    </Flex>
  )
}
