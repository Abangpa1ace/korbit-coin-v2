import Select from '@/components/shared/Select';
import { VsCurrencyMap } from '@/constants/coin/common';
import { VsCurrencyType } from '@/types/coin/common';

const CurrencySelectOptions = Object.values(VsCurrencyMap).map((value) => ({
  label: `${value} 보기`,
  value,
}));

interface Props {
  value: VsCurrencyType;
  onChange: (value: VsCurrencyType) => void;
}

function CurrencySelect({ value, onChange }: Props): JSX.Element {
  return (
    <Select<VsCurrencyType> value={value} options={CurrencySelectOptions} handleChange={onChange} />
  );
}

export default CurrencySelect;
