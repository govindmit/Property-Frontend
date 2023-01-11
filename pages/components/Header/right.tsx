import React, { Component, useEffect, useState } from "react";
import { Button, Menu, Avatar, Popconfirm } from "antd";
import Router, { useRouter } from "next/router";
import { UserOutlined, CaretDownOutlined, BellFilled } from "@ant-design/icons";
import jwt from "jsonwebtoken";

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const RightMenu = () => {
  const [name, setName] = useState();

  useEffect(() => {
    const token: any = localStorage.getItem("token");
    const decode: any = jwt.decode(token);
    setName(decode?.data?.firstName);
  }, []);

  const confirm = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    Router.push("/login");
  };

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

  const handleAvtar = () => {
    Router.push("/users/myProfile");
  };

  return (
    <div style={{ marginTop: "0px" }}>
      <Menu mode="horizontal">
        {/* <Menu.Item key="mail">
          <a href="">Signin</a>
          </Menu.Item>
          <Menu.Item key="app">
          <a href="">Signup</a>
        </Menu.Item> */}

        {/* <Button
          style={{ backgroundColor: "orangered", color: "white" }}
          onClick={token && token?.access !== null ? handleLogout : handleLogin}
        >
          {token && token?.access !== null ? "Logout" : "Login Or Signup"}
        </Button> */}

        {token && token?.access !== null ? (
          <>
            <BellFilled style={{ marginTop: "13px", fontSize: "large" }} />
            &emsp;&emsp;<span>{name}</span>
            <Popconfirm
              title="Are You sure want to Logout"
              onConfirm={confirm}
              okText="Yes"
              cancelText="No"
            >
              <CaretDownOutlined className="arroDownCls" />
            </Popconfirm>
            <Avatar
              // onClick={handleAvtar}
              icon={<UserOutlined />}
              style={{ marginTop: "5px", marginLeft: "5px" }}
            />
          </>
        ) : (
          <Button
            style={{ backgroundColor: "orangered", color: "white" }}
            onClick={handleLogin}
          >
            Login Or Signup
          </Button>
        )}
      </Menu>
    </div>
  );
};
export default RightMenu;
