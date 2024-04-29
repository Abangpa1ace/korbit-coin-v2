import { coinGeckoAxios } from '@/apis/axios';
import { CoinListItemType, QuoteListRequestParams } from '@/types/coin/list';

export const fetchGetCoinsMarkets = async (params: QuoteListRequestParams) =>
  coinGeckoAxios.get<CoinListItemType[]>('/coins/markets', { ...params });
