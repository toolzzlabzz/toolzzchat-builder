import {
  Flex,
  HStack,
  Button,
  IconButton,
  Tooltip,
  Spinner,
  Text,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react'
import {
  BuoyIcon,
  ChevronLeftIcon,
  PlayIcon,
  RedoIcon,
  UndoIcon,
} from '@/components/icons'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { isDefined, isNotDefined } from '@typebot.io/lib'
import { EditableTypebotName } from './EditableTypebotName'
import Link from 'next/link'
import { EditableEmojiOrImageIcon } from '@/components/EditableEmojiOrImageIcon'
import { useUndoShortcut } from '@/hooks/useUndoShortcut'
import { useDebouncedCallback } from 'use-debounce'
import { ShareTypebotButton } from '@/features/share/components/ShareTypebotButton'
import { PublishButton } from '@/features/publish/components/PublishButton'
import { headerHeight } from '../constants'
import { RightPanel, useEditor } from '../providers/EditorProvider'
import { useTypebot } from '../providers/TypebotProvider'
import { SupportBubble } from '@/components/SupportBubble'
import { isCloudProdInstance } from '@/helpers/isCloudProdInstance'
import { useTranslate } from '@tolgee/react'
import { GuestTypebotHeader } from './UnauthenticatedTypebotHeader'

export const TypebotHeader = () => {
  const { t } = useTranslate()
  const router = useRouter()
  const {
    typebot,
    publishedTypebot,
    updateTypebot,
    save,
    undo,
    redo,
    canUndo,
    canRedo,
    isSavingLoading,
    currentUserMode,
  } = useTypebot()
  const {
    setRightPanel,
    rightPanel,
    setStartPreviewAtGroup,
    setStartPreviewAtEvent,
  } = useEditor()
  const [isUndoShortcutTooltipOpen, setUndoShortcutTooltipOpen] =
    useState(false)
  const hideUndoShortcutTooltipLater = useDebouncedCallback(() => {
    setUndoShortcutTooltipOpen(false)
  }, 1000)
  const { isOpen, onOpen } = useDisclosure()
  const headerBgColor = useColorModeValue('white', 'gray.900')

  const handleNameSubmit = (name: string) =>
    updateTypebot({ updates: { name } })

  const handleChangeIcon = (icon: string) =>
    updateTypebot({ updates: { icon } })

  const handlePreviewClick = async () => {
    setStartPreviewAtGroup(undefined)
    setStartPreviewAtEvent(undefined)
    save().then()
    setRightPanel(RightPanel.PREVIEW)
  }

  useUndoShortcut(() => {
    if (!canUndo) return
    hideUndoShortcutTooltipLater.flush()
    setUndoShortcutTooltipOpen(true)
    hideUndoShortcutTooltipLater()
    undo()
  })

  const handleHelpClick = () => {
    isCloudProdInstance() ? onOpen() : window.open('', '_blank')
  }

  if (currentUserMode === 'guest') return <GuestTypebotHeader />
  return (
    <Flex
      w="full"
      borderBottomWidth="1px"
      justify="center"
      align="center"
      h={`${headerHeight}px`}
      zIndex={100}
      pos="relative"
      bgColor={headerBgColor}
      flexShrink={0}
    >
      {isOpen && <SupportBubble autoShowDelay={0} />}
      <HStack
        display={['none', 'flex']}
        pos={{ base: 'absolute', xl: 'static' }}
        right={{ base: 280, xl: 0 }}
      >
        <Button
          as={Link}
          href={`/toolzz/${typebot?.id}/edit`}
          colorScheme={router.pathname.includes('/edit') ? 'blue' : 'gray'}
          variant={router.pathname.includes('/edit') ? 'outline' : 'ghost'}
          size="sm"
        >
          {t('editor.headers.flowButton.label')}
        </Button>
        <Button
          as={Link}
          href={`/toolzz/${typebot?.id}/theme`}
          colorScheme={router.pathname.endsWith('theme') ? 'blue' : 'gray'}
          variant={router.pathname.endsWith('theme') ? 'outline' : 'ghost'}
          size="sm"
        >
          {t('editor.headers.themeButton.label')}
        </Button>
        <Button
          as={Link}
          href={`/toolzz/${typebot?.id}/settings`}
          colorScheme={router.pathname.endsWith('settings') ? 'blue' : 'gray'}
          variant={router.pathname.endsWith('settings') ? 'outline' : 'ghost'}
          size="sm"
        >
          {t('editor.headers.settingsButton.label')}
        </Button>
        <Button
          as={Link}
          href={`/toolzz/${typebot?.id}/share`}
          colorScheme={router.pathname.endsWith('share') ? 'blue' : 'gray'}
          variant={router.pathname.endsWith('share') ? 'outline' : 'ghost'}
          size="sm"
        >
          {t('editor.headers.shareButton.label')}
        </Button>
        {isDefined(publishedTypebot) && (
          <Button
            as={Link}
            href={`/toolzz/${typebot?.id}/results`}
            colorScheme={router.pathname.includes('results') ? 'blue' : 'gray'}
            variant={router.pathname.includes('results') ? 'outline' : 'ghost'}
            size="sm"
          >
            {t('editor.headers.resultsButton.label')}
          </Button>
        )}
      </HStack>
      <HStack
        pos="absolute"
        left="1rem"
        justify="center"
        align="center"
        spacing="6"
      >
        <HStack alignItems="center" spacing={3}>
          <IconButton
            as={Link}
            aria-label="Navigate back"
            icon={<ChevronLeftIcon fontSize={25} />}
            href={{
              pathname: router.query.parentId
                ? '/toolzz/[typebotId]/edit'
                : typebot?.folderId
                ? '/toolzz/folders/[folderId]'
                : '/toolzz',
              query: {
                folderId: typebot?.folderId ?? [],
                parentId: Array.isArray(router.query.parentId)
                  ? router.query.parentId.slice(0, -1)
                  : [],
                typebotId: Array.isArray(router.query.parentId)
                  ? [...router.query.parentId].pop()
                  : router.query.parentId ?? [],
              },
            }}
            size="sm"
          />
          <HStack spacing={1}>
            {typebot && (
              <EditableEmojiOrImageIcon
                uploadFileProps={{
                  workspaceId: typebot.workspaceId,
                  typebotId: typebot.id,
                  fileName: 'icon',
                }}
                icon={typebot?.icon}
                onChangeIcon={handleChangeIcon}
              />
            )}
            (
            <EditableTypebotName
              key={`typebot-name-${typebot?.name ?? ''}`}
              defaultName={typebot?.name ?? ''}
              onNewName={handleNameSubmit}
            />
            )
          </HStack>

          {currentUserMode === 'write' && (
            <HStack>
              <Tooltip
                label={isUndoShortcutTooltipOpen ? 'Changes reverted!' : 'Undo'}
                isOpen={isUndoShortcutTooltipOpen ? true : undefined}
                hasArrow={isUndoShortcutTooltipOpen}
              >
                <IconButton
                  display={['none', 'flex']}
                  icon={<UndoIcon />}
                  size="sm"
                  aria-label="Undo"
                  onClick={undo}
                  isDisabled={!canUndo}
                />
              </Tooltip>

              <Tooltip label="Redo">
                <IconButton
                  display={['none', 'flex']}
                  icon={<RedoIcon />}
                  size="sm"
                  aria-label="Redo"
                  onClick={redo}
                  isDisabled={!canRedo}
                />
              </Tooltip>
            </HStack>
          )}
          <Button leftIcon={<BuoyIcon />} onClick={handleHelpClick} size="sm">
            {t('editor.headers.helpButton.label')}
          </Button>
        </HStack>
        {isSavingLoading && (
          <HStack>
            <Spinner speed="0.7s" size="sm" color="gray.400" />
            <Text fontSize="sm" color="gray.400">
              {t('editor.headers.savingSpinner.label')}
            </Text>
          </HStack>
        )}
      </HStack>

      <HStack right="40px" pos="absolute" display={['none', 'flex']}>
        <Flex pos="relative">
          <ShareTypebotButton isLoading={isNotDefined(typebot)} />
        </Flex>
        {router.pathname.includes('/edit') && isNotDefined(rightPanel) && (
          <Button
            colorScheme="gray"
            onClick={handlePreviewClick}
            isLoading={isNotDefined(typebot)}
            leftIcon={<PlayIcon />}
            size="sm"
          >
            {t('editor.headers.previewButton.label')}
          </Button>
        )}
        {currentUserMode === 'write' && <PublishButton size="sm" />}
      </HStack>
    </Flex>
  )
}
