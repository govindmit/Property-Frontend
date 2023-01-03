import React, { Component } from 'react';
import { Button, Menu,Avatar } from 'antd';
import Router from 'next/router';
import { UserOutlined } from '@ant-design/icons';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

 const RightMenu =()=>   {
 const handleLogin=()=>{
   Router.push('/login')
  }
  const handleProfile =()=>{
    Router.push('/Users/MyProfile')
  }
    return (
        <div style={{marginTop:'10px'}}>

      <Menu mode="horizontal">
        {/* <Menu.Item key="mail">
          <a href="">Signin</a>
          </Menu.Item>
          <Menu.Item key="app">
          <a href="">Signup</a>
        </Menu.Item> */}

        <Button style={{backgroundColor:'orangered',color:'white'}} onClick={handleLogin}>Login Or SignUp</Button>
        {/* <Avatar onClick={handleProfile} icon={<UserOutlined />} style={{cursor:'pointer'}}/> */}
      </Menu>
        </div>
    );
  }
export default RightMenu;