import React, { Component } from "react";
import { Menu } from "antd";
import Link from "next/link";
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
class LeftMenu extends Component {
  render() {
    return (
      <div>
        <Menu mode="horizontal" className="leftMenuCls">
          <Menu.Item key="buy" className="leftMenuItem">
            <Link href="#" className="leftMenuLinkCls">
              Buy
            </Link>
          </Menu.Item>
          <Menu.Item key="rent" className="leftMenuItem">
            <Link href="#" className="leftMenuLinkCls">
              Rent
            </Link>
          </Menu.Item>
          <Menu.Item key="landloard" className="leftMenuItem">
            <Link href="/landloard" className="leftMenuLinkCls">
              Landloard
            </Link>
          </Menu.Item>
          <Menu.Item key="brokerage" className="leftMenuItem">
            <Link href="/brokerage" className="leftMenuLinkCls">
              Brokerage
            </Link>
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}
export default LeftMenu;
