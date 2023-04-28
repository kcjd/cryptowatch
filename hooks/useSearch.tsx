import useSWR from "swr";
import useDebounce from "hooks/useDebounce";
import { CoinBaseData } from "lib/types";

type SearchResponse = {
  coins: CoinBaseData[];
};

export default function useSearch(query: string) {
  const debouncedQuery = useDebounce(query);
  const key = `/search?query=${debouncedQuery}`;

  return useSWR<SearchResponse>(key, null, { keepPreviousData: true });
}
