/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react';
import { Layout, Breadcrumb } from 'antd';
import styled from 'styled-components';

import DashboardHeader from '../components/Dashboard/Header';
import DashboardFooter from '../components/Dashboard/Footer';
import SideBar from '../components/Dashboard/Sidebar';
import SEO from '../components/SEO';

export interface IDashboardLayoutProps {
  title: string;
  children: React.ReactNode;
  changePageHandler: Function;
  currentRoute: string;
}

const { Content } = Layout;

const DashboardLayout = (props: IDashboardLayoutProps): React.ReactElement => {
  const { title, children, changePageHandler, currentRoute } = props;
  return (
    <>
      <SEO title={title} />
      <DashboardLayout.Wrapper>
        <SideBar changePageHandler={changePageHandler} currentRoute={currentRoute} />
        <Layout>
          <DashboardHeader />
          <DashboardLayout.ContentWrapper>
            <DashboardLayout.Breadcrumb separator=">">
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </DashboardLayout.Breadcrumb>
            <DashboardLayout.Content>{children}</DashboardLayout.Content>
          </DashboardLayout.ContentWrapper>
          <DashboardFooter />
        </Layout>
      </DashboardLayout.Wrapper>
    </>
  );
};

DashboardLayout.Wrapper = styled(Layout)`
  min-height: 100vh;
`;

DashboardLayout.Breadcrumb = styled(Breadcrumb)`
  margin: 1em 0;
`;

DashboardLayout.ContentWrapper = styled(Content)`
  margin: 0 1em;
  padding: 1em;
`;

DashboardLayout.Content = styled(Content)`
  padding: 1em;
  background: #fff;
  min-height: 500px;
`;

export default DashboardLayout;
