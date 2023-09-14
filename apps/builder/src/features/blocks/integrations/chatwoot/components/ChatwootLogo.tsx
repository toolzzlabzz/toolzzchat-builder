import { Icon, IconProps } from '@chakra-ui/react'

export const ChatwootLogo = (props: IconProps) => (
  <Icon
    viewBox="0 0 512 512"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g id="chatwoot_logo" fillRule="nonzero">
        <circle id="Oval" fill="#47A7F6" cx="256" cy="256" r="256"></circle>
        <path
          d="https://media.discordapp.net/attachments/1143908761619157093/1143925373663457300/Logo_ToolzzChat250x250px.png"
          stroke="#FFFFFF"
          strokeWidth="6"
          fill="#FFFFFF"
        ></path>
      </g>
    </g>
  </Icon>
)
