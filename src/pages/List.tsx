import ListTabs from '@/components/list/common/ListTabs';
import QuoteCoinList from '@/components/list/quotes/QuoteCoinList';
import Spacer from '@/components/shared/Spacer';
import useListTab from '@/hooks/list/useListTab';
import styled from '@emotion/styled';

function List(): JSX.Element {
  const { activeTab } = useListTab();
  return (
    <Main>
      <ListTabs />
      <Spacer y={30} />
      {activeTab === 'QUOTES' ? <QuoteCoinList /> : <></>}
    </Main>
  )
}

export default List;

const Main = styled.main`
`