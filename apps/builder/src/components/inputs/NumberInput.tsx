import { VariablesButton } from '@/features/variables/components/VariablesButton'
import {
  NumberInputProps,
  NumberInput as ChakraNumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  HStack,
  FormControl,
  FormLabel,
  Stack,
  Text,
<<<<<<< HEAD
=======
  FormHelperText,
>>>>>>> upstream/main
} from '@chakra-ui/react'
import { Variable, VariableString } from '@typebot.io/schemas'
import { ReactNode, useEffect, useState } from 'react'
import { useDebouncedCallback } from 'use-debounce'
import { env } from '@typebot.io/env'
import { MoreInfoTooltip } from '../MoreInfoTooltip'

type Value<HasVariable> = HasVariable extends true | undefined
  ? number | VariableString
  : number

type Props<HasVariable extends boolean> = {
  defaultValue: Value<HasVariable> | undefined
  debounceTimeout?: number
  withVariableButton?: HasVariable
  label?: string
  moreInfoTooltip?: string
  isRequired?: boolean
  direction?: 'row' | 'column'
  suffix?: string
<<<<<<< HEAD
=======
  helperText?: ReactNode
>>>>>>> upstream/main
  onValueChange: (value?: Value<HasVariable>) => void
} & Omit<NumberInputProps, 'defaultValue' | 'value' | 'onChange' | 'isRequired'>

export const NumberInput = <HasVariable extends boolean>({
  defaultValue,
  onValueChange,
  withVariableButton,
  debounceTimeout = 1000,
  label,
  moreInfoTooltip,
  isRequired,
<<<<<<< HEAD
  direction,
  suffix,
=======
  direction = 'column',
  suffix,
  helperText,
>>>>>>> upstream/main
  ...props
}: Props<HasVariable>) => {
  const [value, setValue] = useState(defaultValue?.toString() ?? '')

  const onValueChangeDebounced = useDebouncedCallback(
    onValueChange,
    env.NEXT_PUBLIC_E2E_TEST ? 0 : debounceTimeout
  )

  useEffect(
    () => () => {
      onValueChangeDebounced.flush()
    },
    [onValueChangeDebounced]
  )

  const handleValueChange = (newValue: string) => {
    if (value.startsWith('{{') && value.endsWith('}}') && newValue !== '')
      return
    setValue(newValue)
    if (newValue.endsWith('.') || newValue.endsWith(',')) return
    if (newValue === '') return onValueChangeDebounced(undefined)
    if (
      newValue.startsWith('{{') &&
      newValue.endsWith('}}') &&
      newValue.length > 4 &&
      (withVariableButton ?? true)
    ) {
      onValueChangeDebounced(newValue as Value<HasVariable>)
      return
    }
    const numberedValue = parseFloat(newValue)
    if (isNaN(numberedValue)) return
    onValueChangeDebounced(numberedValue)
  }

  const handleVariableSelected = (variable?: Variable) => {
    if (!variable) return
    const newValue = `{{${variable.name}}}`
    handleValueChange(newValue)
  }

  const Input = (
    <ChakraNumberInput
      onChange={handleValueChange}
      value={value}
      w="full"
      {...props}
    >
      <NumberInputField placeholder={props.placeholder} />
      <NumberInputStepper>
        <NumberIncrementStepper />
        <NumberDecrementStepper />
      </NumberInputStepper>
    </ChakraNumberInput>
  )

  return (
    <FormControl
      as={direction === 'column' ? Stack : HStack}
      isRequired={isRequired}
      justifyContent="space-between"
<<<<<<< HEAD
      width={label ? 'full' : 'auto'}
      spacing={direction === 'column' ? 2 : 3}
    >
      {label && (
        <FormLabel mb="0" mr="0" flexShrink={0}>
=======
      width={label || props.width === 'full' ? 'full' : 'auto'}
      spacing={direction === 'column' ? 2 : 3}
    >
      {label && (
        <FormLabel display="flex" flexShrink={0} gap="1" mb="0" mr="0">
>>>>>>> upstream/main
          {label}{' '}
          {moreInfoTooltip && (
            <MoreInfoTooltip>{moreInfoTooltip}</MoreInfoTooltip>
          )}
        </FormLabel>
      )}
<<<<<<< HEAD
      <HStack>
        {withVariableButton ?? true ? (
          <HStack spacing="0">
=======
      <HStack w={direction === 'row' ? undefined : 'full'}>
        {withVariableButton ?? true ? (
          <HStack spacing="0" w="full">
>>>>>>> upstream/main
            {Input}
            <VariablesButton onSelectVariable={handleVariableSelected} />
          </HStack>
        ) : (
          Input
        )}
        {suffix ? <Text>{suffix}</Text> : null}
      </HStack>
<<<<<<< HEAD
=======
      {helperText ? <FormHelperText mt="0">{helperText}</FormHelperText> : null}
>>>>>>> upstream/main
    </FormControl>
  )
}
