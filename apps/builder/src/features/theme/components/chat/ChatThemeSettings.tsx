import {
  LargeRadiusIcon,
  MediumRadiusIcon,
  NoRadiusIcon,
} from '@/components/icons'
import { RadioButtons } from '@/components/inputs/RadioButtons'
import { Heading, Stack } from '@chakra-ui/react'
import { AvatarProps, ChatTheme, Theme } from '@typebot.io/schemas'
import React from 'react'
import { AvatarForm } from './AvatarForm'
import { ButtonsTheme } from './ButtonsTheme'
import { GuestBubbles } from './GuestBubbles'
import { HostBubbles } from './HostBubbles'
import { InputsTheme } from './InputsTheme'
import { defaultTheme } from '@typebot.io/schemas/features/typebot/theme/constants'
<<<<<<< HEAD
=======
import { useTranslate } from '@tolgee/react'
>>>>>>> upstream/main

type Props = {
  workspaceId: string
  typebotId: string
  chatTheme: Theme['chat']
  onChatThemeChange: (chatTheme: ChatTheme) => void
}

export const ChatThemeSettings = ({
  workspaceId,
  typebotId,
  chatTheme,
  onChatThemeChange,
}: Props) => {
<<<<<<< HEAD
=======
  const { t } = useTranslate()

>>>>>>> upstream/main
  const updateHostBubbles = (
    hostBubbles: NonNullable<Theme['chat']>['hostBubbles']
  ) => onChatThemeChange({ ...chatTheme, hostBubbles })

  const updateGuestBubbles = (
    guestBubbles: NonNullable<Theme['chat']>['guestBubbles']
  ) => onChatThemeChange({ ...chatTheme, guestBubbles })

  const updateButtons = (buttons: NonNullable<Theme['chat']>['buttons']) =>
    onChatThemeChange({ ...chatTheme, buttons })

  const updateInputs = (inputs: NonNullable<Theme['chat']>['inputs']) =>
    onChatThemeChange({ ...chatTheme, inputs })

  const updateHostAvatar = (hostAvatar: AvatarProps) =>
    onChatThemeChange({ ...chatTheme, hostAvatar })

  const updateGuestAvatar = (guestAvatar: AvatarProps) =>
    onChatThemeChange({ ...chatTheme, guestAvatar })

  return (
    <Stack spacing={6}>
      <AvatarForm
        uploadFileProps={{
          workspaceId,
          typebotId,
          fileName: 'hostAvatar',
        }}
<<<<<<< HEAD
        title="Bot avatar"
=======
        title={t('theme.sideMenu.chat.botAvatar')}
>>>>>>> upstream/main
        avatarProps={chatTheme?.hostAvatar}
        isDefaultCheck
        onAvatarChange={updateHostAvatar}
      />
      <AvatarForm
        uploadFileProps={{
          workspaceId,
          typebotId,
          fileName: 'guestAvatar',
        }}
<<<<<<< HEAD
        title="User avatar"
=======
        title={t('theme.sideMenu.chat.userAvatar')}
>>>>>>> upstream/main
        avatarProps={chatTheme?.guestAvatar}
        onAvatarChange={updateGuestAvatar}
      />
      <Stack borderWidth={1} rounded="md" p="4" spacing={4}>
<<<<<<< HEAD
        <Heading fontSize="lg">Bot Messages</Heading>
=======
        <Heading fontSize="lg">{t('theme.sideMenu.chat.botBubbles')}</Heading>
>>>>>>> upstream/main
        <HostBubbles
          hostBubbles={chatTheme?.hostBubbles}
          onHostBubblesChange={updateHostBubbles}
        />
      </Stack>

      <Stack borderWidth={1} rounded="md" p="4" spacing={4}>
<<<<<<< HEAD
        <Heading fontSize="lg">User Messages</Heading>
=======
        <Heading fontSize="lg">{t('theme.sideMenu.chat.userBubbles')}</Heading>
>>>>>>> upstream/main
        <GuestBubbles
          guestBubbles={chatTheme?.guestBubbles}
          onGuestBubblesChange={updateGuestBubbles}
        />
      </Stack>
      <Stack borderWidth={1} rounded="md" p="4" spacing={4}>
<<<<<<< HEAD
        <Heading fontSize="lg">Botões</Heading>
=======
        <Heading fontSize="lg">{t('theme.sideMenu.chat.buttons')}</Heading>
>>>>>>> upstream/main
        <ButtonsTheme
          buttons={chatTheme?.buttons}
          onButtonsChange={updateButtons}
        />
      </Stack>
      <Stack borderWidth={1} rounded="md" p="4" spacing={4}>
<<<<<<< HEAD
        <Heading fontSize="lg">Inputs</Heading>
        <InputsTheme inputs={chatTheme?.inputs} onInputsChange={updateInputs} />
      </Stack>
      <Stack borderWidth={1} rounded="md" p="4" spacing={4}>
        <Heading fontSize="lg">Bordas</Heading>
=======
        <Heading fontSize="lg">{t('theme.sideMenu.chat.inputs')}</Heading>
        <InputsTheme inputs={chatTheme?.inputs} onInputsChange={updateInputs} />
      </Stack>
      <Stack borderWidth={1} rounded="md" p="4" spacing={4}>
        <Heading fontSize="lg">
          {t('theme.sideMenu.chat.cornersRoundness')}
        </Heading>
>>>>>>> upstream/main
        <RadioButtons
          options={[
            {
              label: <NoRadiusIcon />,
              value: 'none',
            },
            {
              label: <MediumRadiusIcon />,
              value: 'medium',
            },
            {
              label: <LargeRadiusIcon />,
              value: 'large',
            },
          ]}
          value={chatTheme?.roundness ?? defaultTheme.chat.roundness}
          onSelect={(roundness) =>
            onChatThemeChange({ ...chatTheme, roundness })
          }
        />
      </Stack>
    </Stack>
  )
}
