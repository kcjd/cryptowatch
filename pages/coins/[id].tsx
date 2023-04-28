import Head from "next/head";
import { useRouter } from "next/router";
import HistorySection from "components/HistorySection";
import OverviewSection from "components/OverviewSection";
import Trending from "components/TrendingSection";
import useCoin from "hooks/useCoin";

const Page = () => {
  const router = useRouter();
  const coinId = router.query.id as string;
  const { data: coin } = useCoin(coinId);

  return (
    <>
      <Head>
        <title>{coin?.name} - Cryptowatch</title>
        <meta
          name="description"
          content={`Surveillez la cryptomonnaie ${coin?.name} en temps réel : cours, capitalisation, volume, historique et plus encore.`}
        />
      </Head>
      <OverviewSection coinId={coinId} />
      <HistorySection coinId={coinId} />
      <Trending />
    </>
  );
};

export default Page;
