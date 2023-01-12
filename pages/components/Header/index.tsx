import React, { Component, useEffect, useState } from "react";
import { Drawer, Button, Space, Input, Avatar, Popover  } from "antd";
import { UserOutlined, CaretDownOutlined, BellFilled, LogoutOutlined } from "@ant-design/icons";
import { Image } from "antd";
import Router from "next/router";
import Link from "next/link";
import jwt from "jsonwebtoken";


const { Search } = Input;

const Header: React.FC = () => {
  const [current, setCurrent] = useState("mail");
  const [visible, setVisible] = useState(false);
  const [name, setName] = useState("");

  const [role, setRole] = useState();
  const token = {
    access:
      typeof window !== "undefined"
        ? window.localStorage.getItem("token")
        : null,
    isAuthenticated: null,
    user: null,
  };
  useEffect(() => {
    const token: any = localStorage.getItem("token");
    const decode: any = jwt.decode(token);
    setName(decode?.data?.firstName);
    setRole(decode?.data?.role?.title);
  }, []);

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
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    Router.push("/login");
  };
 
  const content = (
    <div>
      <div className="popoverdiv">
      <button className="profilecss"><UserOutlined className="iconcss"/>&emsp; Profile</button>
      <br/>
      <button className="logoutcss" onClick={handleLogout}><LogoutOutlined className="iconcss"/>&emsp; Log out</button>
    </div>
    </div>
  );
  const roleIdentifier =
    typeof window !== "undefined" &&
    window?.localStorage?.getItem("role") === "1"
      ? "menuBar adminlogin"
      : "menuBar";
  const roleType =
    typeof window !== "undefined" && window?.localStorage?.getItem("role");
  const adminrighticon =
    typeof window !== "undefined" &&
    window?.localStorage?.getItem("role") === "1"
      ? "menuCon menuConAdmin"
      : "menuCon";


  return (
    <div>
      <header>
        <div className="top-navbar">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <nav className="navbar navbar-expand-lg navbar-light">
                  {roleType && roleType === "1" ? (
                    ""
                  ) : (
                    <>
                      <Link className="navbar-brand" href="/">
                        <Image
                          src="/logo-img.png"
                          alt="main-logo"
                          width={100}
                          height={30}
                          preview={false}
                        />
                      </Link>
                      <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                      >
                        <span className="navbar-toggler-icon"></span>
                      </button>
                    </>
                  )}

                  <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                      <li className="nav-item active">
                        <Link className="nav-link" href="#">
                          Buy <span className="sr-only">(current)</span>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" href="#">
                          Rent
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" href="/landloard">
                          Landlords
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" href="/brokerage">
                          Brokerages
                        </Link>
                      </li>
                    </ul>
                    {token && token?.access !== null ?
                     <div className="login">
                       <BellFilled style={{ marginTop: "12px", fontSize: "large" }} />
            <Popover placement="top"  content={content} title="   ">
            &emsp;&emsp;<span>{name}</span>
              <CaretDownOutlined className="arroDownCls" />
            <Avatar
              icon={<UserOutlined />}
              style={{ marginTop: "5px", marginLeft: "5px" }}
            />
            </Popover>
                   </div>
                    :
                    <div className="login">
                      <Link className="btn-main" href="/login">
                        Login Or singup
                      </Link>
                    </div>
}
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
