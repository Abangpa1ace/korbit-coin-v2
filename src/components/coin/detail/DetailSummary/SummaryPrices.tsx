import PercentText from '@/components/coin/PercentText';
import PriceText from '@/components/coin/PriceText';
import Spacer from '@/components/shared/Spacer';
import useGetCoinDetail from '@/hooks/apis/useGetCoinDetail';
import useDetailStore from '@/store/coin/detailStore';
import { themeColor } from '@/themes/variable';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

function SummaryPrices(): JSX.Element {
  const { data } = useGetCoinDetail();
  const {
    market_data: {
      current_price,
      price_change_percentage_24h_in_currency,
      price_change_percentage_24h,
      market_cap,
      total_volume,
    },
  } = data;
  const priceCurrency = useDetailStore((state) => state.priceCurrency);

  return (
    <Container>
      <div>
        <PriceWrapper alignItems="flex-end">
          <PriceText
            price={current_price[priceCurrency]}
            currency={priceCurrency}
            customStyle={curretPriceStyle}
          />
          <PercentText
            percent={price_change_percentage_24h_in_currency[priceCurrency]}
            customStyle={currencyPercentStyle}
          />
        </PriceWrapper>
        <Spacer y={8} />
        <PriceWrapper alignItems="flex-start">
          <CryptoCurrency>1.00000000{data.symbol.toUpperCase()}</CryptoCurrency>
          <PercentText percent={price_change_percentage_24h} customStyle={cryptoPercentStyle} />
        </PriceWrapper>
      </div>
      <VolumesContainer>
        <VolumeWrapper>
          <p>시가총액</p>
          <PriceText price={market_cap[priceCurrency]} currency={priceCurrency} />
        </VolumeWrapper>
        <VolumeWrapper>
          <p>24시간 거래대금</p>
          <PriceText price={total_volume[priceCurrency]} currency={priceCurrency} />
        </VolumeWrapper>
      </VolumesContainer>
    </Container>
  );
}

export default SummaryPrices;

const Container = styled.article`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-left: 12px;
`;

const PriceWrapper = styled.div<{ alignItems: 'flex-start' | 'flex-end' }>`
  display: flex;
  align-items: ${({ alignItems }) => alignItems};
  column-gap: 16px;

  > :first-of-type {
    width: 200px;
    text-align: right;
  }
`;

const curretPriceStyle = css`
  font-size: 24px;
  font-weight: 600;
`;

const currencyPercentStyle = css`
  font-size: 16px;
  line-height: 20px;
  font-weight: 600;
`;

const CryptoCurrency = styled.p`
  color: ${themeColor.gray500};
  font-size: 13px;
`;

const cryptoPercentStyle = css`
  font-weight: 400;
`;

const VolumesContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 40px;
  margin-top: 16px;
`;

const VolumeWrapper = styled.div`
  color: ${themeColor.gray600};
  font-size: 13px;
  line-height: 18px;
  text-align: right;
`;
