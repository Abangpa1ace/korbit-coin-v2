
import { VsCurrencyMap } from "@/constants/coin/common";
import { ListTabType, QuoteListRequestParams } from "@/types/coin/list";

export const ListTabMap = {
  QUOTES: 'QUOTES',
  BOOKMARKS: 'BOOKMARKS',
} as const;

export const ListTabLabelMap: Record<ListTabType, string> = {
  [ListTabMap.QUOTES]: '가상자산 시세 목록',
  [ListTabMap.BOOKMARKS]: '북마크 목록',
}

export const QuoteListDefaultParams: QuoteListRequestParams = {
  vs_currency: VsCurrencyMap.KRW,
  page: 1,
  per_page: 50,
  order: 'market_cap_desc',
  price_change_percentage: '1h,24h,7d',
}