import React, { Component } from 'react';
import { Menu } from 'antd';
import Link from 'next/link';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
class LeftMenu extends Component {
  render() {
    return (
  <>
   <Menu mode="horizontal">
       <Menu.Item key="buy">
          <Link href="#">Buy</Link>
        </Menu.Item>
        <Menu.Item key="rent">
          <Link href="#">Rent</Link>
        </Menu.Item>
        <Menu.Item key="landloard">
          <Link href="/landloard">Landloard</Link>
        </Menu.Item>
        <Menu.Item key="brokerage">
          <Link href="/brokerage">Brokerage</Link>
        </Menu.Item>
        <Menu.Item key="brokerage">
          <Link href="/brokerage">Brokerage1</Link>
        </Menu.Item>
      </Menu>
  </>
    );
  }
}
export default LeftMenu;