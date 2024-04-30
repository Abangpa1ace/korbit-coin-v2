import { coinGeckoAxios } from '@/apis/axios';
import { CoinDetailType } from '@/types/coin/detail';
import { CoinListItemType, QuoteListRequestParams } from '@/types/coin/list';

export const fetchGetCoinsMarkets = async (params: QuoteListRequestParams) =>
  coinGeckoAxios.get<CoinListItemType[]>('/coins/markets', { ...params });

export const fetchGetCoinDetail = async (id: string) =>
  coinGeckoAxios.get<CoinDetailType>(`/coins/${id}`);
