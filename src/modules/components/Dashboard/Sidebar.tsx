import * as React from 'react';
import { Layout, Menu } from 'antd';
import { DesktopOutlined, LogoutOutlined, UserOutlined } from '@ant-design/icons';
import styled from 'styled-components';

import { colors } from '../../../styles/variables.style';

const { Sider } = Layout;

interface IDashboardSideBarProps {
  changePageHandler: Function;
  collapsed: boolean;
  collapsedWidth: number;
  handleOnBreakpoint: (broken: boolean) => void;
}

const SideBar = (props: IDashboardSideBarProps): React.ReactElement => {
  const { changePageHandler, collapsed, handleOnBreakpoint, collapsedWidth } = props;
  const [currentRoute, setCurrentRoute] = React.useState('overview');

  const logout = (): void => {
    console.log('Logged Out');
  };

  React.useEffect(() => {
    const currentView = window.location.href
      .replace(new RegExp(`${window.location.origin}/|/$`, 'g'), '')
      .trim()
      .split('/')[1];
    setCurrentRoute(currentView);
  }, [currentRoute]);

  const sidebarMenuItems = [
    {
      title: 'Overview',
      route: 'overview',
      icon: DesktopOutlined,
      active: currentRoute === 'overview' || '',
    },
    {
      title: 'Profile',
      route: 'profile',
      icon: UserOutlined,
      active: currentRoute === 'profile' || '',
    },
  ];

  return (
    <SideBar.Wrapper
      width={240}
      collapsible
      trigger={null}
      collapsed={collapsed}
      breakpoint="lg"
      collapsedWidth={collapsedWidth}
      onBreakpoint={handleOnBreakpoint}
    >
      <SideBar.Logo />
      <SideBar.MenuWrapper>
        <SideBar.Menu defaultSelectedKeys={[currentRoute]} mode="inline">
          {sidebarMenuItems.map((item, i) => {
            const Icon = item.icon;
            return (
              <SideBar.MenuItem
                key={i}
                icon={<Icon />}
                onClick={(): void => {
                  changePageHandler(item.route);
                }}
                currentroute={item.active.toString()}
              >
                <span className="sidebar-text">
                  {item.active} {item.title}
                </span>
              </SideBar.MenuItem>
            );
          })}
        </SideBar.Menu>

        <SideBar.Menu mode="inline">
          <SideBar.MenuItem key="logout" onClick={logout}>
            <LogoutOutlined />
            <span className="sidebar-text">Log Out</span>
          </SideBar.MenuItem>
        </SideBar.Menu>
      </SideBar.MenuWrapper>
    </SideBar.Wrapper>
  );
};

SideBar.Wrapper = styled(Sider)`
  background: ${colors.DARKER_GRAY};
`;

SideBar.MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 89vh;
`;

SideBar.Logo = styled.div`
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
`;

SideBar.Menu = styled(Menu)`
  border-right: unset;
  & :hover {
    color: ${colors.WHITE};
    background: ${colors.BLACK};
  }

  & .ant-menu-item {
    padding-top: 0.5em;
    padding-bottom: 0.5em;
    height: 55px;

    &::after {
      border-right: unset;
    }
  }

  & .ant-menu-item-selected {
    color: ${colors.WHITE};
    background-color: ${colors.BLACK} !important;
  }

  & .sidebar-text {
    color: ${colors.WHITE};
  }
`;

SideBar.MenuItem = styled(Menu.Item)<{ currentroute?: string }>`
  ${({ currentroute }): string =>
    !!currentroute
      ? ` border-right: 2px solid ${colors.PRIMARY_HOVER};
          background: ${colors.BLACK};
          `
      : ''}
`;

export default React.memo(SideBar);
