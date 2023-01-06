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
import Loader from "../common/loader";
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

const MyFormItemContext = React.createContext<(string | number)[]>([]);
export interface IAppProps {}

interface MyFormItemGroupProps {
  prefix: string | number | (string | number)[];
  children: React.ReactNode;
}

export default function App(props: IAppProps) {
  const { Text, Link } = Typography;
const [loading,setLoading]=useState<Boolean>(false)
const antIcon = <LoadingOutlined style={{ fontSize: 24,color:"orangered" }} spin />;

  const onFinish = async (value: any) => {
    const { email } = value?.user?.data;
    const requestData = {
      email,
    };
    try {
        setLoading(true);
      await axios
        .post(`https://api-property.mangoitsol.com/api/user/forgotpassword`, requestData)
        .then((res) => {
            toast.success('Mail Sent Successfully ! Please Check Your Email');
            setLoading(false);
            setTimeout(() => {
                Router.push("/login");
            }, 2000);
        });
    } catch (err) {
      console.log("#errr", err);
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
        { children }
      </MyFormItemContext.Provider>
    );
  };

  const MyFormItem = ({ name, ...props }: FormItemProps) => {
    const prefixPath = React.useContext(MyFormItemContext);
    const concatName =
      name !== undefined ? [...prefixPath, ...toArr(name)] : undefined;

    return <Form.Item name={concatName} {...props} />;
  };

  return (
    <div className="mainlogindivsign">
      <div className="textCentersign">
        <h2 className="h2marginsign">Forgot Password</h2>
        {/* <h3 style={{ marginBottom: "18px" }}>Forgot Password</h3> */}
      </div>
      <div className="marginleftcss">
        <Form name="form_item_path" layout="vertical" onFinish={onFinish}>
          <div>
            <MyFormItemGroup prefix={["user"]}>
              <MyFormItemGroup prefix={["data"]}>
                <div>
                  <MyFormItem
                    name="email"
                    label="Email"
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
                    <Input placeholder="Enter Email " />
                  </MyFormItem>
                </div>
              </MyFormItemGroup>
            </MyFormItemGroup>
            <br />
            {
                loading?
                
                <Button type="primary" className="submitbutton22">
               <Spin indicator={antIcon} />
              </Button>
            :
            <Button type="primary" htmlType="submit" className="submitbutton">
            Send Link
          </Button>
            
            }
            <br />
            <br />
          </div>
        </Form>
      </div>
    </div>
  );
}
