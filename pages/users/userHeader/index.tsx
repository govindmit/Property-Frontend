import React from "react";
import FavoriteComp from "../favorite";
import type { MenuProps } from "antd";
import {     Layout, Menu, theme } from "antd";
import  Router from "next/router";

const { Header, Content, Footer, Sider } = Layout;



const UserHeader = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const handleClick =()=>{
    Router.push('/users/favorite')
  }
  const handleAccSetting =()=>{
    Router.push(`/users/userProfile/edit/${1}`)
  }
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
            <Menu.Item onClick={handleClick} className='userMenuItem'>Favorites</Menu.Item>
            <Menu.Item className='userMenuItem'>Saved Search</Menu.Item>
            <Menu.Item className='userMenuItem'>Open House Shedule</Menu.Item>
            <Menu.Item className='userMenuItem'>Home Tours</Menu.Item>
            <Menu.Item className='userMenuItem'>Transaction Updates</Menu.Item>
            <Menu.Item className='userMenuItem'>Your voucher</Menu.Item>
            <Menu.Item className='userMenuItem'>Review</Menu.Item>
            <Menu.Item className='userMenuItem'>Email Setting</Menu.Item>
            <Menu.Item onClick={handleAccSetting} className='userMenuItem'>Account Setting</Menu.Item>
          </Menu>
        </Header>
       
      </Layout>
    </div>
  );
};

export default UserHeader;
