import React from 'react'
<<<<<<< HEAD
import {
  HStack,
  Flex,
  Button,
  useDisclosure,
  Image,
  useColorMode,
} from '@chakra-ui/react'
import { SettingsIcon } from '@/components/icons'
import { useUser } from '@/features/account/hooks/useUser'
import { isNotDefined } from '@typebot.io/lib'
import Link from 'next/link'
// import { EmojiOrImageIcon } from '@/components/EmojiOrImageIcon'
=======
import { HStack, Flex, Button, useDisclosure } from '@chakra-ui/react'
import { HardDriveIcon, SettingsIcon } from '@/components/icons'
import { useUser } from '@/features/account/hooks/useUser'
import { isNotDefined } from '@typebot.io/lib'
import Link from 'next/link'
import { EmojiOrImageIcon } from '@/components/EmojiOrImageIcon'
>>>>>>> upstream/main
import { useTranslate } from '@tolgee/react'
import { useWorkspace } from '@/features/workspace/WorkspaceProvider'
import { WorkspaceDropdown } from '@/features/workspace/components/WorkspaceDropdown'
import { WorkspaceSettingsModal } from '@/features/workspace/components/WorkspaceSettingsModal'

export const DashboardHeader = () => {
  const { t } = useTranslate()
  const { user, logOut } = useUser()
  const { workspace, switchWorkspace, createWorkspace } = useWorkspace()
  const { colorMode } = useColorMode()

  const { isOpen, onOpen, onClose } = useDisclosure()

  const handleCreateNewWorkspace = () =>
    createWorkspace(user?.name ?? undefined)

  return (
    <Flex w="full" borderBottomWidth="1px" justify="center">
      <Flex
        justify="space-between"
        alignItems="center"
        h="16"
        maxW="1000px"
        flex="1"
      >
        <Link href="/typebots" data-testid="typebot-logo">
          <Image
            pointerEvents="none"
            src={
              colorMode === 'dark'
                ? '/images/tzz_bots_light.png'
                : '/images/tzz_bots_dark.png'
            }
            height="55px"
            paddingTop="5px"
            alt="Group image"
            rounded="md"
            objectFit="cover"
          />
        </Link>
        <HStack>
          {user && workspace && (
            <WorkspaceSettingsModal
              isOpen={isOpen}
              onClose={onClose}
              user={user}
              workspace={workspace}
            />
          )}
          <Button
            leftIcon={<SettingsIcon />}
            onClick={onOpen}
            isLoading={isNotDefined(workspace)}
          >
            {t('dashboard.header.settingsButton.label')}
          </Button>
          <WorkspaceDropdown
            currentWorkspace={workspace}
            onLogoutClick={logOut}
            onCreateNewWorkspaceClick={handleCreateNewWorkspace}
            onWorkspaceSelected={switchWorkspace}
          />
        </HStack>
      </Flex>
    </Flex>
  )
}
