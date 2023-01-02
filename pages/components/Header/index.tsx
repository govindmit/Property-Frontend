import React, { Component, useState } from "react";
import { Drawer, Button } from "antd";
import LeftMenu from "./left";
import RightMenu from "./right";
import logo from "../../../public/assets/logo.png";
import { Image } from "antd";

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

  return (
    <>
      <nav className="menuBar">
        <div className="logo">
          <Image src={logo.src}  preview={{ visible: false }} alt="imageee"/>
          <a href="">Propter</a>
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
