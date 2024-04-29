import ListTableBodyRow from '@/components/list/common/ListTable/ListTableBody/ListTableBodyRow';
import ListTableHeader from '@/components/list/common/ListTable/ListTableHeader';
import { themeColor } from '@/themes/variable';
import { CoinListItemType } from '@/types/coin/list';
import styled from '@emotion/styled';
import { Children } from 'react';

export interface ListTableColumnType {
  data: Extract<keyof CoinListItemType,
    'id' |
    'symbol' |
    'current_price' | 
    'price_change_percentage_1h_in_currency' |
    'price_change_percentage_24h_in_currency' |
    'price_change_percentage_7d_in_currency' |
    'total_volume'
  > | 'bookmark';
  title?: string;
  width: number;
  align?: 'left' | 'right';
}

const columns: ListTableColumnType[]  = [
  { data: 'bookmark', width: 5 },
  { data: 'id', title: '자산', width: 15 },
  { data: 'symbol', width: 10 },
  { data: 'current_price', title: 'Price', width: 15, align: 'right' },
  { data: 'price_change_percentage_1h_in_currency', title: '1H', width: 10, align: 'right' },
  { data: 'price_change_percentage_24h_in_currency', title: '24H', width: 10, align: 'right' },
  { data: 'price_change_percentage_7d_in_currency', title: '7D', width: 10, align: 'right' },
  { data: 'total_volume', title: '24H Volume', width: 25, align: 'right' },
]

interface Props {
  coinList: CoinListItemType[];
  isError?: boolean;
}

function ListTable({ coinList, isError }: Props) {
  return (
    <>
      <ListTableHeader columns={columns} />
      {!coinList?.length
        ? <Placeholder>{isError ? '조회중 오류가 발생했어요' : '조회된 코인목록이 없습니다.'}</Placeholder>
        : Children.toArray(coinList.map(coin => <ListTableBodyRow coin={coin} columns={columns} />))}
    </>
  )
}

export default ListTable;

const Placeholder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  color: ${themeColor.gray200};
  font-size: 14px;
`;