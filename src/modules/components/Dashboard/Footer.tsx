import * as React from 'react';
import { Layout } from 'antd';
import styled from 'styled-components';
import { colors, fontSize } from '../../../styles/variables.style';

const { Footer } = Layout;

const DashboardFooter = (): React.ReactElement => {
  const year = new Date();
  return (
    <DashboardFooter.Footer>
      ©{year.getFullYear()} Template | Terms of services | Privacy policy, all rights reserved.
    </DashboardFooter.Footer>
  );
};

DashboardFooter.Footer = styled(Footer)`
  padding: 10px;
  border-top: 1px solid ${colors.DARKER_GRAY};
  background: ${colors.BLACK};
  text-align: right;
  font-size: ${fontSize.xsm};
`;

export default DashboardFooter;
