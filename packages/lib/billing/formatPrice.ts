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
  const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: currency?.toUpperCase(),
    maximumFractionDigits: maxFractionDigits,
  })
  return formatter.format(price)
}
