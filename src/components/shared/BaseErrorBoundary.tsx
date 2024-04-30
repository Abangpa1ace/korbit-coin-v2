import { AxiosErrorData } from '@/types/api';
import { QueryErrorResetBoundary } from '@tanstack/react-query';
import { PropsWithChildren } from 'react';
import { ErrorBoundary, FallbackProps } from 'react-error-boundary';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { themeColor } from '@/themes/variable';

interface Props {
  error: AxiosErrorData;
  resetErrorBoundary: FallbackProps['resetErrorBoundary'];
}

export function ErrorBoundaryFallback({ error, resetErrorBoundary }: Props) {
  const { httpCode, message } = error;
  return (
    <FallbackOverlay>
      <FallbackDescription>
        {httpCode ? `API Error ${httpCode}\n\n` : 'Development Error' + `: \n`}
        {message || '예상치 못한 에러가 발생했어요'}
      </FallbackDescription>
      <ResetButton onClick={resetErrorBoundary}>다시 불러오기</ResetButton>
    </FallbackOverlay>
  );
}

const FallbackOverlay = styled.div`
  width: 100%;
  min-height: 280px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const FallbackDescription = styled.p`
  margin-top: 12px;
  font-size: 16px;
  white-space: pre-line;
  text-align: center;
`;

const ResetButton = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: auto;
  height: 32px;
  margin-top: 24px;
  font-size: 15px;
  background-color: ${themeColor.gray200};
  padding: 8px 12px;
  border-radius: 4px;
  cursor: pointer;
`;

function BaseErrorBoundary({ children }: PropsWithChildren): JSX.Element {
  return (
    <QueryErrorResetBoundary>
      {({ reset }) => (
        <ErrorBoundary onReset={reset} fallbackRender={ErrorBoundaryFallback}>
          {children}
        </ErrorBoundary>
      )}
    </QueryErrorResetBoundary>
  );
}

export default BaseErrorBoundary;
