import type { NextPage } from 'next'
import Head from 'next/head'

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
    </>
  )
}

export default HomePage
