import React, { useState, useEffect } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import 'antd/dist/antd.css';
import './App.css';

import Chat from 'components/Chat';

const { Header, Content, Footer } = Layout;
function App() {
  return (
    <>
     <Layout className="layout">

      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
          <Menu.Item style={{fontWeight: 'bold'}}>JUST CHAT</Menu.Item>
        </Menu>
      </Header>

      <Content style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>CHAT</Breadcrumb.Item>
          {/* <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item> */}
        </Breadcrumb>
        <div className="site-layout-content">
          <Chat />
        </div>
      </Content>

      <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>

    </Layout>
    </>
  );
}

export default App;
