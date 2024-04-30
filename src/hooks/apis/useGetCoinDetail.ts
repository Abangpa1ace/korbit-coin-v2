import { fetchGetCoinDetail } from '@/apis/fetcher/coin';
import { useSuspenseQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

const queryKey = ['useGetCoinDetail'];

const useGetCoinDetail = () => {
  const { coinId } = useParams();

  const query = useSuspenseQuery({
    queryKey: [...queryKey, coinId],
    queryFn: () => fetchGetCoinDetail(coinId || ''),
  });

  return { ...query };
};

export default useGetCoinDetail;
