import ListTabs from '@/components/list/common/ListTabs';
import QuoteCoinList from '@/components/list/quotes/QuoteCoinList';
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
        {activeTab === ListTabMap.BOOKMARKS ? <></> : <QuoteCoinList />}
      </BaseSuspense>
    </Main>
  )
}

export default List;

const Main = styled.main`
`