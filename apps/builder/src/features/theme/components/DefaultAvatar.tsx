import { Icon, IconProps } from "@chakra-ui/react";
import React from "react";

export const DefaultAvatar = (props: IconProps) => {
  return (
    <Icon
      viewBox="0 0 75 75"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      boxSize="40px"
      data-testid="default-avatar"
      {...props}
    >
      <image
        href="https://media.discordapp.net/attachments/915691669234548746/1188803412045856838/robot.png"
        width="100%"
        height="100%"
      />
    </Icon>
  );
};
