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

  if (coin) {
    return (
      <>
        <Head>
          <title>{coin.name} - Cryptowatch</title>
        </Head>
        <OverviewSection coinId={coinId} />
        <HistorySection coinId={coinId} />
        <Trending />
      </>
    );
  }
};

export default Page;
