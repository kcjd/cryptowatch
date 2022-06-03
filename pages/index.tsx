import { MarketsResponse, TrendingResponse } from '../types'
import axios from 'axios'
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next'
import Head from 'next/head'
import styled from 'styled-components'
import Ranking from '../components/Ranking'
import Trending from '../components/Trending'
import { API_ENDPOINTS, DEFAULT_CURRENCY } from '../helpers/constants'

const HomePage = ({
  trendingCoins,
  rankingCoins,
  currency
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <Container>
      <Head>
        <title>Cryptowatch</title>
        <meta
          name="description"
          content="Surveillez les cryptomonnaies les plus populaires en temps réel : cours, capitalisation, volume, historique et plus encore."
        />
      </Head>
      <Trending coins={trendingCoins} />
      <Ranking coins={rankingCoins} currency={currency} />
    </Container>
  )
}

export const getServerSideProps = async ({ req, query }: GetServerSidePropsContext) => {
  const page = (query.page as string) || 1
  const currency = req.cookies.currency || DEFAULT_CURRENCY

  const { data: trending } = await axios.get<TrendingResponse>(API_ENDPOINTS.trending)
  const trendingIds = trending?.coins.map(({ item }) => item.id).slice(0, 6)

  const { data: trendingCoins } = await axios.get<MarketsResponse>(API_ENDPOINTS.markets, {
    params: { ids: trendingIds.join(','), vs_currency: currency, sparkline: true }
  })

  const { data: rankingCoins } = await axios.get<MarketsResponse>(API_ENDPOINTS.markets, {
    params: { vs_currency: currency, page, per_page: 25, sparkline: true }
  })

  return {
    props: {
      trendingCoins,
      rankingCoins,
      currency
    }
  }
}

const Container = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.sizes[800]};
`

export default HomePage
