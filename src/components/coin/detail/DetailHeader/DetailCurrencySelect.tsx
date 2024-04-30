import CurrencySelect from '@/components/coin/CurrencySelect';
import useDetailStore from '@/store/coin/detailStore';
import styled from '@emotion/styled';
import { shallow } from 'zustand/shallow';

function DetailCurrencySelect(): JSX.Element {
  const { priceCurrency, setPriceCurrency } = useDetailStore(
    ({ priceCurrency, setPriceCurrency }) => ({ priceCurrency, setPriceCurrency }),
    shallow,
  );

  return (
    <SelectWrapper>
      <CurrencySelect value={priceCurrency} onChange={setPriceCurrency} />
    </SelectWrapper>
  );
}

export default DetailCurrencySelect;

const SelectWrapper = styled.div`
  position: absolute;
  right: 0;
  top: 0;
`;
