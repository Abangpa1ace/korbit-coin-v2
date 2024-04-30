import { fetchGetCoinsMarkets } from '@/apis/fetcher/coin';
import { BookmartListDefaultParams } from '@/constants/coin/list';
import { useSuspenseQuery } from '@tanstack/react-query';
import { useMemo } from 'react';

const queryKey = ['useGetBookmarkCoins'];

const useGetBookmarkCoins = (ids: string[]) => {
  const joinedIds = useMemo(() => (ids.length ? ids.sort().join(',') : undefined), [ids]);

  const query = useSuspenseQuery({
    queryKey: [...queryKey, joinedIds],
    queryFn: () => fetchGetCoinsMarkets({ ...BookmartListDefaultParams, ids: joinedIds }),
    // TEMP: 다회 호출 시 429 에러가 있어 캐싱타임을 크게 잡음
    staleTime: 1000 * 60 * 20,
    gcTime: 1000 * 60 * 20,
  });

  return {
    ...query,
  };
};

export default useGetBookmarkCoins;
