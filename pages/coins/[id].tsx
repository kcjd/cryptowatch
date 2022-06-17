import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'

import styled from 'styled-components'

import History from 'components/History'
import Statistics from 'components/Statistics'
import Trending from 'components/Trending'

import axios from 'lib/axios'
import { MarketsResponse } from 'lib/types'

const CoinPage = ({
  coin,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const router = useRouter()
  const id = router.query.id as string

  return (
    <Container>
      <Head>
        <title>{coin?.name} - Cryptowatch</title>
        <meta
          name="description"
          content={`Surveillez la cryptomonnaie ${coin?.name} en temps réel : cours, capitalisation, volume, historique et plus encore.`}
        />
      </Head>
      <Statistics coinId={id} />
      <History coinId={id} />
      <Trending />
    </Container>
  )
}

export const getServerSideProps = async ({
  query,
}: GetServerSidePropsContext) => {
  const id = query.id as string

  const { data } = await axios.get<MarketsResponse>(
    `/coins/markets?ids=${id}&vs_currency=USD`
  )

  const notFound = data.length === 0

  return {
    props: {
      coin: data[0],
    },
    notFound,
  }
}

const Container = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.sizes[800]};
`

export default CoinPage
