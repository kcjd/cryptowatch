import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next'
import Head from 'next/head'

import styled from 'styled-components'

import Breadcrumbs from 'components/Breadcrumbs'
import History from 'components/History'
import Statistics from 'components/Statistics'
import Trending from 'components/Trending'

import { getCoin, getMarketChart, getTrending } from 'lib/coingecko'
import { DEFAULT_CURRENCY, DEFAULT_DAYS } from 'lib/constants'

const CoinPage = ({
  trendingCoins,
  coin,
  coinHistory,
  currency,
  days,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <Container>
      <Head>
        <title>{coin.name} - Cryptowatch</title>
        <meta
          name="description"
          content={`Surveillez la cryptomonnaie ${coin.name} en temps réel : cours, capitalisation, volume, historique et plus encore.`}
        />
      </Head>
      <Breadcrumbs
        items={[
          { label: 'Monnaies', href: '/' },
          { label: coin.name, href: `/coins/${coin.id}` },
        ]}
      />
      <Statistics coin={coin} currency={currency} />
      <History data={coinHistory} currency={currency} days={days} />
      <Trending coins={trendingCoins} />
    </Container>
  )
}

export const getServerSideProps = async ({
  req,
  query,
}: GetServerSidePropsContext) => {
  const id = query.id as string
  const currency = req.cookies.currency || DEFAULT_CURRENCY
  const days = Number(req.cookies.days) || DEFAULT_DAYS

  const trendingCoins = await getTrending(currency)
  const coin = await getCoin(id, currency)
  const coinHistory = await getMarketChart(id, currency, days)

  return {
    props: {
      trendingCoins,
      coin,
      coinHistory,
      currency,
      days,
    },
  }
}

const Container = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.sizes[800]};
`

export default CoinPage
