import useSWR from "swr";
import { CoinBaseData } from "lib/types";

type TrendingResponse = {
  coins: {
    item: CoinBaseData;
  }[];
};

export default function useTrending() {
  const key = `/search/trending`;

  return useSWR<TrendingResponse>(key);
}
