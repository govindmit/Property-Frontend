import React, { Component, useState,useEffect } from "react";
import { Menu } from "antd";
import Link from "next/link";
import Router from "next/router";
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;


const LeftMenu =() => {
  
    const [activetab,setActivetab] = useState('');

    useEffect(()=>{
      Router.pathname.includes("/landloard") ? setActivetab('Landloard') :  Router.pathname.includes("/brokerage") ? setActivetab('Brokerage'):''
    },[])

    return (
      <div>
        <Menu mode="horizontal" className="leftMenuCls">
          <Menu.Item key="buy" className="leftMenuItem">
            <Link href="#" className="leftMenuLinkCls">
              Buy
            </Link>
          </Menu.Item>
          <Menu.Item key="rent" className="leftMenuItem">
            <Link href="#" className="leftMenuLinkCls ">
              Rent
            </Link>
          </Menu.Item>
          <Menu.Item key="landloard" className="leftMenuItem">
            <Link href="/landloard" className={activetab === "Landloard" ? "link active" : ""}>
              Landloard
            </Link>
          </Menu.Item>
          <Menu.Item key="brokerage" className="leftMenuItem">
            <Link href="/brokerage" className={activetab === "Brokerage" ? "link active" : ""}>
              Brokerage
            </Link>
          </Menu.Item>
        </Menu>
      </div>
    );
  
}
export default LeftMenu;