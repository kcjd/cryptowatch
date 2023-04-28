import useSWR from "swr";
import { useCurrency } from "contexts/currencyContext";
import { HistoryData } from "lib/types";

type HistoryResponse = {
  prices: HistoryData;
};

export default function useHistory(coinId: string, days: number) {
  const { currency } = useCurrency();
  const key = `/coins/${coinId}/market_chart?days=${days}&vs_currency=${currency}`;

  return useSWR<HistoryResponse>(key);
}
