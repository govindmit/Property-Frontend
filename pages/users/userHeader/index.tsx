import React, { useEffect, useState } from "react";
import FavoriteComp from "../favorite";
import { MenuProps, Space } from "antd";
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
  },[])

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
            <Space wrap>
            <Menu.Item className={activeTab === "favorite" ? "aa active" : ""} onClick={handleClick} style={{marginLeft:'10px'}}>Favorite</Menu.Item>
            <Menu.Item  style={{marginLeft:'10px'}}>Saved Search</Menu.Item>
            <Menu.Item style={{marginLeft:'10px'}}>Open House Shedule</Menu.Item>
            <Menu.Item style={{marginLeft:'10px'}}>Home Tours</Menu.Item>
            <Menu.Item style={{marginLeft:'10px'}}>Transaction Updates</Menu.Item>
            <Menu.Item style={{marginLeft:'10px'}} >Your voucher</Menu.Item>
            <Menu.Item style={{marginLeft:'10px'}}>Review</Menu.Item>
            <Menu.Item style={{marginLeft:'10px'}}>Email Setting</Menu.Item>
            <Menu.Item style={{marginLeft:'10px'}} className={activeTab === "Account" ? "aa active" : ""} onClick={handleAccSetting}>Account</Menu.Item>
            </Space>
          </Menu>
        </Header>
      </Layout>

  
    </div>
  );
};

export default UserHeader;
