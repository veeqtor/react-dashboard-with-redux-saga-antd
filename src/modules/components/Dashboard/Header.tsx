import * as React from 'react';
import { Layout } from 'antd';
import styled from 'styled-components';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import { colors } from '../../../styles/variables.style';

const { Header } = Layout;

interface IHeaderProps {
  collapsed: boolean;
  handleSideBarToggle: (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void;
}

const DashboardHeader = ({ collapsed, handleSideBarToggle }: IHeaderProps): React.ReactElement => {
  return (
    <DashboardHeader.Header>
      <DashboardHeader.HeaderWrapper>
        {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
          className: 'trigger',
          onClick: handleSideBarToggle,
        })}
      </DashboardHeader.HeaderWrapper>
    </DashboardHeader.Header>
  );
};

DashboardHeader.Header = styled(Header)`
  padding: 0;
  border-bottom: 1px solid ${colors.DARKER_GRAY};
  background: ${colors.BLACK};
`;
DashboardHeader.HeaderWrapper = styled.div`
  & .trigger {
    font-size: 24px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color 0.3s;
  }
`;

export default DashboardHeader;
