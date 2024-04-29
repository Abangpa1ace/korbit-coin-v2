import { coinGeckoAxios } from "@/apis/axios";
import { QuoteListDefaultParams } from "@/constants/coin/list";
import useQuoteStore from "@/store/list/quoteStore";
import { CoinListItemType, QuoteListRequestParams } from "@/types/coin/list";
import { useSuspenseInfiniteQuery } from "@tanstack/react-query";
import { useMemo } from "react";

const queryKey = ['useGetCoins'];
const queryFn = async (params: QuoteListRequestParams) => {
  return coinGeckoAxios.get<CoinListItemType[]>('/coins/markets', {
    ...params,
    per_page: null, // Error(429) 발생시, per_page를 제거하고 100개씩 호출해야함
  });  
}

const useGetEntireCoinsInfinite = () => {
  const requestParams = useQuoteStore(state => state.requestParams);

  const { data, ...query } = useSuspenseInfiniteQuery({
    queryKey: [...queryKey, requestParams.vs_currency, requestParams.per_page],
    queryFn: ({ pageParam }) => queryFn({ ...requestParams, page: pageParam }),
    initialPageParam: QuoteListDefaultParams.page,
    getNextPageParam: (lastPage, allPages) => {
      // API에서 페이징 데이터를 제공하지 않아, 인위적 연산으로 페이징 임시처리
      if (lastPage.length < requestParams.per_page) return;
      return allPages.length + 1;
    },
  })

  const flatList = useMemo<CoinListItemType[]>(() => data.pages.flat(), [data]);

  return {
    flatList,
    ...query,
  }
}

export default useGetEntireCoinsInfinite;