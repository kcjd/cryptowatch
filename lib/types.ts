export type CoinBaseData = {
  id: string;
  name: string;
  symbol: string;
};

export type CoinData = CoinBaseData & {
  ath: number;
  atl: number;
  circulating_supply: number;
  current_price: number;
  fully_diluted_valuation: number;
  high_24h: number;
  image: string;
  low_24h: number;
  market_cap: number;
  market_cap_rank: number;
  max_supply: number;
  price_change_24h: number;
  price_change_percentage_24h: number;
  sparkline_in_7d: {
    price: HistoryData;
  };
  total_supply: number;
  total_volume: number;
};

export type HistoryData = number[] | number[][];
