import { guessIfUserIsEuropean } from './guessIfUserIsEuropean'

type FormatPriceParams = {
<<<<<<< HEAD
  currency?: 'brl'
=======
  currency?: 'eur' | 'usd'
>>>>>>> upstream/main
  maxFractionDigits?: number
}

export const formatPrice = (
  price: number,
  { currency, maxFractionDigits = 0 }: FormatPriceParams = {
    maxFractionDigits: 0,
  }
) => {
  const isEuropean = guessIfUserIsEuropean()
<<<<<<< HEAD
  const formatter = new Intl.NumberFormat(isEuropean ? 'fr-FR' : 'pt-BR', {
    style: 'currency',
    currency: currency?.toUpperCase() ?? (isEuropean ? 'EUR' : 'BRL'),
=======
  const formatter = new Intl.NumberFormat(isEuropean ? 'fr-FR' : 'en-US', {
    style: 'currency',
    currency: currency?.toUpperCase() ?? (isEuropean ? 'EUR' : 'USD'),
>>>>>>> upstream/main
    maximumFractionDigits: maxFractionDigits,
  })
  return formatter.format(price)
}
