import React, { Component, useEffect, useState } from "react";
import { Drawer, Button, Space, Input, Tooltip, Avatar } from "antd";
import LeftMenu from "./left";
import RightMenu from "./right";
import logo from "../../../public/assets/aa.png";
import { Image } from "antd";
import Router from "next/router";
import Link from "next/link";
import jwt from "jsonwebtoken";
import { BellFilled, CaretDownOutlined, UserOutlined } from "@ant-design/icons";

const { Search } = Input;

const Header: React.FC = () => {

  const token = {
    access:
      typeof window !== "undefined"
        ? window.localStorage.getItem("token")
        : null,
    isAuthenticated: null,
    user: null,
  };

  interface valueInterface {
    visible: Boolean;
    current: String;
  }

  const handleClick = () => {
    Router.push("/");
  };
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
                  <Link className="navbar-brand" href="#">
                    <Image
                      src="/logo-img.png"
                      alt="main-logo"
                      preview={false}
                      onClick={handleClick}
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

                    <div className="login">
                      <Link className="btn-main" href="/login">
                        Login Or singup
                      </Link>
                    </div>
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
