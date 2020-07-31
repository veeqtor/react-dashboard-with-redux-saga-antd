import * as React from 'react';
import { Layout, Menu } from 'antd';
import { DesktopOutlined, UserOutlined } from '@ant-design/icons';
import styled from 'styled-components';

const { Sider } = Layout;
const { SubMenu } = Menu;

interface IDashboardSideBarProps {
  currentRoute: string;
  changePageHandler: Function;
}

const SideBar = (props: IDashboardSideBarProps): React.ReactElement => {
  const { changePageHandler, currentRoute } = props;
  const [collapsed, setCollapsed] = React.useState(false);

  const onCollapse = (): void => {
    setCollapsed(!collapsed);
  };
  console.log(currentRoute);
  const sidebarMenuItems = [
    {
      title: 'Overview',
      route: 'overview',
      icon: DesktopOutlined,
      active: currentRoute === 'overview',
    },
  ];

  const subMenuItems = [
    {
      mainTitle: 'Sessions',
      menus: [
        {
          title: 'All Sessions',
          route: 'sessions/all',
          icon: DesktopOutlined,
          active: currentRoute === 'sessions/all',
        },
        {
          title: 'My Sessions',
          route: 'sessions',
          icon: DesktopOutlined,
          active: currentRoute === 'sessions',
        },
      ],
    },
  ];

  return (
    <Sider width={240} collapsible collapsed={collapsed} onCollapse={onCollapse}>
      <SideBar.Logo />
      <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
        {sidebarMenuItems.map((item, i) => {
          const Icon = item.icon;
          return (
            <Menu.Item
              key={i}
              icon={<Icon />}
              onClick={(): void => {
                changePageHandler(item.route);
              }}
            >
              {item.title}
            </Menu.Item>
          );
        })}

        {subMenuItems.map((item, i) => {
          return (
            <SubMenu key={i} icon={<UserOutlined />} title={item.mainTitle}>
              {item.menus.map((menu, i) => {
                return (
                  <Menu.Item
                    key={i}
                    onClick={(): void => {
                      changePageHandler(menu.route);
                    }}
                  >
                    {menu.title}
                  </Menu.Item>
                );
              })}
            </SubMenu>
          );
        })}
      </Menu>
    </Sider>
  );
};

SideBar.Logo = styled.div`
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
`;

export default SideBar;
