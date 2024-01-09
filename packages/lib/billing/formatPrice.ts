import { guessIfUserIsEuropean } from './guessIfUserIsEuropean'

type FormatPriceParams = {
  currency?: 'brl'
  maxFractionDigits?: number
}

export const formatPrice = (
  price: number,
  { currency, maxFractionDigits = 0 }: FormatPriceParams = {
    maxFractionDigits: 0,
  }
) => {
  const isEuropean = guessIfUserIsEuropean()
  const formatter = new Intl.NumberFormat(isEuropean ? 'fr-FR' : 'pt-BR', {
    style: 'currency',
    currency: currency?.toUpperCase() ?? (isEuropean ? 'EUR' : 'BRL'),
    maximumFractionDigits: maxFractionDigits,
  })
  return formatter.format(price)
}
