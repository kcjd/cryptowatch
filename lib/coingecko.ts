import axios from 'axios'

import { MarketChartResponse, MarketsResponse, TrendingResponse } from './types'

export const instance = axios.create({
  baseURL: 'https://api.coingecko.com/api/v3',
})

export const getTrending = async (vs_currency: string) => {
  const { data: trending } = await instance.get<TrendingResponse>(
    '/search/trending'
  )
  const trendingIds = trending.coins.map(({ item }) => item.id).slice(0, 6)

  const { data } = await instance.get<MarketsResponse>('/coins/markets', {
    params: {
      ids: trendingIds.join(','),
      vs_currency,
      sparkline: true,
    },
  })

  return data
}

export const getRanking = async (vs_currency: string, page: number) => {
  const { data } = await instance.get<MarketsResponse>('/coins/markets', {
    params: {
      vs_currency,
      page,
      per_page: 20,
      sparkline: true,
    },
  })

  return data
}

export const getCoin = async (id: string, vs_currency: string) => {
  const { data } = await instance.get<MarketsResponse>('/coins/markets', {
    params: {
      ids: id,
      vs_currency,
    },
  })

  return data[0]
}

export const getMarketChart = async (
  id: string,
  vs_currency: string,
  days: number
) => {
  const { data } = await instance.get<MarketChartResponse>(
    `/coins/${id}/market_chart`,
    {
      params: {
        vs_currency,
        days,
      },
    }
  )

  return data.prices
}
