import { fetchGetCoinsMarkets } from '@/apis/fetcher/coin';
import { QuoteListRequestParams } from '@/types/coin/list';
import { useSuspenseQuery } from '@tanstack/react-query';

const queryKey = ['useGetCoinsById'];

const useGetCoinsByIds = (params: QuoteListRequestParams) => {
  const query = useSuspenseQuery({
    queryKey: [...queryKey, params.ids],
    queryFn: () => fetchGetCoinsMarkets(params),
    // TEMP: 다회 호출 시 429 에러가 있어 캐싱타임을 크게 잡음
    staleTime: 1000 * 60 * 20,
    gcTime: 1000 * 60 * 20,
  });

  return {
    ...query,
  };
};

export default useGetCoinsByIds;
