import useSWR from "swr";
import { useCurrency } from "contexts/currencyContext";
import { CoinData } from "lib/types";

type RankingResponse = CoinData[];

export default function useRanking(page: number) {
  const { currency } = useCurrency();
  const key = `/coins/markets?vs_currency=${currency}&per_page=20&page=${page}&sparkline=true`;

  return useSWR<RankingResponse>(key);
}
