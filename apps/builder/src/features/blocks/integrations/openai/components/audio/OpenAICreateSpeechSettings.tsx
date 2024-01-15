import { CreateSpeechOpenAIOptions } from '@typebot.io/schemas/features/blocks/integrations/openai'
import { FormControl, FormLabel, Stack, Text } from '@chakra-ui/react'
import { TextLink } from '@/components/TextLink'
import { ModelsDropdown } from '../ModelsDropdown'
import { Textarea } from '@/components/inputs'
import { DropdownList } from '@/components/DropdownList'
import { openAIVoices } from '@typebot.io/schemas/features/blocks/integrations/openai/constants'
import { VariableSearchInput } from '@/components/inputs/VariableSearchInput'
import { Variable } from '@typebot.io/schemas'

const apiReferenceUrl =
  'https://platform.openai.com/docs/api-reference/audio/createSpeech'

type Props = {
  options: CreateSpeechOpenAIOptions
  onOptionsChange: (options: CreateSpeechOpenAIOptions) => void
}

export const OpenAICreateSpeechSettings = ({
  options,
  onOptionsChange,
}: Props) => {
  const updateModel = (model: string | undefined) => {
    onOptionsChange({
      ...options,
      model,
    })
  }

  const updateInput = (input: string | undefined) => {
    onOptionsChange({
      ...options,
      input,
    })
  }

  const updateVoice = (voice: (typeof openAIVoices)[number]) => {
    onOptionsChange({
      ...options,
      voice,
    })
  }

  const updateSaveUrlInVariableId = (
    variable: Pick<Variable, 'id' | 'name'> | undefined
  ) => {
    onOptionsChange({
      ...options,
      saveUrlInVariableId: variable?.id,
    })
  }

  return (
    <Stack spacing={4} pt="2">
      <Text fontSize="sm" color="gray.500">
        Leia a{' '}
        <TextLink href={apiReferenceUrl} isExternal>
          Documentação da API
        </TextLink>{' '}
        para entender melhor as opções disponiveis.
      </Text>
      {options.credentialsId && (
        <>
          <ModelsDropdown
            credentialsId={options.credentialsId}
            defaultValue={options.model}
            baseUrl={options.baseUrl}
            apiVersion={options.apiVersion}
            type="tts"
            onChange={updateModel}
          />
          <Textarea
            defaultValue={options.input}
            onChange={updateInput}
            label="Input:"
          />
          <FormControl>
            <FormLabel>Voice:</FormLabel>
            <DropdownList
              currentItem={options.voice}
              onItemSelect={updateVoice}
              items={openAIVoices}
              placeholder="Selecionar uma voz"
              w="full"
            />
          </FormControl>
          <FormControl>
            <FormLabel>Salvar URL:</FormLabel>
            <VariableSearchInput
              initialVariableId={options.saveUrlInVariableId}
              onSelectVariable={updateSaveUrlInVariableId}
            />
          </FormControl>
        </>
      )}
    </Stack>
  )
}
