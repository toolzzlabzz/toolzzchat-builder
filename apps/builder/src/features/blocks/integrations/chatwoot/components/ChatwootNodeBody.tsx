import { Text } from "@chakra-ui/react";
import { ChatwootBlock } from "@typebot.io/schemas";

type Props = {
  block: ChatwootBlock;
};

export const ChatwootNodeBody = ({ block }: Props) =>
<<<<<<< HEAD
  block.options?.task === "Close widget" ? (
    <Text>Fechar Toolzz Chat</Text>
  ) : block?.options?.websiteToken?.length === 0 ? (
=======
  block.options?.task === 'Close widget' ? (
    <Text>Close Chatwoot</Text>
  ) : (block.options?.websiteToken?.length ?? 0) === 0 ? (
>>>>>>> upstream/main
    <Text color="gray.500">Configure...</Text>
  ) : (
    <Text>Abrir Toolzz Chat</Text>
  );
