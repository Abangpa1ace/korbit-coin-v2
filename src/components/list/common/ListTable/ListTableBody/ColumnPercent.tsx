import { themeColor } from '@/themes/variable';
import truncateRational from '@/utils/truncateRational';
import styled from '@emotion/styled';

interface Props {
  percent: number | null;
}

function ColumnPercent({ percent }: Props): JSX.Element {
  return (
    <Percent isNegative={Number(percent) < 0}>
      {truncateRational({ type: 'round', value: percent, remainCount: 1 })}%
    </Percent>
  )
}

export default ColumnPercent;

const Percent = styled.p<{ isNegative: boolean; }>`
  color: ${({ isNegative }) => themeColor[isNegative ? 'red200' : 'blue200']};
  font-size: 13px;
  font-weight: 600;
  letter-spacing: -0.02px;
`