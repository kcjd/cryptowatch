export const getPercentage = (value: number) => {
  const absoluteValue = Math.abs(value)
  return `${absoluteValue.toFixed(2)}%`
}

export const getPrice = (value: string | number, currency: string) => {
  const formatter = new Intl.NumberFormat(undefined, {
    style: 'currency',
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 6,
  })
  return formatter.format(Number(value))
}
