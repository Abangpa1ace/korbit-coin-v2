import ListQuotesFilters from '@/components/coin/list/quotes/ListQuotesFilters';
import ListQuotesTable from '@/components/coin/list/quotes/ListQuotesTable';
import BaseSuspense from '@/components/shared/BaseSuspense';
import Spacer from '@/components/shared/Spacer';

const ListQuotes = () => {
  return (
    <>
      <ListQuotesFilters />
      <Spacer y={10} />
      <BaseSuspense>
        <ListQuotesTable />
      </BaseSuspense>
    </>
  );
};

export default ListQuotes;
