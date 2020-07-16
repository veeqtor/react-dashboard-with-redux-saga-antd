import * as React from 'react';
import { Layout, Menu } from 'antd';
import { DesktopOutlined, UserOutlined } from '@ant-design/icons';
import styled from 'styled-components';

const { Sider } = Layout;
// const { SubMenu } = Menu;

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

  const sidebarMenuItems = [
    {
      title: 'Overview',
      route: 'overview',
      icon: DesktopOutlined,
      active: currentRoute === 'overview',
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
        {/* <SubMenu key="sub1" icon={<UserOutlined />} title="User">
          <Menu.Item key="3">Tom</Menu.Item>
          <Menu.Item key="4">Bill</Menu.Item>
          <Menu.Item key="5">Alex</Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
          <Menu.Item key="6">Team 1</Menu.Item>
          <Menu.Item key="8">Team 2</Menu.Item>
        </SubMenu> */}
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
