import React, { Component, useEffect, useState } from "react";
import { Drawer, Button, Space, Input } from "antd";
import LeftMenu from "./left";
import RightMenu from "./right";
import logo from "../../../public/assets/aa.png";
import { Image } from "antd";
import Router from "next/router";
import Link from "next/link";
import jwt from "jsonwebtoken";

const { Search } = Input;
const Header: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [role, setRole] = useState();

  useEffect(() => {
    const token: any = localStorage.getItem("token");
    const decode: any = jwt.decode(token);
    setRole(decode?.data?.role?.title);
  },[]);
  
  interface valueInterface {
    visible: Boolean;
    current: String;
  }

  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  const handleClick = () => {
    Router.push("/");
  };
  return (
    <div>
      <nav className="menuBar">
        <div className="logo" style={{ display: "flex" }}>
          <Image
            className="logoCls"
            src={logo.src}
            preview={false}
            alt="imageee"
            style={{ cursor: "pointer" }}
            onClick={handleClick}
          />
          <Link href="/">Propter</Link>{" "}
          {role === "User" ? (
            <Search
              className="searchCls"
              placeholder="Bussiness Bay"
              allowClear
            />
          ) : (
            ""
          )}
        </div>

        <div className="menuCon">
          {role === "Admin" ? (
            ""
          ) : (
            <div className="leftMenu">
              <LeftMenu />
            </div>
          )}
          <div className="rightMenu">
            <RightMenu />
          </div>
          <Button className="barsMenu" type="default" onClick={showDrawer}>
            <span className="barsBtn"></span>
          </Button>
          <Drawer
            title="Drawer with extra actions"
            width={500}
            onClose={onClose}
            open={visible}
            extra={
              <Space>
                <Button onClick={onClose}>Cancel</Button>
              </Space>
            }
          >
            <LeftMenu />
            <RightMenu />
          </Drawer>
        </div>
      </nav>
      
    </div>
  );
};

export default Header;
