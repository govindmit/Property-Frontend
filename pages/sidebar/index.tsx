import React, { useEffect, useState } from "react";
import { Layout, Menu, theme } from "antd";
import { useRouter } from "next/router";
import logo from "../../public/assets/aa.png";
import Image from "next/image";

const { Header, Content, Footer, Sider } = Layout;

const Sidebar: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const location = useRouter();
  const getPath = location.pathname;
  const [current, setCurrent] = useState(location.pathname);

  function handleClick(e: any) {
    location.push(e.key);
  }

  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={(broken) => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
    >
      <div className="logo cssbide" />
      <div className="" style={{ position: "absolute", top: "-17%" ,width:"100%"}}>
        <div className="logo adminsideslider">
          <Image
            src={logo.src}
            alt="imageee"
            style={{ cursor: "pointer" }}
            width={30}
            height={30}
          />
          <p className="csslink">Propter</p>
        </div>
        <Menu
          onClick={(e) => handleClick(e)}
          mode="vertical"
          selectedKeys={[current]}
        >
          <Menu.Item className="sidebarcsstop" key="#">
            &emsp; <span className="letterfonts"> Dashboard</span>{" "}
          </Menu.Item>

          <Menu.Item key={!getPath.includes("user") ? "/admin/user" : getPath}>
            &emsp;<span className="letterfonts"> User Listing</span>
          </Menu.Item>

          <Menu.Item key="#">
            &emsp; <span className="letterfonts"> Brokerage Listing</span>{" "}
          </Menu.Item>

          <Menu.Item key="#">
            &emsp; <span className="letterfonts"> Agent Listing</span>{" "}
          </Menu.Item>

          <Menu.Item
            key={!getPath.includes("landlord") ? "/admin/landlord" : getPath}
          >
            &emsp; <span className="letterfonts"> Landlord Listing</span>{" "}
          </Menu.Item>
        </Menu>
      </div>
    </Sider>
  );
};

export default Sidebar;
