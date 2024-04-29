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
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;