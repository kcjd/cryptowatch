import Head from "next/head";
import RankingSection from "components/RankingSection";
import TrendingSection from "components/TrendingSection";

const Page = () => {
  return (
    <>
      <Head>
        <title>Cryptowatch</title>
        <meta
          name="description"
          content="Surveillez les cryptomonnaies les plus populaires en temps réel : cours, capitalisation, volume, historique et plus encore."
        />
      </Head>
      <TrendingSection />
      <RankingSection />
    </>
  );
};

export default Page;
