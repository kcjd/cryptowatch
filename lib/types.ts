export type CoinBaseData = {
  id: string
  name: string
  symbol: string
  thumb: string
}

export type CoinMarketData = Omit<CoinBaseData, 'thumb'> & {
  ath: number
  ath_change_percentage: number
  ath_date: string
  atl: number
  atl_change_percentage: number
  atl_date: string
  circulating_supply: number
  current_price: number
  fully_diluted_valuation: number
  high_24h: number
  image: string
  last_updated: string
  low_24h: number
  market_cap: number
  market_cap_change_24h: number
  market_cap_change_percentage_24h: number
  market_cap_rank: number
  max_supply: number
  price_change_24h: number
  price_change_percentage_24h: number
  sparkline_in_7d: {
    price: HistoryChartData
  }
  total_supply: number
  total_volume: number
}

export type HistoryChartData = number[] | number[][]

export type SearchResponse = {
  coins: CoinBaseData[]
}

export type TrendingResponse = {
  coins: {
    item: CoinBaseData
  }[]
}

export type MarketsResponse = CoinMarketData[]

export type MarketChartResponse = {
  prices: HistoryChartData
}
