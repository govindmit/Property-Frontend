import React, { Component } from 'react';
import { Button, Menu, Avatar } from 'antd';
import Router, { useRouter } from 'next/router';
import { UserOutlined } from '@ant-design/icons';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const RightMenu = () => {
  const router = useRouter();

  const handleLogin = () => {
    Router.push('/login')
  }
  const handleProfile = () => {
    Router.push('/Users/MyProfile')
  }
  let path = router.pathname
  return (
    <div style={{ marginTop: '10px' }}>

      <Menu mode="horizontal">
        {/* <Menu.Item key="mail">
          <a href="">Signin</a>
          </Menu.Item>
          <Menu.Item key="app">
          <a href="">Signup</a>
        </Menu.Item> */}
        
        {
          path && path?.slice(0, 7) === "/Users/" ?
            <Avatar onClick={handleProfile} icon={<UserOutlined />} style={{ cursor: 'pointer' }} />
            :
            <Button style={{ backgroundColor: 'orangered', color: 'white' }} onClick={handleLogin}>Login Or SignUp</Button>
        }
      </Menu>
    </div>
  );
}
export default RightMenu;