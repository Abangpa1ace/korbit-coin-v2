import { ListTabMap } from "@/constants/coin/list";
import { VsCurrencyType } from "@/types/coin/common";

export type ListTabType = typeof ListTabMap[keyof typeof ListTabMap];

export type ListPerPageType = 10 | 30 | 50;
export type ListOrderType = // market_cap_desc로 고정해서 사용하므로 유의미한 타입은 아님
  | 'market_cap_desc'
  | 'market_cap_asc'
  | 'volume_asc'
  | 'volume_desc'
  | 'id_asc'
  | 'id_desc'; 

export interface CoinListItemType {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  market_cap: number;
  market_cap_rank: number;
  fully_diluted_valuation: number;
  total_volume: number;
  high_24h: number;
  low_24h: number;
  price_change_24h: number;
  price_change_percentage_1h_in_currency: number;
  price_change_percentage_7d_in_currency: number;
  price_change_percentage_24h_in_currency: number;
  price_change_percentage_24h: number;
  market_cap_change_24h: number;
  market_cap_change_percentage_24h: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  ath: number;
  ath_change_percentage: number;
  ath_date: string;
  atl: number;
  atl_change_percentage: number;
  atl_date: string;
  roi: {
    currency: VsCurrencyType;
    percentage: number;
    times: number;
  } | null;
  last_updated: string;
}

export interface QuoteListRequestParams {
  vs_currency: VsCurrencyType;
  page: number;
  per_page: ListPerPageType;
  order?: ListOrderType;
  price_change_percentage?: string;
}