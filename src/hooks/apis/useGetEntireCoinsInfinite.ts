import { fetchGetCoinsMarkets } from '@/apis/fetcher/coin';
import { QuoteListDefaultParams } from '@/constants/coin/list';
import useQuoteStore from '@/store/coin/quoteStore';
import { useSuspenseInfiniteQuery } from '@tanstack/react-query';
import { useMemo } from 'react';

const queryKey = ['useGetEntireCoinsInfinite'];

const useGetEntireCoinsInfinite = () => {
  const requestParams = useQuoteStore((state) => state.requestParams);

  const { data, ...query } = useSuspenseInfiniteQuery({
    queryKey: [...queryKey, requestParams.vs_currency, requestParams.per_page],
    queryFn: ({ pageParam }) => fetchGetCoinsMarkets({ ...requestParams, page: pageParam }),
    initialPageParam: QuoteListDefaultParams.page,
    getNextPageParam: (lastPage, allPages) => {
      // TEMP: API에서 페이징 데이터를 제공하지 않아, 인위적 연산으로 페이징 임시처리
      if (lastPage.length < (requestParams.per_page ?? 0)) return;
      return allPages.length + 1;
    },
    // TEMP: 다회 호출 시 429 에러가 있어 캐싱타임을 크게 잡음
    staleTime: 1000 * 60 * 20,
    gcTime: 1000 * 60 * 20,
  });

  const flattedList = useMemo(() => data.pages.flat(), [data]);

  return {
    flattedList,
    ...query,
  };
};

export default useGetEntireCoinsInfinite;
