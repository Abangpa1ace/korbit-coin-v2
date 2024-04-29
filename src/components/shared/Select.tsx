import { themeColor } from '@/themes/variable';
import styled from '@emotion/styled';
import { ChangeEvent, Children, SelectHTMLAttributes } from 'react';

interface Props<T extends string | number> extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'onChange'> {
  options: { value: T; label: string }[];
  value: T | undefined;
  handleChange?: (value: T) => void;
}

function Select<T extends string | number>({ options, value, handleChange, ...props }: Props<T>): JSX.Element {
  const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
    handleChange?.(e.target.value as T);
  };

  return (
    <SelectComponent value={value} onChange={onChange} {...props}>
      {Children.toArray(options.map(option => <option value={option.value}>{option.label}</option>))}
    </SelectComponent>
  )
}

export default Select;

const SelectComponent = styled.select`
  border: none;
  color: ${themeColor.gray800};
`