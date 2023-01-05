import React, { Component, useState } from "react";
import { Drawer, Button } from "antd";
import LeftMenu from "./left";
import RightMenu from "./right";
import logo from "../../../public/assets/aa.png";
import { Image } from "antd";
import Router from "next/router";
import Link from "next/link";

const Header: React.FC = () => {
  const [current, setCurrent] = useState("mail");
  const [visible, setVisible] = useState(false);

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
    <>
      <nav className="menuBar">
        <div className="logo">
          <Image
            src={logo.src}
            preview={false}
            alt="imageee"
            style={{ cursor: "pointer" }}
            onClick={handleClick}
          />
          <Link href="/">Propter</Link>
        </div>
        <div className="menuCon">
          <div className="leftMenu">
            <LeftMenu />
          </div>
          <div className="rightMenu">
            <RightMenu />
          </div>
          <Button className="barsMenu" type="primary" onClick={showDrawer}>
            <span className="barsBtn"></span>
          </Button>
          <Drawer
            title="Basic Drawer"
            placement="right"
            closable={false}
            onClose={onClose}
            visible={visible}
          >
            <LeftMenu />
            <RightMenu />
          </Drawer>
        </div>
      </nav>
    </>
  );
};

export default Header;
