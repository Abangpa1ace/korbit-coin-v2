import styled from "@emotion/styled";

interface Props {
  x?: number;
  y?: number;
}

const Spacer = styled.span<Props>`
  display: ${({ x }) => x ? 'inline-block' : 'block'};
  margin-top: ${({ y }) => `${y || 0}px`};
  margin-left: ${({ x }) => `${x || 0}px`};
`;

export default Spacer;