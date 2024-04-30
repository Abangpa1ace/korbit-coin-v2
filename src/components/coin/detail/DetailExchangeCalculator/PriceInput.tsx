import { themeColor } from '@/themes/variable';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { ChangeEvent } from 'react';
import { NumericFormat } from 'react-number-format';

interface Props {
  title: string;
  value: number;
  onChange: (value: number) => void;
}

function PriceInput({ title, value, onChange }: Props): JSX.Element {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const numericValue = +e.target.value.replace(/,/gi, '');
    if (value === numericValue) return;
    onChange(numericValue);
  };

  return (
    <Container>
      <Title>{title}</Title>
      <InputWrapper>
        <NumericFormat
          value={value}
          onChange={handleChange}
          thousandSeparator=","
          allowNegative={false}
          decimalScale={8}
          css={inputStyle}
        />
      </InputWrapper>
    </Container>
  );
}

export default PriceInput;

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 300px;
  height: 50px;
  border: 1px solid ${themeColor.gray400};
`;

const Title = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 12px;
  background-color: ${themeColor.gray100};
  border-right: 1px solid ${themeColor.gray400};
  font-weight: 600;
`;

const InputWrapper = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 12px;
  background-color: #fff;
`;

const inputStyle = css`
  width: 100%;
  font-size: 14px;
  text-align: right;
`;
