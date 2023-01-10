import React, { Component, useState } from "react";
import { Drawer, Button, Space } from "antd";
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
  const roleIdentifier=((typeof window !== 'undefined' && window?.localStorage?.getItem("role") === '1') ?'menuBar adminlogin':'menuBar')
  const role=typeof window !== 'undefined' && window?.localStorage?.getItem("role");

  return (
    <div>
      <nav className={roleIdentifier}>
{
  role&& role==="1"?
 ""
  :
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
        }
        <div className="menuCon">
          <div className="leftMenu">
            <LeftMenu />
          </div>
          <div className="rightMenu">
            <RightMenu />
          </div>
          <Button className="barsMenu" type="default" onClick={showDrawer}>
            <span className="barsBtn"></span>
          </Button>
          {/* <Drawer
            title="Basic Drawer"
            placement="right"
            closable={false}
            onClose={onClose}
            open={visible}
          >
            <LeftMenu />
            <RightMenu />
          </Drawer> */}

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
