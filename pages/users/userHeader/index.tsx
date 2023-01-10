import React, { useEffect, useState } from "react";
import FavoriteComp from "../favorite";
import type { MenuProps } from "antd";
import { Layout, Menu, theme } from "antd";
import Router from "next/router";
import { Tabs } from "antd";
import type { TabsProps } from "antd";
import Link from "next/link";
import MyProfile from "../myProfile";

const { Header, Content, Footer, Sider } = Layout;



const UserHeader = () => {

  const [activeTab,setActiveTab] = useState('')

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  useEffect(()=>{
    Router.pathname.includes("/users/favorite") ? setActiveTab('favorite') :  Router.pathname.includes("/users/myProfile") ? setActiveTab('Account'):''
  })

  const handleClick = () => {
   
    Router.replace("/users/favorite");
  };
  const handleAccSetting = () => {
 
    Router.push("/users/myProfile");
  };

  return (
    <div>
      <Layout style={{backgroundClip:'white'}} className='userLayoutCls'>
        <Header style={{backgroundClip:'white'}} className='userHeaderCls'>
          <div className="logo" />
          <Menu
            style={{backgroundClip:'white'}}
            theme="light"
            mode="horizontal"
            defaultSelectedKeys={["2"]}
            className='userMenuCls'
          >
            <Menu.Item className={activeTab === "favorite" ? "aa active" : ""} onClick={handleClick} >Favorite</Menu.Item>
            <Menu.Item  >Saved Search</Menu.Item>
            <Menu.Item >Open House Shedule</Menu.Item>
            <Menu.Item >Home Tours</Menu.Item>
            <Menu.Item >Transaction Updates</Menu.Item>
            <Menu.Item >Your voucher</Menu.Item>
            <Menu.Item >Review</Menu.Item>
            <Menu.Item >Email Setting</Menu.Item>
            <Menu.Item  className={activeTab === "Account" ? "aa active" : ""} onClick={handleAccSetting}>Account</Menu.Item>
          </Menu>
        </Header>
      </Layout>

  
    </div>
  );
};

export default UserHeader;
