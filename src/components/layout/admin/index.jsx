import { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";


import { Layout, Menu, Button, theme } from "antd";

const { Header, Sider, Content } = Layout;

const AdminLayout = () => {
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  console.log(location);
  return (
    <Layout className="admin-layout">
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <Menu style={{ height: 800}}
        theme="dark"
        mode="inline"
        defaultSelectedKeys={[location.pathname]}
        items={[
          {
            key: "/dashboard",
            icon: <UserOutlined />,
            label: <Link to="/dashboard">Dashboard</Link>,
          },
          {
            key: "/categories",
            icon: <VideoCameraOutlined />,
            label: <Link to="/categories">Categories</Link>,
          },
          {
            key: "/users",
            icon: <UploadOutlined />,
            label: <Link to="/users">Users</Link>,
          },
        ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};
export default AdminLayout;
