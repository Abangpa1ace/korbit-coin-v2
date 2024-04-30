import ListTable from '@/components/coin/list/common/ListTable/ListTable';
import useGetBookmarkCoins from '@/hooks/apis/useGetBookmarkCoins';
import useBookmarkStore from '@/store/coin/bookmarkStore';

const ListBookmarksTable = () => {
  const bookmarkIds = useBookmarkStore((state) => state.bookmarkIds);
  const { data, isError } = useGetBookmarkCoins(bookmarkIds);

  return <ListTable coinList={data} isError={isError} />;
};

export default ListBookmarksTable;
