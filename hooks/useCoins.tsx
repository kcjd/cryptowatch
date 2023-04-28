import useSWR from "swr";
import { useCurrency } from "contexts/currencyContext";
import { CoinData } from "lib/types";

type CoinsResponse = CoinData[];

export default function useCoins(coinIds?: string) {
  const { currency } = useCurrency();
  const key = `/coins/markets?ids=${coinIds}&vs_currency=${currency}&sparkline=true`;

  return useSWR<CoinsResponse>(coinIds ? key : null);
}
