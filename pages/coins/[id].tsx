import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next'
import Head from 'next/head'
import styled from 'styled-components'
import Breadcrumbs from '../../components/Breadcrumbs'
import History from '../../components/History'
import Overview from '../../components/Overview'
import Statistics from '../../components/Statistics'
import Trending from '../../components/Trending'
import { DEFAULT_CURRENCY, DEFAULT_DAYS } from '../../lib/constants'
import { mq } from '../../lib/mixins'
import { getCoin, getMarketChart, getTrending } from '../../lib/coingecko'

const CoinPage = ({
  trendingCoins,
  coin,
  coinHistory,
  currency,
  days
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <>
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
          { label: coin.name, href: `/coins/${coin.id}` }
        ]}
      />
      <Container>
        <Overview coin={coin} currency={currency} />
        <Columms>
          <History data={coinHistory} currency={currency} days={days} />
          <Statistics coin={coin} currency={currency} />
        </Columms>
        <Trending coins={trendingCoins} />
      </Container>
    </>
  )
}

export const getServerSideProps = async ({ req, query }: GetServerSidePropsContext) => {
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
