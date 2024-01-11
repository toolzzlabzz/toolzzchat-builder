import { FlagIcon } from '@/components/icons'
import { HStack, Text } from '@chakra-ui/react'
<<<<<<< HEAD

export const StartEventNode = () => {
  return (
    <HStack spacing={3}>
      <FlagIcon />
      <Text>Start</Text>
=======
import { useTranslate } from '@tolgee/react'

export const StartEventNode = () => {
  const { t } = useTranslate()

  return (
    <HStack spacing={3}>
      <FlagIcon />
      <Text>{t('editor.blocks.start.text')}</Text>
>>>>>>> upstream/main
    </HStack>
  )
}
