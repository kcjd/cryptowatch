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

const CoinPage: NextPage = () => {
  const router = useRouter()
  const id = router.query.id as string
  const { preferences } = usePreferences()
  const { data } = useSWR<MarketsResponse>([API_ENDPOINTS.markets, { ids: id, vs_currency: preferences.currency }])
  const coin = data?.[0]

  return (
    <>
      <Head>
        <title>Cryptowatch</title>
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
      <Container>
        <Overview />
        <History />
      </Container>
    </>
  )
}

const Container = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.sizes[800]} ${({ theme }) => theme.sizes[600]};

  & > section:first-child {
    grid-column: 1 / -1;
  }

  ${mq('lg')`
    grid-template-columns: 3fr 1fr;
  `}
`

export default CoinPage
