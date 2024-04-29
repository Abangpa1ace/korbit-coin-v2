import ListTable from "@/components/list/common/ListTable/ListTable";
import BaseSuspense from "@/components/shared/BaseSuspense";
import useGetEntireCoinsInfinite from "@/hooks/apis/useGetEntireCoinsInfinite";
import { themeColor } from "@/themes/variable";
import styled from "@emotion/styled";

const QuoteCoinList = () => {
  const { flatList, isFetchingNextPage, fetchNextPage, hasNextPage, isError } = useGetEntireCoinsInfinite();

  return (
    <>
      <ListTable coinList={flatList} isError={isError} />
      {hasNextPage && <MoreButton disabled={isFetchingNextPage} onClick={() => fetchNextPage()}>더보기</MoreButton>}
    </>
  )
}

export default QuoteCoinList;

const MoreButton = styled.button`
  width: 100%;
  height: 48px;
  margin-top: 8px;
  border: 1px solid ${themeColor.gray100};
  color: ${themeColor.gray800};
  font-size: 15px;
  font-weight: 500;
  border-radius: 4px;
  cursor: pointer;

  :disabled {
    background-color: ${themeColor.gray60};
    opacity: .6;
  }
`;