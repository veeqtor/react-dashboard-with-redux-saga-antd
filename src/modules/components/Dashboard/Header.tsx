import * as React from 'react';
import { Layout } from 'antd';
import styled from 'styled-components';

const { Header } = Layout;

const DashboardHeader = (): React.ReactElement => {
  return <DashboardHeader.Header />;
};

DashboardHeader.Header = styled(Header)`
  padding: 0;
  background: #fff;
`;

export default DashboardHeader;
