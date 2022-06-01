import { NextPage } from 'next'
import Head from 'next/head'
import Ranking from '../components/Ranking'
import Trending from '../components/Trending'

const HomePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Cryptowatch</title>
        <meta
          name="description"
          content="Suivi en temps réel des crypto-monnaies les plus populaires : cours, capitalisation boursière, historique."
        />
      </Head>

      <Trending />
    </>
  )
}

export default HomePage
