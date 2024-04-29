import styled from "@emotion/styled";
import { PropsWithChildren, Suspense } from "react";
import { LineWave } from "react-loader-spinner";

const BaseSuspense = ({ children }: PropsWithChildren) => {
  return (
    <Suspense fallback={
      <Fallback>
        <LineWave
          visible={true}
          height="100"
          width="100"
          color="#4fa94d"
          ariaLabel="line-wave-loading"
        />
      </Fallback>}
    >
      {children}
    </Suspense>
  )
}

export default BaseSuspense;

const Fallback = styled.div`
  width: 100%;
  min-height: 240px;
  display: flex;
  justify-content: center;
  align-items: center;
`;