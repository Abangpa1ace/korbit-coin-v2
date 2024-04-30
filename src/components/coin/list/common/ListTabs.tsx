import useListTab from '@/hooks/list/useListTab';
import { themeColor } from '@/themes/variable';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Children } from 'react';

function ListTabs(): JSX.Element {
  const { tabs, activeTab, handleChangeTab } = useListTab();

  return (
    <Tabs>
      {Children.toArray(tabs.map(([tab, label]) => (
        <TabItem isActive={tab === activeTab} onClick={() => handleChangeTab(tab)}>
          {label}
        </TabItem>
      )))}
    </Tabs>
  )
}

export default ListTabs

const Tabs = styled.ul`
  display: flex;
  align-items: center;
  width: 100%;
  height: 48px;
`

const TabItem = styled.li<{ isActive: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: ${themeColor.gray60};
  color: ${themeColor.gray600};
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;

  &:first-of-type {
    border-radius: 4px 0 0 4px;
  }
  &:last-of-type {
    border-radius: 0 4px 4px 0;
  }

  ${({ isActive }) => isActive && css`
    background-color: white;
    color: black;
    box-shadow: 1px 1px 5px 3px ${themeColor.gray200};
    z-index: 1;
  `};
`;