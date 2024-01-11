import { PaymentInputBlock } from './schema'

export enum PaymentProvider {
  STRIPE = 'Stripe',
}

export const defaultPaymentInputOptions = {
  provider: PaymentProvider.STRIPE,
  labels: { button: 'Pay', success: 'Success' },
  retryMessageContent: 'Payment failed. Please, try again.',
<<<<<<< HEAD
  currency: 'BRL',
=======
  currency: 'USD',
>>>>>>> upstream/main
} as const satisfies PaymentInputBlock['options']
