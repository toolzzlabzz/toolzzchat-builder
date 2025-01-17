import { Text } from "@chakra-ui/react";
import { ChatwootBlock } from "@typebot.io/schemas";

type Props = {
  block: ChatwootBlock;
};

export const ChatwootNodeBody = ({ block }: Props) =>
  block.options?.task === "Close widget" ? (
    <Text>Fechar Toolzz Chat</Text>
  ) : block?.options?.websiteToken?.length === 0 ? (
    <Text color="gray.500">Configure...</Text>
  ) : (
    <Text>Abrir Toolzz Chat</Text>
  );
