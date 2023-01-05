import React, { Component, useEffect } from "react";
import { Button, Menu, Avatar } from "antd";
import Router, { useRouter } from "next/router";
import { UserOutlined } from "@ant-design/icons";
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const RightMenu = () => {
  const handleLogin = () => {
    Router.push("/login");
  };
  const token = {
    access: typeof window !== "undefined" ? window.localStorage.getItem('token') : null,
    isAuthenticated: null,
    user: null
};
  const handleLogout = () => {
    localStorage.removeItem("token");
    Router.push("/login");
  };
  return (
    <div style={{ marginTop: "10px" }}>
      <Menu mode="horizontal">
        {/* <Menu.Item key="mail">
          <a href="">Signin</a>
          </Menu.Item>
          <Menu.Item key="app">
          <a href="">Signup</a>
        </Menu.Item> */}
        {token && token?.access !== null ? (
          <Button
            style={{ backgroundColor: "orangered", color: "white" }}
            onClick={handleLogout}
          >
            Log out
          </Button>
        ) : (
          // <Avatar onClick={handleProfile} icon={<UserOutlined />} style={{ cursor: 'pointer' }} />
          <Button
            style={{ backgroundColor: "orangered", color: "white" }}
            onClick={handleLogin}
          >
            Login Or SignUp
          </Button>
        )}
      </Menu>
    </div>
  );
};
export default RightMenu;
