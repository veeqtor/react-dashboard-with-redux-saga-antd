/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react';
import { Layout } from 'antd';
import styled from 'styled-components';

import DashboardHeader from '../components/Dashboard/Header';
import DashboardFooter from '../components/Dashboard/Footer';
import SideBar from '../components/Dashboard/Sidebar';
import SEO from '../components/SEO';
import { colors } from '../../styles/variables.style';

export interface IDashboardLayoutProps {
  title: string;
  children: React.ReactNode;
  changePageHandler: Function;
}

const { Content } = Layout;

const DashboardLayout = (props: IDashboardLayoutProps): React.ReactElement => {
  const { title, children, changePageHandler } = props;
  const [collapsed, setCollapsed] = React.useState(false);
  const [collapsedWidth, setCollapsedWidth] = React.useState();

  const onCollapse = (): void => {
    setCollapsed(!collapsed);
  };

  const handleOnBreakpoint = (broken: boolean): void => {
    if (broken) {
      setCollapsed(true);
      setCollapsedWidth(0);
    } else {
      setCollapsedWidth(undefined);
    }
  };

  return (
    <>
      <SEO title={title} />
      <DashboardLayout.Wrapper>
        <SideBar
          changePageHandler={changePageHandler}
          collapsed={collapsed}
          handleOnBreakpoint={handleOnBreakpoint}
          collapsedWidth={collapsedWidth}
        />
        <DashboardLayout.MainWrapper>
          <DashboardHeader collapsed={collapsed} handleSideBarToggle={onCollapse} />
          <DashboardLayout.Content>{children}</DashboardLayout.Content>
          <DashboardFooter />
        </DashboardLayout.MainWrapper>
      </DashboardLayout.Wrapper>
    </>
  );
};

DashboardLayout.Wrapper = styled(Layout)`
  min-height: 100vh;
`;

DashboardLayout.Content = styled(Content)`
  margin: 0 1em;
  padding: 1em;
  min-height: 500px;
`;

DashboardLayout.MainWrapper = styled(Layout)`
  background: ${colors.BLACK};
  color: ${colors.WHITE};
`;

export default DashboardLayout;
