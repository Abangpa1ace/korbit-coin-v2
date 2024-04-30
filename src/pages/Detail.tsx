import DetailDescription from '@/components/coin/detail/DetailDescription';
import DetailExchangeCalculator from '@/components/coin/detail/DetailExchangeCalculator/DetailExchangeCalculator';
import DetailHeader from '@/components/coin/detail/DetailHeader/DetailHeader';
import DetailSummary from '@/components/coin/detail/DetailSummary/DetailSummary';
import Spacer from '@/components/shared/Spacer';

function DetailPage(): JSX.Element {
  return (
    <main>
      <DetailHeader />
      <Spacer y={40} />
      <DetailSummary />
      <Spacer y={30} />
      <DetailExchangeCalculator />
      <Spacer y={20} />
      <DetailDescription />
    </main>
  );
}

export default DetailPage;
