import React from 'react';
import { Layout, Breadcrumb } from 'antd';
import Nav from './nav';

const { Header, Content, Footer } = Layout;
const AppLayout = props => {
  const { children } = props;

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Nav />
      <Layout>
        <Header style={{ background: '#fff', padding: 0 }} />
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div className="content">{children}</div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default AppLayout;
