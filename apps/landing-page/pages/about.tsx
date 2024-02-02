import { Stack, Text, Flex, Heading } from '@chakra-ui/react'
import { Header } from 'components/common/Header/Header'
import { SocialMetaTags } from 'components/common/SocialMetaTags'
import React from 'react'
import { Footer } from 'components/common/Footer'
import { EndCta } from 'components/Homepage/EndCta'

const AboutPage = () => {
  return (
    <div className="flex flex-col items-center w-full overflow-x-hidden ">
      <Header />
      <SocialMetaTags
        currentUrl={`https://www.toolzz.com.br/home#b_386227_1_170145929540047078`}
      />
      <Stack
        spacing={10}
        mx="auto"
        maxW="3xl"
        my="20"
        fontSize="17px"
        textAlign="justify"
      >
        <Flex w="full">
          <Heading as="h1">Porque usar o Toolzz bots??</Heading>
        </Flex>
        <Text>
          Toolzz bots é um criador de formulários conversacionais que ajuda você
          a coletar respostas que têm mais valor em comparação com as formas
          tradicionais.
        </Text>
      </Stack>
      <EndCta />
      <Footer />
    </div>
  )
}

export default AboutPage
