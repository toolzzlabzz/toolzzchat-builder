import { Heading, VStack, Stack, Text, Wrap, WrapItem } from '@chakra-ui/react'

export const Faq = () => (
  <VStack w="full" spacing="10">
    <Heading textAlign="center">Perguntas frequentes</Heading>
    <Wrap spacing={10}>
      <WrapItem maxW="500px">
        <Stack borderWidth={1} p="8" rounded="lg" spacing={4}>
          <Heading as="h2" fontSize="2xl">
            O que é considerado um chat mensal?
          </Heading>
          <Text>
            Um bate-papo é contado sempre que um usuário inicia uma discussão.
            Isso é independente do número de mensagens que ele envia e recebe.
            Para exemplo, se um usuário iniciar uma discussão e enviar 10
            mensagens para o bot, contará como 1 chat. Se o usuário conversar
            novamente mais tarde e seu sessão for lembrada, não será contada
            como um novo chat. <br />
            <br />
            Uma maneira fácil de pensar sobre isso: 1 chat equivale a uma linha
            no seu Tabela de resultados
          </Text>
        </Stack>
      </WrapItem>

      <WrapItem maxW="500px">
        <Stack borderWidth={1} p="8" rounded="lg" spacing={4}>
          <Heading as="h2" fontSize="2xl">
            O que acontece quando eu atingir o limite de chats incluídos?
          </Heading>
          <Text>
            Isso é incrível, seus bots estão trabalhando a toda velocidade. 🚀
            <br />
            <br />
            Você receberá primeiro um e-mail de alerta quando atingir 80% do seu
            limite incluído. Depois de atingir 100%, você receberá outro
            Notificação de Email.
            <br />
            <br />
            Depois disso, seu limite de bate-papo será atualizado
            automaticamente para o próximo nível.
          </Text>
        </Stack>
      </WrapItem>

      <WrapItem maxW="500px">
        <Stack borderWidth={1} p="8" rounded="lg" spacing={4}>
          <Heading as="h2" fontSize="2xl">
            Posso cancelar ou alterar minha assinatura a qualquer momento?
          </Heading>
          <Text>
            Sim, você pode cancelar, fazer upgrade ou downgrade de sua
            assinatura a qualquer momento. tempo. Não há compromisso de tempo
            mínimo ou lock-in.
            <br />
            <br />
            Ao fazer upgrade ou downgrade de sua assinatura, você receberá
            acesso às novas opções imediatamente. Sua próxima fatura terá um
            valor rateado.
          </Text>
        </Stack>
      </WrapItem>
    </Wrap>
  </VStack>
)
