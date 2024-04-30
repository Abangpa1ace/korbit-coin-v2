import { themeColor } from '@/themes/variable';
import truncateRational from '@/utils/truncateRational';
import { SerializedStyles } from '@emotion/react';
import styled from '@emotion/styled';

interface Props {
  percent: number | null;
  customStyle?: SerializedStyles;
}

function PercentText({ percent, customStyle }: Props): JSX.Element {
  return (
    <Percent isNegative={Number(percent) < 0} css={customStyle}>
      {truncateRational({ type: 'round', value: percent, remainCount: 1 })}%
    </Percent>
  );
}

export default PercentText;

const Percent = styled.p<{ isNegative: boolean }>`
  color: ${({ isNegative }) => themeColor[isNegative ? 'red200' : 'blue200']};
  font-size: 13px;
  font-weight: 600;
  letter-spacing: -0.02px;
`;
