import React, { useEffect, useState } from "react";
import Sidebar from "../../../sidebar";
import {
  Divider,
  Layout,
  Menu,
  Modal,
  Popconfirm,
  Popover,
  Table,
  theme,
  Upload,
} from "antd";
import { Button, Form, Input, Select,InputNumber } from "antd";
import type { FormInstance } from "antd/es/form";
import { ArrowLeftOutlined, UploadOutlined } from "@ant-design/icons";
import Link from "next/link";
import type { FormItemProps } from "antd";
import { useRouter } from "next/router";
import Router, { withRouter } from "next/router";

import axios from "axios";
import Image from "next/image";

const MyFormItemContext = React.createContext<(string | number)[]>([]);

interface MyFormItemGroupProps {
  prefix: string | number | (string | number)[];
  children: React.ReactNode;
}

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
export interface IAppProps {}
export interface UserDataTypes {
  address: String;
  email: String;
  id: Number;
  firstName: String;
  lastName: String;
  status: String;
}
export default function UserListing(props: IAppProps) {
  const { Option } = Select;
  const [image, setImage] = useState<any>("");
  const { query } = useRouter();
  const [user, setUser] = useState<UserDataTypes | any>("");
  const normFile = (e: any) => {
    console.log("Upload event:", e);
    setImage(e?.file.originFileObj);
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };
  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 70 }}>
        <Option value="91">+91</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  );
  const MyFormItem = ({ name, ...props }: FormItemProps) => {
    const prefixPath = React.useContext(MyFormItemContext);
    const concatName =
      name !== undefined ? [...prefixPath, ...toArr(name)] : undefined;
    return <Form.Item name={concatName} {...props} />;
  };
  const { Content } = Layout;
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };
  const [form] = Form.useForm();
  const onGenderChange = (value: string) => {
    switch (value) {
      case "Active":
        form.setFieldsValue({ note: "Hi, man!" });
        return;
      case "InActive":
        form.setFieldsValue({ note: "Hi, lady!" });
        return;
      default:
    }
  };
  const getUserData = async () => {
    const webtoken = localStorage.getItem("webToken");
    let web = webtoken?.substring(1, webtoken?.length - 1);

    try {
      await axios
        .get(`https://api-property.mangoitsol.com/api/user/${query?.index}`, {
          headers: {
            Authorization: `Bearer ${web}`,
          },
        })
        .then((res) => {
          setUser(res.data);
        });
    } catch (err) {
      console.log("#####", err);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  const onFinish = async (values: any) => {
    const webtoken = localStorage.getItem("webToken");
    let web = webtoken?.substring(1, webtoken?.length - 1);
    let { firstName, lastName, email, status,role,phone,gender } = values.user.name;
    let requesData = {
      firstName: firstName === undefined ? user.firstName : firstName,
      lastName: lastName === undefined ? user.lastName : lastName,
      email: email === undefined ? user.email : email,
      status: status === undefined ? user.status : status,
      role: role?.id === undefined ? user.role?.id : role?.id,
      phone: phone === undefined ? user.phone : phone,
      gender: gender === undefined ? user.gender : gender,
      // profilPic: image === "" ? "" : image,
    };
    try {
      await axios
        .put(
          `https://api-property.mangoitsol.com/api/user/${query?.index}`,
           requesData,
          {
            headers: {
              Authorization: `Bearer ${web}`,
            },
          }
        )
        .then((res) => {
            Router.push("/admin/user");
        });
    } catch (err) {
      console.log("#####", err);
    }
  };
  return (
    <Layout>
      <Sidebar />
      <Content className="contentcss">
        <div className="editusercss">
          <div className="backflex">
            <Link href="/admin/user">
              <Button
                type="text"
                className=" backbtnn"
                icon={<ArrowLeftOutlined />}
              >
                Back
              </Button>
            </Link>
            <h2 className="textuseruser">Edit User Details</h2>
          </div>
          <div className="lanlordmain">
            <Form name="form_item_path" layout="vertical" onFinish={onFinish}>
              <MyFormItemGroup prefix={["user"]}>
                <MyFormItemGroup prefix={["name"]}>
                  <MyFormItem name="firstName" label="First Name">
                    <Input defaultValue={user && user.firstName} />
                  </MyFormItem>
                  <MyFormItem name="lastName" label="Last Name">
                    <Input defaultValue={user && user.lastName} />
                  </MyFormItem>
                  <MyFormItem name="email" label="Email">
                    <Input defaultValue={user && user.email} />
                  </MyFormItem>

                  <MyFormItem name="status" label="Status">
                    <Select
                      //   placeholder="Select a option and change status"
                      onChange={onGenderChange}
                      defaultValue={user && user.status}
                      allowClear
                    >
                      <Option value="Active">Active</Option>
                      <Option value="Inactive">InActive</Option>
                    </Select>
                  </MyFormItem>
                  <MyFormItem name="role" label="Role" >
                    <InputNumber defaultValue={user && user?.role?.id}/>
                  </MyFormItem>
                  <MyFormItem name="gender" label="Gender" >
                    <Select
                      placeholder="Select your gender"
                      onChange={onGenderChange}
                      allowClear
                      defaultValue={user && user.gender}
                    >
                      <Option value="male">male</Option>
                      <Option value="female">female</Option>
                    </Select>
                  </MyFormItem>
                  <MyFormItem name="phone" label="Phone">
                    <Input
                      addonBefore={prefixSelector}
                      style={{ width: "100%" }}
                      defaultValue={user && user.phone}
                    />
                  </MyFormItem>
                  <div>
                  <Image src={user && user.profilPic} alt="imgg" width={50} height={50}/>
                  </div>
                  <Form.Item
                    name="upload"
                    label="Image"
                    valuePropName="fileList"
                    getValueFromEvent={normFile}
                  >
                    <Upload name="logo" action="/upload.do" listType="picture">
                      <Button icon={<UploadOutlined />}>Click to upload</Button>
                    </Upload>
                   
                  </Form.Item>
                </MyFormItemGroup>
              </MyFormItemGroup>

              <div className="btnsubland">
                <Button htmlType="submit" className="btnupdate">
                  Update
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </Content>
    </Layout>
  );
}
