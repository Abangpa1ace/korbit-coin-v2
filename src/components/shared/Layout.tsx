import { themeWidth } from '@/themes/variable';
import styled from '@emotion/styled';
import { PropsWithChildren } from 'react';
import { Toaster } from 'react-hot-toast';

function Layout({ children }: PropsWithChildren) {
  return (
    <Container>
      <Content>{children}</Content>
      <Toaster position="top-center" />
    </Container>
  );
}

export default Layout;

const Container = styled.div`
  min-height: 100vh;
  padding: 0 20px;
`;

const Content = styled.div`
  max-width: ${themeWidth.main};
  margin: 50px auto;
`;
