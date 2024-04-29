import { ListTableColumnType } from '@/components/list/common/ListTable/ListTable';
import ColumnPercent from '@/components/list/common/ListTable/ListTableBody/ColumnPercent';
import ColumnPrice from '@/components/list/common/ListTable/ListTableBody/ColumnPrice';
import { themeColor } from '@/themes/variable';
import { CoinListItemType } from '@/types/coin/list';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Children } from 'react';

interface Props {
  coin: CoinListItemType;
  columns: ListTableColumnType[];
}

const getColumElement = (column: ListTableColumnType, coin: CoinListItemType) => {
  const { data } = column;

  switch (data) {
    case 'id':
      return <ColumnText type='primary'>{coin[data].toUpperCase()}</ColumnText>
    case 'current_price':
    case 'total_volume':
      return <ColumnPrice price={coin[data]} />
    case 'price_change_percentage_1h_in_currency':
    case 'price_change_percentage_24h_in_currency':
    case 'price_change_percentage_7d_in_currency':
      return <ColumnPercent percent={coin[data]} />
    case 'bookmark':
      return null;
    default: 
      return <ColumnText type='secondary'>{coin[data].toUpperCase()}</ColumnText>
  }
}

function ListTableBodyRow({ coin, columns }: Props): JSX.Element {
  return (
    <Row>
      {Children.toArray(columns.map(column => (
        <Column align={column.align} width={column.width}>
          {getColumElement(column, coin)}
        </Column>
      )))}
    </Row>
  )
}

export default ListTableBodyRow;

const Row = styled.div`
  display: flex;
  align-items: center;
  height: 56px;
  
  :not(:last-of-type) {
    border-bottom: 1px solid ${themeColor.gray200};
  }
`;

const Column = styled.div<Pick<ListTableColumnType, 'align' | 'width'>>`
  flex-basis: ${({ width }) => `${width}%`};
  flex-grow: 1;
  flex-shrink: 1;
  height: 100%;
  display: flex;
  justify-content: ${({ align }) => align === 'right' ? 'flex-end' : 'flex-start'};
  align-items: center;
  padding: 0 10px;
  text-align: ${({ align }) => align || 'left'};
`;

const ColumnText = styled.p<{ type: 'primary' | 'secondary' }>`
  ${({ type }) =>
    type === 'primary' ? css`
      font-size: 15px;
      font-weight: 700;
  ` : type === 'secondary' ? css`
      color: ${themeColor.gray600};
      font-size: 13px;
      font-weight: 500;
  ` : null};
`;