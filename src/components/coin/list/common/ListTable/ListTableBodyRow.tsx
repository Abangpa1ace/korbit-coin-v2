import { ListTableColumnType } from '@/components/coin/list/common/ListTable/ListTable';
import ColumnPrice from '@/components/coin/list/common/ListTable/ListTableBody/ColumnPrice';
import BookmarkStarButton from '@/components/coin/BookmarkStarButton';
import { themeColor } from '@/themes/variable';
import { CoinListItemType } from '@/types/coin/list';
import styled from '@emotion/styled';
import { Children, useCallback, useMemo } from 'react';
import { Link } from 'react-router-dom';
import PercentText from '@/components/coin/PercentText';
import PriceText from '@/components/coin/PriceText';
import useQuoteStore from '@/store/coin/quoteStore';
import { VsCurrencyType } from '@/types/coin/common';

interface Props {
  coin: CoinListItemType;
  columns: ListTableColumnType[];
}

const getColumElement = (
  column: ListTableColumnType,
  coin: CoinListItemType,
  currency: VsCurrencyType,
) => {
  const { data } = column;

  switch (data) {
    case 'id':
      return <ColumnLinkTitle to={`/${coin.id}`}>{coin[data].toUpperCase()}</ColumnLinkTitle>;
    case 'current_price':
    case 'total_volume':
      return <PriceText price={coin[data]} currency={currency} />;
    case 'price_change_percentage_1h_in_currency':
    case 'price_change_percentage_24h_in_currency':
    case 'price_change_percentage_7d_in_currency':
      return <PercentText percent={coin[data]} />;
    case 'bookmark':
      return <BookmarkStarButton id={coin.id} />;
    default:
      return <ColumnText>{coin[data].toUpperCase()}</ColumnText>;
  }
};

function ListTableBodyRow({ coin, columns }: Props): JSX.Element {
  const getParamsVsCurrency = useQuoteStore((state) => state.getParamsVsCurrency);

  const getColumElement = useCallback(
    (column: ListTableColumnType) => {
      const { data } = column;

      switch (data) {
        case 'id':
          return <ColumnLinkTitle to={`/${coin.id}`}>{coin[data].toUpperCase()}</ColumnLinkTitle>;
        case 'current_price':
        case 'total_volume':
          return <PriceText price={coin[data]} currency={getParamsVsCurrency()} />;
        case 'price_change_percentage_1h_in_currency':
        case 'price_change_percentage_24h_in_currency':
        case 'price_change_percentage_7d_in_currency':
          return <PercentText percent={coin[data]} />;
        case 'bookmark':
          return <BookmarkStarButton id={coin.id} />;
        default:
          return <ColumnText>{coin[data].toUpperCase()}</ColumnText>;
      }
    },
    [coin, columns, getParamsVsCurrency],
  );

  return (
    <Row>
      {Children.toArray(
        columns.map((column) => (
          <Column align={column.align} width={column.width}>
            {getColumElement(column)}
          </Column>
        )),
      )}
    </Row>
  );
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
  justify-content: ${({ align }) => (align === 'right' ? 'flex-end' : 'flex-start')};
  align-items: center;
  padding: 0 10px;
  text-align: ${({ align }) => align || 'left'};
`;

const ColumnLinkTitle = styled(Link)`
  font-size: 15px;
  font-weight: 700;
`;

const ColumnText = styled.p`
  color: ${themeColor.gray600};
  font-size: 13px;
  font-weight: 500;
`;
