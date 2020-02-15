import React, { useState } from 'react';
import { withRouter, Link } from 'react-router-dom';

import { Icon, Menu, Layout } from 'antd';

const { Sider } = Layout;
const { SubMenu } = Menu;

const AppNav = withRouter(props => {
  const [collapsed, setCollapsed] = useState(false);
  const { location } = props;
  return (
    <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed}>
      <div className="logo" />
      <Menu
        theme="dark"
        defaultSelectedKeys="/"
        mode="inline"
        selectedKeys={[location.pathname]}
      >
        <Menu.Item key="/">
          <Link to="/">
            <span>
              <Icon type="user" />
              <span>Home</span>
            </span>
          </Link>
        </Menu.Item>
        <Menu.Item key="/login">
          <Link to="/login">
            <span>
              <Icon type="user" />
              <span>Login</span>
            </span>
          </Link>
        </Menu.Item>
        <SubMenu
          key="sub1"
          title={
            <span>
              <Icon type="user" />
              <span>Posts</span>
            </span>
          }
        >
          <Menu.Item key="/posts">
            <Link to="/posts">All </Link>
          </Menu.Item>
          <Menu.Item key="/posts/new">
            <Link to="/posts/new">New </Link>
          </Menu.Item>
        </SubMenu>
        <Menu.Item key="/not-found">
          <Link to="/not-found">
            <span>
              <Icon type="user" />
              <span>404</span>
            </span>
          </Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
});

export default AppNav;
