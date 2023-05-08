import Head from "next/head";
import { useRouter } from "next/router";
import HistorySection from "components/HistorySection";
import OverviewSection from "components/OverviewSection";
import TrendingSection from "components/TrendingSection";
import useCoin from "hooks/useCoin";

const Page = () => {
  const router = useRouter();
  const coinId = router.query.id as string;
  const { data: coin, isValidating } = useCoin(coinId);

  if (!isValidating && !coin) {
    router.push("/404");
  }

  if (coin) {
    return (
      <>
        <Head>
          <title>{coin.name} - Cryptowatch</title>
        </Head>
        <OverviewSection coinId={coinId} />
        <HistorySection coinId={coinId} />
        <TrendingSection />
      </>
    );
  }
};

export default Page;
