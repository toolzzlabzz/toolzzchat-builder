
import { Image, ImageProps } from '@chakra-ui/react'

export const ChatwootLogo = (props: ImageProps) => (
  <Image
    boxSize="512px" // Adjust size as needed
    objectFit="cover" // Adjust as needed
    src="https://media.discordapp.net/attachments/915691669234548746/1190964747433160825/Logo_ToolzzChat250x250px_2.png"
    alt="Toolzz Chat Logo"
    {...props}
  />
)
