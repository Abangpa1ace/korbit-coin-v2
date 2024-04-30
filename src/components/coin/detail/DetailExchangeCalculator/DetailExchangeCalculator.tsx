import PriceInput from '@/components/coin/detail/DetailExchangeCalculator/PriceInput';
import useGetCoinDetail from '@/hooks/apis/useGetCoinDetail';
import useDetailStore from '@/store/coin/detailStore';
import { themeColor } from '@/themes/variable';
import truncateRational from '@/utils/truncateRational';
import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { FaArrowRightArrowLeft } from 'react-icons/fa6';

function DetailExchangeCalculator(): JSX.Element {
  const priceCurrency = useDetailStore((state) => state.priceCurrency);
  const { data } = useGetCoinDetail();
  const exchangeRate = data.market_data.current_price[priceCurrency];

  const [prices, setPrices] = useState<{ crypto: number; currency: number }>({
    crypto: 1,
    currency: exchangeRate,
  });

  const handleChangeCrypto = (value: number) => {
    setPrices({
      crypto: value,
      currency: Math.round(value * exchangeRate),
    });
  };

  const handleChangeCurrency = (value: number) => {
    setPrices({
      crypto: Math.round(value / exchangeRate),
      currency: value,
    });
  };

  useEffect(() => {
    setPrices({
      crypto: 1,
      currency: exchangeRate,
    });
  }, [exchangeRate]);

  return (
    <Container>
      <Title>가격 계산</Title>
      <Calculator>
        <PriceInput
          title={data.symbol.toUpperCase()}
          value={prices.crypto}
          onChange={handleChangeCrypto}
        />
        <FaArrowRightArrowLeft size={20} />
        <PriceInput
          title={priceCurrency.toUpperCase()}
          value={prices.currency}
          onChange={handleChangeCurrency}
        />
      </Calculator>
    </Container>
  );
}

export default DetailExchangeCalculator;

const Container = styled.div`
  padding: 16px;
  background-color: #edf3f8;
`;

const Title = styled.h3`
  font-size: 15px;
  font-weight: 700;
`;

const Calculator = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 12px;
  width: 100%;
  margin: 20px auto;
`;
