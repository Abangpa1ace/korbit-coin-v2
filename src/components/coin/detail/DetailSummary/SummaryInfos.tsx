import useGetCoinDetail from '@/hooks/apis/useGetCoinDetail';
import { themeColor } from '@/themes/variable';
import styled from '@emotion/styled';

function SummaryInfos(): JSX.Element {
  const { data } = useGetCoinDetail();
  const validLink = data.links.homepage.find((l) => l);

  return (
    <Container>
      <Row>
        <ColumnTitle>시가총액 Rank</ColumnTitle>
        <Column>Rank #{data.market_cap_rank}</Column>
      </Row>
      <Row>
        <ColumnTitle>웹사이트</ColumnTitle>
        <Column>{validLink ? <Anchor href={validLink}>{validLink}</Anchor> : '링크없음'}</Column>
      </Row>
    </Container>
  );
}

export default SummaryInfos;

const Container = styled.article`
  width: 380px;
`;

const Row = styled.div`
  display: flex;
  height: 50px;
  border: 1px solid ${themeColor.gray200};

  :not(:first-of-type) {
    border-top: none;
  }
`;

const Column = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  padding: 10px;
  color: ${themeColor.gray800};
  font-size: 14px;
`;

const ColumnTitle = styled(Column)`
  width: 35%;
  background-color: ${themeColor.gray100};
  font-weight: 600;
`;

const Anchor = styled.a`
  &:hover {
    text-decoration: underline;
  }
`;
