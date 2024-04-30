import ListBookmarks from '@/components/coin/list/bookmarks/ListBookmarks';
import ListTabs from '@/components/coin/list/common/ListTabs';
import ListQuotes from '@/components/coin/list/quotes/ListQuotes';
import BaseSuspense from '@/components/shared/BaseSuspense';
import Spacer from '@/components/shared/Spacer';
import { ListTabMap } from '@/constants/coin/list';
import useListTab from '@/hooks/list/useListTab';
import styled from '@emotion/styled';

function List(): JSX.Element {
  const { activeTab } = useListTab();
  return (
    <Main>
      <ListTabs />
      <Spacer y={30} />
      <BaseSuspense>
        {activeTab === ListTabMap.BOOKMARKS ? <ListBookmarks /> : <ListQuotes />}
      </BaseSuspense>
    </Main>
  );
}

export default List;

const Main = styled.main``;
