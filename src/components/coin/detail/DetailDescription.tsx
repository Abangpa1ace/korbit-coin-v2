import useGetCoinDetail from '@/hooks/apis/useGetCoinDetail';
import { themeColor } from '@/themes/variable';
import styled from '@emotion/styled';
import { useState } from 'react';

function DetailDescription() {
  const {
    data: { description },
  } = useGetCoinDetail();
  const [isUnfold, setIsUnfold] = useState<boolean>(false);
  const descriptionData = description.ko || description.en;

  if (!descriptionData) return null;

  return (
    <Container>
      <ToggleUnfoldButton onClick={() => setIsUnfold(!isUnfold)}>
        설명보기 {!isUnfold ? '▼' : '▲'}
      </ToggleUnfoldButton>
      {isUnfold && <Desciprtion>{descriptionData}</Desciprtion>}
    </Container>
  );
}

export default DetailDescription;

const Container = styled.div``;

const ToggleUnfoldButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40px;
  border-bottom: 1px solid ${themeColor.gray200};
  font-size: 13px;
  cursor: pointer;
`;

const Desciprtion = styled.p`
  padding: 28px 0;
  font-size: 13px;
  line-height: 18px;
  color: ${themeColor.gray900};
  white-space: pre-line;
`;
