import { NextPage } from 'next'
import Head from 'next/head'
import styled from 'styled-components'
import Ranking from '../components/Ranking'
import Trending from '../components/Trending'

const HomePage: NextPage = () => {
  return (
    <Container>
      <Head>
        <title>Cryptowatch</title>
        <meta
          name="description"
          content="Suivi en temps réel des crypto-monnaies les plus populaires : cours, capitalisation boursière, historique."
        />
      </Head>

      <Trending />

      <Ranking />
    </Container>
  )
}

const Container = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.sizes[800]};
`

export default HomePage
