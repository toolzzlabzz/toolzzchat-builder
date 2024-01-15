import {
  Button,
  ButtonProps,
  chakra,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Portal,
  Stack,
} from '@chakra-ui/react'
import { ChevronLeftIcon } from '@/components/icons'
import React from 'react'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Props<T extends readonly any[]> = {
  currentItem: T[number] | undefined
  onItemSelect: (item: T[number]) => void
  items: T
  placeholder?: string
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const DropdownList = <T extends readonly any[]>({
  currentItem,
  onItemSelect,
  items,
  placeholder = '',
  ...props
}: Props<T> & ButtonProps) => {
  const handleMenuItemClick = (operator: T[number]) => () => {
    onItemSelect(operator)
  }
  return (
    <Menu isLazy placement="bottom-end" matchWidth>
      <MenuButton
        as={Button}
        rightIcon={<ChevronLeftIcon transform={'rotate(-90deg)'} />}
        colorScheme="gray"
        justifyContent="space-between"
        textAlign="left"
        {...props}
      >
        <chakra.span noOfLines={1} display="block">
          {currentItem ?? placeholder}
        </chakra.span>
      </MenuButton>
      <Portal>
        <MenuList maxW="500px" zIndex={1500}>
          <Stack maxH={'35vh'} overflowY="scroll" spacing="0">
            {items.map((item) => (
              <MenuItem
                key={item as unknown as string}
                maxW="500px"
                overflow="hidden"
                whiteSpace="nowrap"
                textOverflow="ellipsis"
                onClick={handleMenuItemClick(item)}
              >
                {item}
              </MenuItem>
            ))}
          </Stack>
        </MenuList>
      </Portal>
    </Menu>
  )
}
