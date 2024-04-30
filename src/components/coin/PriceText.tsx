import { CurrencyUnit, VsCurrencyMap } from '@/constants/coin/common';
import { VsCurrencyType } from '@/types/coin/common';
import { SerializedStyles } from '@emotion/react';
import styled from '@emotion/styled';

interface Props {
  price: number | null;
  currency: VsCurrencyType;
  customStyle?: SerializedStyles;
}

function PriceText({ price, currency = VsCurrencyMap.KRW, customStyle }: Props): JSX.Element {
  return (
    <Price css={customStyle}>
      {typeof price !== 'number' ? '-' : `${CurrencyUnit[currency]}${price.toLocaleString()}`}
    </Price>
  );
}

export default PriceText;

const Price = styled.p`
  font-size: 14px;
  font-weight: 600;
  letter-spacing: -0.02px;
`;
