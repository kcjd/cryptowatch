import useSWR from "swr";
import { useCurrency } from "contexts/currencyContext";
import { CoinData } from "lib/types";

type CoinResponse = CoinData[];

export default function useCoin(coinId: string) {
  const { currency } = useCurrency();
  const key = `/coins/markets?ids=${coinId}&vs_currency=${currency}`;

  const request = useSWR<CoinResponse>(key);

  return { ...request, data: request.data?.[0] };
}
