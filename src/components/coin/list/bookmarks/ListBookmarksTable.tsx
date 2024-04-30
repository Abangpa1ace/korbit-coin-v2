import ListTable from '@/components/coin/list/common/ListTable/ListTable';
import { BookmartListDefaultParams } from '@/constants/coin/list';
import useGetCoinsByIds from '@/hooks/apis/useGetCoinsByIds';
import useBookmarkStore from '@/store/coin/bookmarkStore';

const ListBookmarksTable = () => {
  const bookmarkIds = useBookmarkStore((state) => state.bookmarkIds);
  const { data, isError } = useGetCoinsByIds({
    ...BookmartListDefaultParams,
    ids: bookmarkIds ? bookmarkIds.sort().join(',') : undefined,
  });

  return <ListTable coinList={data} isError={isError} />;
};

export default ListBookmarksTable;
