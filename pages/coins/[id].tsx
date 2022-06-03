import { MarketsResponse } from '../../types'
import { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import useSWR from 'swr'
import Breadcrumbs from '../../components/Breadcrumbs'
import History from '../../components/History'
import Overview from '../../components/Overview'
import { usePreferences } from '../../context/preferencesContext'
import { API_ENDPOINTS } from '../../helpers/constants'
import { mq } from '../../helpers/mixins'
import Statistics from '../../components/Statistics'
import Trending from '../../components/Trending'

const CoinPage: NextPage = () => {
  const router = useRouter()
  const id = router.query.id as string
  const { currency } = usePreferences()
  const { data } = useSWR<MarketsResponse>(id ? [API_ENDPOINTS.markets, { ids: id, vs_currency: currency }] : null)
  const coin = data?.[0]

  console.log(router)

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
          { label: coin?.name ?? '', href: `/coins/${id}` }
        ]}
      />
      <Overview />
      <Columms>
        <History />
        <Statistics />
      </Columms>
      <Trending />
    </Container>
  )
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
