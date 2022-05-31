export type CoinBaseData = {
  id: string
  name: string
  symbol: string
  thumb: string
}

export type SearchResponse = {
  coins: CoinBaseData[]
}
