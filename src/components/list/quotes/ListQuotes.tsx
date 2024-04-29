import ListQuotesFilters from "@/components/list/quotes/ListQuotesFilters";
import ListQuotesTable from "@/components/list/quotes/ListQuotesTable";
import BaseSuspense from "@/components/shared/BaseSuspense";
import Spacer from "@/components/shared/Spacer";

const ListQuotes = () => {
  return (
    <>
      <ListQuotesFilters />
      <Spacer y={10} />
      <BaseSuspense>
        <ListQuotesTable />
      </BaseSuspense>
    </>
  )
}

export default ListQuotes;

