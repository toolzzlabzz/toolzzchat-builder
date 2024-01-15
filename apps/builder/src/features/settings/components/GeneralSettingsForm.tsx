import {
  FormControl,
  FormLabel,
  HStack,
  Stack,
  Tag,
  Text,
} from '@chakra-ui/react'
import { Settings } from '@typebot.io/schemas'
import React from 'react'
import { isDefined } from '@typebot.io/lib'
import { SwitchWithLabel } from '@/components/inputs/SwitchWithLabel'
import { SwitchWithRelatedSettings } from '@/components/SwitchWithRelatedSettings'
import { DropdownList } from '@/components/DropdownList'
import { MoreInfoTooltip } from '@/components/MoreInfoTooltip'
import {
  defaultSettings,
  rememberUserStorages,
} from '@typebot.io/schemas/features/typebot/settings/constants'

type Props = {
  generalSettings: Settings['general'] | undefined
  onGeneralSettingsChange: (generalSettings: Settings['general']) => void
}

export const GeneralSettingsForm = ({
  generalSettings,
  onGeneralSettingsChange,
}: Props) => {
  const toggleRememberUser = (isEnabled: boolean) =>
    onGeneralSettingsChange({
      ...generalSettings,
      rememberUser: {
        ...generalSettings?.rememberUser,
        isEnabled,
      },
    })

  const handleInputPrefillChange = (isInputPrefillEnabled: boolean) =>
    onGeneralSettingsChange({
      ...generalSettings,
      isInputPrefillEnabled,
    })

  const handleHideQueryParamsChange = (isHideQueryParamsEnabled: boolean) =>
    onGeneralSettingsChange({
      ...generalSettings,
      isHideQueryParamsEnabled,
    })

  const updateRememberUserStorage = (
    storage: NonNullable<
      NonNullable<Settings['general']>['rememberUser']
    >['storage']
  ) =>
    onGeneralSettingsChange({
      ...generalSettings,
      rememberUser: {
        ...generalSettings?.rememberUser,
        storage,
      },
    })

  return (
    <Stack spacing={6}>
      <SwitchWithLabel
        label="Prefill inputs"
        initialValue={
          generalSettings?.isInputPrefillEnabled ??
          defaultSettings.general.isInputPrefillEnabled
        }
        onCheckChange={handleInputPrefillChange}
        moreInfoContent="Inputs are automatically pre-filled whenever their associated variable has a value"
      />
      <SwitchWithLabel
        label="Ocultar parâmetros de consulta no início do bot"
        initialValue={
          generalSettings?.isHideQueryParamsEnabled ??
          defaultSettings.general.isHideQueryParamsEnabled
        }
        onCheckChange={handleHideQueryParamsChange}
        moreInfoContent="Se o seu URL contiver parâmetros de consulta, eles serão ocultados automaticamente quando o bot for iniciado."
      />
      <SwitchWithRelatedSettings
        label={'Lembrar usuário'}
        moreInfoContent="Se ativado, as variáveis anteriores do usuário serão pré-preenchidas e suas novas respostas substituirão as anteriores."
        initialValue={
          generalSettings?.rememberUser?.isEnabled ??
          (isDefined(generalSettings?.isNewResultOnRefreshEnabled)
            ? !generalSettings?.isNewResultOnRefreshEnabled
            : false)
        }
        onCheckChange={toggleRememberUser}
      >
        <FormControl as={HStack} justifyContent="space-between">
          <FormLabel mb="0">
            Storage:&nbsp;
            <MoreInfoTooltip>
              <Stack>
                <Text>
                  Choose <Tag size="sm">session</Tag> to remember the user as
                  long as he does not closes the tab or the browser.
                </Text>
                <Text>
                  Choose <Tag size="sm">local</Tag> to remember the user
                  forever.
                </Text>
              </Stack>
            </MoreInfoTooltip>
          </FormLabel>
          <DropdownList
            currentItem={generalSettings?.rememberUser?.storage ?? 'session'}
            onItemSelect={updateRememberUserStorage}
            items={rememberUserStorages}
          ></DropdownList>
        </FormControl>
      </SwitchWithRelatedSettings>
    </Stack>
  )
}
