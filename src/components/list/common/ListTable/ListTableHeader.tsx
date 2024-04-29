import { ListTableColumnType } from "@/components/list/common/ListTable/ListTable";
import { themeColor } from "@/themes/variable";
import styled from "@emotion/styled";
import { Children } from "react";

interface Props {
  columns: ListTableColumnType[];
}

const ListTableHeader = ({ columns }: Props) => {
  return (
    <Row>
      {Children.toArray(columns.map(({ title, align, width }) => (
        <Column align={align} width={width}>{title || ''}</Column>
      )))}
    </Row>
  )
}

export default ListTableHeader;

const Row = styled.div`
  display: flex;
  align-items: center;
  height: 30px;
  background-color: ${themeColor.gray50};
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
  color: ${themeColor.gray600};
  font-weight: 500;
  font-size: 13px;
`;