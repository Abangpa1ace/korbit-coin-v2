import SummaryInfos from '@/components/coin/detail/DetailSummary/SummaryInfos';
import SummaryPrices from '@/components/coin/detail/DetailSummary/SummaryPrices';
import styled from '@emotion/styled';

function DetailSummary(): JSX.Element {
  return (
    <Container>
      <SummaryInfos />
      <SummaryPrices />
    </Container>
  );
}

export default DetailSummary;

const Container = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
