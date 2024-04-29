import Select from '@/components/shared/Select';
import Spacer from '@/components/shared/Spacer';
import { VsCurrencyMap } from '@/constants/coin/common';
import { ListTabMap } from '@/constants/coin/list';
import useListTab from '@/hooks/list/useListTab';
import useQuoteStore from '@/store/list/quoteStore';
import { VsCurrencyType } from '@/types/coin/common';
import { ListPerPageType, ListTabType } from '@/types/coin/list';
import styled from '@emotion/styled';
import { shallow } from 'zustand/shallow';

const TabSelectOptions = [
  { label: '전체보기', value: ListTabMap.QUOTES },
  { label: '북마크 보기', value: ListTabMap.BOOKMARKS }
]

const PER_PAGE_LIST: ListPerPageType[] = [10, 30, 50];
const PerPageSelectOptions = PER_PAGE_LIST.map(value => ({ label: `${value}개 보기`, value }));

const CurrencySelectOptions = Object.values(VsCurrencyMap).map(value => ({ label: `${value} 보기`, value }))

function ListQuotesFilters(): JSX.Element {
  const { activeTab, handleChangeTab } = useListTab();
  const { getParamsPerPage, getParamsVsCurrency, updateRequestParams } = useQuoteStore(({
    getParamsPerPage,
    getParamsVsCurrency,
    updateRequestParams
  }) => ({
    getParamsPerPage,
    getParamsVsCurrency,
    updateRequestParams
  }), shallow);
  
  const handleChangeTabSelect = (tab: ListTabType) => {
    if (tab === 'BOOKMARKS') handleChangeTab('BOOKMARKS');
  }

  const handleChangePerPage = (per_page: ListPerPageType) => {
    updateRequestParams({ per_page })
  }

  const handleChangeVsCurrency = (vs_currency: VsCurrencyType) => {
    updateRequestParams({ vs_currency });
  }

  return (
    <Container>
      <Select<ListTabType> value={activeTab} options={TabSelectOptions} handleChange={handleChangeTabSelect} />
      <Spacer x={12} />
      <Select<ListPerPageType> value={getParamsPerPage()} options={PerPageSelectOptions} handleChange={handleChangePerPage} />
      <Spacer x={12} />
      <Select<VsCurrencyType> value={getParamsVsCurrency()} options={CurrencySelectOptions} handleChange={handleChangeVsCurrency} />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 14px 0;
`

export default ListQuotesFilters