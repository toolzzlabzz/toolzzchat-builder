import { defaultButtonLabel } from '../constants'
import { EmailInputBlock } from './schema'

export const defaultEmailInputOptions = {
  labels: {
    button: defaultButtonLabel,
    placeholder: 'Digite o seu email...',
  },
  retryMessageContent:
    'Este email não parece ser válido. Você pode digitá-lo novamente?',
} as const satisfies EmailInputBlock['options']
