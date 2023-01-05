import React, { useEffect, useState } from "react";
import axios from "axios";
import { Divider, Layout, Typography } from "antd";
import { Form, Input, Button } from "antd";
import type { FormItemProps } from "antd";
import { toast } from 'react-toastify';
import {
  AppleFilled,
  AppleOutlined,
  FacebookOutlined,
  GoogleOutlined,
} from "@ant-design/icons";
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
        .post(`https://api-property.mangoitsol.com/api/user/signin`, requestData)
        .then((res) => {
          if (res?.status === 200) {
            localStorage.setItem("token", res.data.accessToken);
            if (res?.data?.data?.role === 1) {
              Router.push("/admin/dashboard");
            } else if (res?.data?.data?.role === 2) {
              Router.push("/users/favorite");
            } else if (res?.data?.data?.role === 3) {
              console.log("Landloard login");
            } else if (res?.data?.data?.role === 4) {
              console.log("Brokerage login");
            } else if (res?.data?.data?.role === 5) {
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
    Router.push({ pathname: "/signUp" });
  };
  const handleForgot = () => {
    Router.push({ pathname: "/forgotPassword" });
  };

  return (
    <div className="mainlogindivsign">
      <div className="textCentersign">
        <h2 className="h2marginsign">Welcome to Propter</h2>
        <h3 style={{ marginBottom: "18px" }}>Sign In</h3>
      </div>
      <div className="marginleftcss">
        <Form name="form_item_path" layout="vertical" onFinish={onFinish}>
          <div>
            <MyFormItemGroup prefix={["user"]}>
              <MyFormItemGroup prefix={["data"]}>
                <div>
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
                  <MyFormItem
                    name="password"
                    label="Password"
                    rules={[
                      // {
                      //   type: "string",
                      //   pattern: /^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9]{6,}$/,
                      //   message:"Password does not match pattern"
                      // },
                      {
                        required: true,
                        message: "Password is required!",
                      },
                    ]}
                  >
                    <Input placeholder="Enter Password" />
                  </MyFormItem>
                </div>
              </MyFormItemGroup>
            </MyFormItemGroup>
            <br />
            <Button type="primary" htmlType="submit" className="submitbutton">
              Sign In
            </Button>
            <br />
            <br />
            <Text className="forgotcss">
              <Button type="link" onClick={handleForgot}>
                Forgot Password?
              </Button>
            </Text>
            <br />
            <div className="creatediv">
              <Text className="createcss">
                <Button type="link" onClick={handleMove}>
                  Create an Account
                </Button>
              </Text>
            </div>
            <div className="line"></div>
            <Button type="primary" className="submitbutton1">
              <AppleFilled /> Continue with Apple
            </Button>
            <br />
            <br />
            <Button type="primary" className="submitbuttonfb">
              <FacebookOutlined /> Continue with facebook
            </Button>
            <br />
            <br />
            <Button type="primary" className="submitbutton3">
              <GoogleOutlined className="googleee" /> continue with Google
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}
