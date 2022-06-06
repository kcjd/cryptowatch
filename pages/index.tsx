import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next'
import Head from 'next/head'
import styled from 'styled-components'
import Ranking from '../components/Ranking'
import Trending from '../components/Trending'
import { DEFAULT_CURRENCY } from '../lib/constants'
import { getRanking, getTrending } from '../lib/coingecko'

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
  const page = Number(query.page) || 1
  const currency = req.cookies.currency || DEFAULT_CURRENCY

  const trendingCoins = await getTrending(currency)
  const rankingCoins = await getRanking(currency, page)

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
