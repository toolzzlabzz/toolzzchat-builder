import { DropdownList } from '@/components/DropdownList'
import { CodeEditor } from '@/components/inputs/CodeEditor'
import { SwitchWithLabel } from '@/components/inputs/SwitchWithLabel'
import { TableList, TableListItemProps } from '@/components/TableList'
import { useTypebot } from '@/features/editor/providers/TypebotProvider'
import { useToast } from '@/hooks/useToast'
import {
  Stack,
  HStack,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Button,
  Text,
} from '@chakra-ui/react'
import {
  KeyValue,
  VariableForTest,
  ResponseVariableMapping,
  Webhook,
  WebhookBlock,
} from '@typebot.io/schemas'
import { useState, useMemo } from 'react'
import { executeWebhook } from '../queries/executeWebhookQuery'
import { convertVariablesForTestToVariables } from '../helpers/convertVariablesForTestToVariables'
import { getDeepKeys } from '../helpers/getDeepKeys'
import { QueryParamsInputs, HeadersInputs } from './KeyValueInputs'
import { DataVariableInputs } from './ResponseMappingInputs'
import { VariableForTestInputs } from './VariableForTestInputs'
import { SwitchWithRelatedSettings } from '@/components/SwitchWithRelatedSettings'
import {
  HttpMethod,
  defaultWebhookAttributes,
  defaultWebhookBlockOptions,
} from '@typebot.io/schemas/features/blocks/integrations/webhook/constants'

type Props = {
  blockId: string
  webhook: Webhook | undefined
  options: WebhookBlock['options']
  onWebhookChange: (webhook: Webhook) => void
  onOptionsChange: (options: WebhookBlock['options']) => void
}

export const WebhookAdvancedConfigForm = ({
  blockId,
  webhook,
  options,
  onWebhookChange,
  onOptionsChange,
}: Props) => {
  const { typebot, save } = useTypebot()
  const [isTestResponseLoading, setIsTestResponseLoading] = useState(false)
  const [testResponse, setTestResponse] = useState<string>()
  const [responseKeys, setResponseKeys] = useState<string[]>([])
  const { showToast } = useToast()

  const updateMethod = (method: HttpMethod) =>
    onWebhookChange({ ...webhook, method })

  const updateQueryParams = (queryParams: KeyValue[]) =>
    onWebhookChange({ ...webhook, queryParams })

  const updateHeaders = (headers: KeyValue[]) =>
    onWebhookChange({ ...webhook, headers })

  const updateBody = (body: string) => onWebhookChange({ ...webhook, body })

  const updateVariablesForTest = (variablesForTest: VariableForTest[]) =>
    onOptionsChange({ ...options, variablesForTest })

  const updateResponseVariableMapping = (
    responseVariableMapping: ResponseVariableMapping[]
  ) => onOptionsChange({ ...options, responseVariableMapping })

  const updateAdvancedConfig = (isAdvancedConfig: boolean) =>
    onOptionsChange({ ...options, isAdvancedConfig })

  const updateIsCustomBody = (isCustomBody: boolean) =>
    onOptionsChange({ ...options, isCustomBody })

  const executeTestRequest = async () => {
    if (!typebot) return
    setIsTestResponseLoading(true)
    if (!options?.webhook) await save()
    else await save()
    const { data, error } = await executeWebhook(
      typebot.id,
      convertVariablesForTestToVariables(
        options?.variablesForTest ?? [],
        typebot.variables
      ),
      { blockId }
    )
    if (error)
      return showToast({ title: error.name, description: error.message })
    setTestResponse(JSON.stringify(data, undefined, 2))
    setResponseKeys(getDeepKeys(data))
    setIsTestResponseLoading(false)
  }

  const updateIsExecutedOnClient = (isExecutedOnClient: boolean) =>
    onOptionsChange({ ...options, isExecutedOnClient })

  const ResponseMappingInputs = useMemo(
    () =>
      function Component(props: TableListItemProps<ResponseVariableMapping>) {
        return <DataVariableInputs {...props} dataItems={responseKeys} />
      },
    [responseKeys]
  )

  const isCustomBody =
    options?.isCustomBody ?? defaultWebhookBlockOptions.isCustomBody

  return (
    <>
      <SwitchWithRelatedSettings
        label="Configurações avançadas"
        initialValue={
          options?.isAdvancedConfig ??
          defaultWebhookBlockOptions.isAdvancedConfig
        }
        onCheckChange={updateAdvancedConfig}
      >
        <SwitchWithLabel
          label="Exectuar no client"
          moreInfoContent="Se ativado, o webhook será executado no cliente. Isso significa que ele será executado no navegador do seu visitante. Certifique-se de habilitar o CORS e não expor dados sensíveis."
          initialValue={
            options?.isExecutedOnClient ??
            defaultWebhookBlockOptions.isExecutedOnClient
          }
          onCheckChange={updateIsExecutedOnClient}
        />
        <HStack justify="space-between">
          <Text>Method:</Text>
          <DropdownList
            currentItem={
              (webhook?.method ?? defaultWebhookAttributes.method) as HttpMethod
            }
            onItemSelect={updateMethod}
            items={Object.values(HttpMethod)}
          />
        </HStack>
        <Accordion allowMultiple>
          <AccordionItem>
            <AccordionButton justifyContent="space-between">
              Query params
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pt="4">
              <TableList<KeyValue>
                initialItems={webhook?.queryParams}
                onItemsChange={updateQueryParams}
                Item={QueryParamsInputs}
                addLabel="Adicione uma parametro"
              />
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionButton justifyContent="space-between">
              Headers
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pt="4">
              <TableList<KeyValue>
                initialItems={webhook?.headers}
                onItemsChange={updateHeaders}
                Item={HeadersInputs}
                addLabel="Adicione um valor"
              />
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionButton justifyContent="space-between">
              Body
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel py={4} as={Stack} spacing="6">
              <SwitchWithLabel
                label="Custom body"
                initialValue={isCustomBody}
                onCheckChange={updateIsCustomBody}
              />
              {isCustomBody && (
                <CodeEditor
                  defaultValue={webhook?.body}
                  lang="json"
                  onChange={updateBody}
                  debounceTimeout={0}
                />
              )}
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionButton justifyContent="space-between">
              Valores de variaveis para testes
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pt="4">
              <TableList<VariableForTest>
                initialItems={options?.variablesForTest}
                onItemsChange={updateVariablesForTest}
                Item={VariableForTestInputs}
                addLabel="Adicione uma entrada"
              />
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </SwitchWithRelatedSettings>
      {webhook?.url && (
        <Button
          onClick={executeTestRequest}
          colorScheme="blue"
          isLoading={isTestResponseLoading}
        >
          Testar requisição
        </Button>
      )}
      {testResponse && (
        <CodeEditor isReadOnly lang="json" value={testResponse} />
      )}
      {(testResponse ||
        (options?.responseVariableMapping &&
          options.responseVariableMapping.length > 0)) && (
        <Accordion allowMultiple>
          <AccordionItem>
            <AccordionButton justifyContent="space-between">
              Save in variables
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pt="4">
              <TableList<ResponseVariableMapping>
                initialItems={options?.responseVariableMapping}
                onItemsChange={updateResponseVariableMapping}
                Item={ResponseMappingInputs}
                addLabel="Adicione uma entrada"
              />
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      )}
    </>
  )
}
