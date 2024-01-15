import { MoreInfoTooltip } from '@/components/MoreInfoTooltip'
import { Select } from '@/components/inputs/Select'
import { HStack, Input } from '@chakra-ui/react'
import { Sheet } from '../types'

type Props = {
  sheets: Sheet[]
  isLoading: boolean
  sheetId?: string
  onSelectSheetId: (id: string | undefined) => void
}

export const SheetsDropdown = ({
  sheets,
  isLoading,
  sheetId,
  onSelectSheetId,
}: Props) => {
  if (isLoading) return <Input value="Loading..." isDisabled />
  if (!sheets || sheets.length === 0)
    return (
      <HStack>
        <Input value="No sheets found" isDisabled />
        <MoreInfoTooltip>
          Certifique-se de que sua planilha contenha pelo menos uma aba com uma
          linha de cabeçalho. Além disso, verifique se sua linha de cabeçalho
          não contém duplicatas.
        </MoreInfoTooltip>
      </HStack>
    )
  return (
    <Select
      selectedItem={sheetId}
      items={(sheets ?? []).map((s) => ({ label: s.name, value: s.id }))}
      onSelect={onSelectSheetId}
      placeholder={'Select the sheet'}
    />
  )
}
