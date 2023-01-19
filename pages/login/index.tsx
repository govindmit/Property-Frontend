import React, { useEffect, useState } from "react";
import axios from "axios";
import { Divider, Layout, Typography } from "antd";
import { Form, Input, Button } from "antd";
import type { FormItemProps } from "antd";
import { toast } from "react-toastify";
import Router, { withRouter } from "next/router";

const MyFormItemContext = React.createContext<(string | number)[]>([]);
export interface IAppProps {}

interface MyFormItemGroupProps {
  prefix: string | number | (string | number)[];
  children: React.ReactNode;
}

export default function App(props: IAppProps) {
  const { Text, Link } = Typography;

  const onFinish = async (value: any) => {
    const { email, password } = value?.user?.data;
    const requestData = {
      email,
      password,
    };
    try {
      await axios
        .post(
          `https://api-property.mangoitsol.com/api/user/signin`,
          requestData
        )
        .then((res) => {
          if (res?.status === 200) {
            localStorage.setItem("token", res.data.accessToken);
            if (res?.data?.data?.role_type === 1) {
              localStorage.setItem("role_type", res.data.data.role_type);
              Router.push("/admin/user");
            } else if (res?.data?.data?.role_type === 2) {
              Router.push("/users/favorite");
            } else if (res?.data?.data?.role_type === 3) {
              console.log("Landloard login");
            } else if (res?.data?.data?.role_type === 4) {
              console.log("Brokerage login");
            } else if (res?.data?.data?.role_type === 5) {
              console.log("");
            } else {
              console.log("Work in progress");
            }
          } else {
            toast.error(res?.data?.message);
          }
        });
    } catch (err) {
      console.log("#####", err);
    }
  };

  function toArr(
    str: string | number | (string | number)[]
  ): (string | number)[] {
    return Array.isArray(str) ? str : [str];
  }

  const MyFormItemGroup = ({ prefix, children }: MyFormItemGroupProps) => {
    const prefixPath = React.useContext(MyFormItemContext);
    const concatPath = React.useMemo(
      () => [...prefixPath, ...toArr(prefix)],
      [prefixPath, prefix]
    );

    return (
      <MyFormItemContext.Provider value={concatPath}>
        {children}
      </MyFormItemContext.Provider>
    );
  };

  const MyFormItem = ({ name, ...props }: FormItemProps) => {
    const prefixPath = React.useContext(MyFormItemContext);
    const concatName =
      name !== undefined ? [...prefixPath, ...toArr(name)] : undefined;

    return <Form.Item name={concatName} {...props} />;
  };
  const handleMove = () => {
    Router.push({ pathname: "/signup" });
  };
  const handleForgot = () => {
    Router.push({ pathname: "/forgotpassword" });
  };
  return (
    <div className="wrapper-area">
      <div className="login-page">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h3 className="mb-3">Welcome to Propter</h3>
              <h5 className="mb-3">Sign in</h5>
              <div className="bg-white shadow rounded main-vox">
                <div className="row">
                  <div className="col-md-7 pe-0">
                    <div className="form-left">
                      <Form className="row g-4" onFinish={onFinish}>
                        <MyFormItemGroup prefix={["user"]}>
                          <MyFormItemGroup prefix={["data"]}>
                            <div className="col-12">
                              <MyFormItem
                                name="email"
                                label="Email or Mobile number"
                                rules={[
                                  {
                                    type: "email",
                                    message: "Email is not valid!",
                                  },
                                  {
                                    required: true,
                                    message: "Email is required!",
                                  },
                                ]}
                              >
                                <Input placeholder="Enter Email / Mobile No." />
                              </MyFormItem>
                            </div>

                            <div className="col-12 mt-3">
                              <MyFormItem
                                name="password"
                                label="Password"
                                rules={[
                                  {
                                    required: true,
                                    message: "Password is required!",
                                  },
                                ]}
                              >
                                <Input placeholder="Enter Password" />
                              </MyFormItem>
                             
                            </div>
                            <div className="col-12 text-center">
                              <button
                                type="submit"
                                className="btn btn-primary px-4 mt-5 sig-btn"
                              >
                                Sign in
                              </button>
                            </div>
                            <div className="col-sm-6">
                              <Link
                                href="/forgotpassword"
                                className="float-end text-primary for-pwd"
                              >
                                Forgot Password?
                              </Link>
                              <Link
                                href="/signup"
                                className="float-end text-primary an-acc"
                              >
                                create an Account
                              </Link>
                            </div>
                            <div className="socical-links">
                              <a className="btn apple" href="#">
                                <span>
                                  <i
                                    className="fa fa-apple"
                                    aria-hidden="true"
                                  ></i>
                                </span>{" "}
                                continue with Apple
                              </a>
                              <a className="btn Facebook" href="#">
                                <span>
                                  <i
                                    className="fa fa-facebook"
                                    aria-hidden="true"
                                  ></i>
                                </span>{" "}
                                continue with Facebook
                              </a>
                              <a className="btn Google" href="#">
                                <span>
                                  <i
                                    className="fa fa-google"
                                    aria-hidden="true"
                                  ></i>
                                </span>{" "}
                                continue with Google
                              </a>
                            </div>
                          </MyFormItemGroup>
                        </MyFormItemGroup>
                      </Form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
