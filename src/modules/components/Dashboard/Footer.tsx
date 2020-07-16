import * as React from 'react';
import { Layout } from 'antd';
import styled from 'styled-components';

const { Footer } = Layout;

const DashboardFooter = (): React.ReactElement => {
  return <DashboardFooter.Footer>Ant Design ©2018 Created by Ant UED</DashboardFooter.Footer>;
};

DashboardFooter.Footer = styled(Footer)`
  padding: 10px;
  background: #fff;
  text-align: right;
`;

export default DashboardFooter;
