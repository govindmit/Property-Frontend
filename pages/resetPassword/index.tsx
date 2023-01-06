import React, { useEffect } from "react";
import axios from "axios";
import { Divider, Layout, Typography } from "antd";
import { Form, Input, Button } from "antd";
import { toast } from "react-toastify";
import Router, { withRouter } from "next/router";
import API from "../config/config";

const MyFormItemContext = React.createContext<(string | number)[]>([]);
export interface IAppProps {}

interface MyFormItemGroupProps {
  prefix: string | number | (string | number)[];
  children: React.ReactNode;
}

export default function App(props: IAppProps) {
  const [hydrated, setHydrated] = React.useState(false);
  useEffect(() => {
    setHydrated(true);
  }, []);
  if (!hydrated) {
    return null;
  }
  const onFinish = async (value: any) => {
    const { confirm, password } = value;
    let tokenn = Router?.query?.key;
    const requestData = {
      confirm_password: confirm,
      password: password,
    };
    try {
      await axios
        .post(API.resetPassword, requestData, {
          headers: {
            Authorization: `Bearer ${tokenn}`,
          },
        })
        .then((res) => {
          if (res?.status === 200) {
            toast.success("Password Changed Successfully");
            setTimeout(() => {
              Router.push("/login");
            }, 2000);
          } else {
            toast.error("Something went wrong");
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
  return (
    <div className="mainlogindivsign">
      <div className="textCentersign">
        <h2 className="h2marginsign">Create New Password</h2>
        {/* <h3 style={{ marginBottom: "18px" }}></h3> */}
      </div>
      <div className="marginleftcss">
        <Form name="form_item_path" layout="vertical" onFinish={onFinish}>
          <div>
            <MyFormItemGroup prefix={["user"]}>
              <MyFormItemGroup prefix={["data"]}>
                <div>
                  <Form.Item
                    name="password"
                    label="Password"
                    rules={[
                      {
                        required: true,
                        message: "Password field is required!",
                      },
                    ]}
                    hasFeedback
                  >
                    <Input.Password />
                  </Form.Item>

                  <Form.Item
                    name="confirm"
                    label="Confirm Password"
                    dependencies={["password"]}
                    hasFeedback
                    rules={[
                      {
                        required: true,
                        message: "Confirm password is required!",
                      },
                      ({ getFieldValue }) => ({
                        validator(_, value) {
                          if (!value || getFieldValue("password") === value) {
                            return Promise.resolve();
                          }
                          return Promise.reject(
                            new Error(
                              "The passwords that you entered do not match!"
                            )
                          );
                        },
                      }),
                    ]}
                  >
                    <Input.Password />
                  </Form.Item>
                </div>
              </MyFormItemGroup>
            </MyFormItemGroup>
            <br />
            <Button type="primary" htmlType="submit" className="submitbutton">
              Submit
            </Button>
            <br />
            <br />
          </div>
        </Form>
      </div>
    </div>
  );
}
