export const API_URL = 'https://api.coingecko.com/api/v3'

export const API_ENDPOINTS = {
  search: '/search',
  trending: '/search/trending',
  markets: '/coins/markets',
  marketChart: (id: string) => `/coins/${id}/market_chart`
}

export const CURRENCIES = ['USD', 'EUR', 'BTC', 'ETH']
export const DEFAULT_CURRENCY = CURRENCIES[0]

export const DEFAULT_DAYS = 1
