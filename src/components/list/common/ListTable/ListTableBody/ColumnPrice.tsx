import { CurrencyUnit } from '@/constants/coin/common';
import useQuoteStore from '@/store/coin/quoteStore';
import styled from '@emotion/styled';

interface Props {
  price: number | null;
}

function ColumnPrice({ price }: Props): JSX.Element {
  const getParamsVsCurrency = useQuoteStore(state => state.getParamsVsCurrency);

  return (
    <Price>
      {typeof price !== 'number' ? '-' : `${CurrencyUnit[getParamsVsCurrency()]}${price.toLocaleString()}`}
    </Price>
  )
}

export default ColumnPrice;

const Price = styled.p`
  font-size: 14px;
  font-weight: 600;
  letter-spacing: -0.02px;
`