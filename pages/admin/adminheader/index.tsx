import React, { Component, useEffect } from "react";
import { Button, Menu, Avatar ,Layout} from "antd";
import Router, { useRouter } from "next/router";
import { UserOutlined } from "@ant-design/icons";
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const { Header, Sider, Content } = Layout;

const AdminHeader = () => {
  const handleLogin = () => {
    Router.push("/login");
  };
  const token = {
    access:
      typeof window !== "undefined"
        ? window.localStorage.getItem("token")
        : null,
    isAuthenticated: null,
    user: null,
  };
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    Router.push("/login");
  };
  return (
    <Header>
    <div className="adminheadercss">
        <Button
          style={{ backgroundColor: "orangered", color: "white" }}
          onClick={token && token?.access !== null ? handleLogout : handleLogin}
          >
          {token && token?.access !== null ? "Logout" : "Login Or SignUp"}
        </Button>
    </div>
          </Header>
        
  );
};
export default AdminHeader;
