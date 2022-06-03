import { MarketChartResponse, MarketsResponse, TrendingResponse } from '../../types'
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next'
import Head from 'next/head'
import axios from 'axios'
import styled from 'styled-components'
import Breadcrumbs from '../../components/Breadcrumbs'
import History from '../../components/History'
import Overview from '../../components/Overview'
import Statistics from '../../components/Statistics'
import Trending from '../../components/Trending'
import { API_ENDPOINTS, DEFAULT_CURRENCY, DEFAULT_DAYS } from '../../helpers/constants'
import { mq } from '../../helpers/mixins'

const CoinPage = ({
  trendingCoins,
  coin,
  coinHistory,
  currency,
  days
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <Container>
      <Head>
        <title>{coin?.name} - Cryptowatch</title>
        <meta
          name="description"
          content="Suivi en temps réel des crypto-monnaies les plus populaires : cours, capitalisation boursière, historique."
        />
      </Head>

      <Breadcrumbs
        items={[
          { label: 'Monnaies', href: '/' },
          { label: coin.name, href: `/coins/${coin.id}` }
        ]}
      />
      <Overview coin={coin} currency={currency} />
      <Columms>
        <History data={coinHistory} currency={currency} days={days} />
        <Statistics coin={coin} currency={currency} />
      </Columms>
      <Trending coins={trendingCoins} />
    </Container>
  )
}

export const getServerSideProps = async ({ req, query }: GetServerSidePropsContext) => {
  const id = query.id as string
  const currency = req.cookies.currency || DEFAULT_CURRENCY
  const days = Number(req.cookies.days) || DEFAULT_DAYS

  const { data: trending } = await axios.get<TrendingResponse>(API_ENDPOINTS.trending)
  const trendingIds = trending?.coins.map(({ item }) => item.id).slice(0, 6)

  const { data: trendingCoins } = await axios.get<MarketsResponse>(API_ENDPOINTS.markets, {
    params: { ids: trendingIds.join(','), vs_currency: currency, sparkline: true }
  })

  const { data: coinData } = await axios.get<MarketsResponse>(API_ENDPOINTS.markets, {
    params: { ids: id, vs_currency: currency }
  })

  const { data: coinHistory } = await axios.get<MarketChartResponse>(API_ENDPOINTS.marketChart(id), {
    params: { vs_currency: currency, days }
  })

  return {
    props: {
      trendingCoins,
      coin: coinData[0],
      coinHistory: coinHistory?.prices,
      currency,
      days
    }
  }
}

const Container = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.sizes[800]};
`

const Columms = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.sizes[600]};

  ${mq('lg')`
    grid-template-columns: 2fr 1fr;
  `}
`

export default CoinPage
