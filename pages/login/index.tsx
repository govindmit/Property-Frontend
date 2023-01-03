import React, { useEffect, useState } from "react";
import { Divider, Layout, Typography } from "antd";
import { Form, Input, Button } from "antd";
import type { FormItemProps } from "antd";
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
  const onFinish = (value: object) => {
    Router.push({ pathname: "/Users/Favorite" });
    console.log(value);
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
  const handleMove=()=>{
    Router.push({ pathname: "/signUp" });
  }

  return (
    <div className="mainlogindivsign">
      <div className="textCentersign">
        <h2 className="h2marginsign">Welcome to Propter</h2>
        <h3>Sign In</h3>
      </div>
      <div className="marginleftcss">
      <Form name="form_item_path" layout="vertical" onFinish={onFinish}>
        <div>
          <MyFormItemGroup prefix={["user"]}>
            <MyFormItemGroup prefix={["data"]}>
              <div>
                <MyFormItem name="email" label="Email or Mobile number">
                  <Input placeholder="Enter Email / Mobile No." />
                </MyFormItem>
                <MyFormItem name="password" label="Password">
                  <Input placeholder="Enter Password"/>
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
          <Text className="forgotcss">Forgot Password?</Text>
          <br />
          <div className="creatediv">
            <Text className="createcss">
            <Button type="link" onClick={handleMove}>Create an Account</Button>
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
            <GoogleOutlined className="googleee"/> continue with Google
          </Button>
        </div>
      </Form>
      </div>
    </div>
  );
}
