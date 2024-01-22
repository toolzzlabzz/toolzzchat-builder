import { Stack } from '@chakra-ui/react'
import { DropdownList } from '@/components/DropdownList'
import { ExtractingCell, Variable } from '@typebot.io/schemas'
import { TableListItemProps } from '@/components/TableList'
import { VariableSearchInput } from '@/components/inputs/VariableSearchInput'

export const CellWithVariableIdStack = ({
  item,
  onItemChange,
  columns,
}: TableListItemProps<ExtractingCell> & { columns: string[] }) => {
  const handleColumnSelect = (column: string) => {
    if (item.column === column) return
    onItemChange({ ...item, column })
  }

  const handleVariableIdChange = (variable?: Variable) => {
    if (item.variableId === variable?.id) return
    onItemChange({ ...item, variableId: variable?.id })
  }

  return (
    <Stack p="4" rounded="md" flex="1" borderWidth="1px">
      <DropdownList
        currentItem={item.column}
        onItemSelect={handleColumnSelect}
        items={columns}
        placeholder="Selecione uma coluna"
      />
      <VariableSearchInput
        initialVariableId={item.variableId}
        onSelectVariable={handleVariableIdChange}
        placeholder="Selecione uma variavel"
      />
    </Stack>
  )
}
