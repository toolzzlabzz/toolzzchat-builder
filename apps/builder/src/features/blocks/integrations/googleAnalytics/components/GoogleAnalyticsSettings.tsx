import { NumberInput, TextInput } from '@/components/inputs'
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Stack,
} from '@chakra-ui/react'
import { GoogleAnalyticsBlock } from '@typebot.io/schemas'
import React from 'react'

type Props = {
  options?: GoogleAnalyticsBlock['options']
  onOptionsChange: (options: GoogleAnalyticsBlock['options']) => void
}

export const GoogleAnalyticsSettings = ({
  options,
  onOptionsChange,
}: Props) => {
  const updateTrackingId = (trackingId: string) =>
    onOptionsChange({ ...options, trackingId })

  const updateCategory = (category: string) =>
    onOptionsChange({ ...options, category })

  const updateAction = (action: string) =>
    onOptionsChange({ ...options, action })

  const updateLabel = (label: string) => onOptionsChange({ ...options, label })

  const updateValue = (value: number | `{{${string}}}` | undefined) =>
    onOptionsChange({
      ...options,
      value,
    })

  const updateSendTo = (sendTo?: string) =>
    onOptionsChange({
      ...options,
      sendTo,
    })

  return (
    <Stack spacing={4}>
      <TextInput
        label="Measurement ID:"
        moreInfoTooltip="Can be found by clicking on your data stream in Google Analytics dashboard"
        defaultValue={options?.trackingId}
        placeholder="G-123456..."
        onChange={updateTrackingId}
      />
      <TextInput
        label="Event action:"
        defaultValue={options?.action}
        placeholder="Exemplo: conversão"
        onChange={updateAction}
      />
      <Accordion allowToggle>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                Avançado
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} as={Stack} spacing="6">
            <TextInput
              label="Event category:"
              defaultValue={options?.category}
              placeholder="Exemplo: Bot"
              onChange={updateCategory}
            />
            <TextInput
              label="Event label:"
              defaultValue={options?.label}
              placeholder="Exemplo: Campanha Z"
              onChange={updateLabel}
            />
            <NumberInput
              direction="column"
              label="Event value:"
              defaultValue={options?.value}
              placeholder="Exemplo: 0"
              onValueChange={updateValue}
            />
            <TextInput
              label="Send to:"
              moreInfoTooltip="Useful to send a conversion event to Google Ads"
              defaultValue={options?.sendTo?.toString()}
              placeholder="Exemplo: AW-123456789"
              onChange={updateSendTo}
            />
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Stack>
  )
}
