import dayjs from 'dayjs'

export const getPercentage = (value: number) => {
  const absoluteValue = Math.abs(value)
  return `${absoluteValue.toFixed(2)}%`
}

export const getPrice = (value: string | number) => {
  const formatter = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'usd', maximumFractionDigits: 8 })
  return formatter.format(Number(value))
}

export const getDate = (date: string | number | Date) => {
  return dayjs(date)
}
