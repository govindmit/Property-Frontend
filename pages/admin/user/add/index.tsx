import React, { useState } from "react";
import Sidebar from "../../../sidebar";
import {
  Divider,
  InputNumber,
  Layout,
  Menu,
  Modal,
  Popconfirm,
  Popover,
  Table,
  theme,
} from "antd";
import { Button, Form, Input, Select, Upload } from "antd";
import type { FormInstance } from "antd/es/form";
import Router, { withRouter } from "next/router";
import {
  ArrowLeftOutlined,
  PlusOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import type { FormItemProps } from "antd";
import axios from "axios";
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
  firstName: string;
  lastName: string;
  email: string;
  status: string;
  phone: string;
  gender: string;
  profilePic: string;
  role: string;
}
export default function AddUser(props: IAppProps) {
  const { Option } = Select;
  const [image, setImage] = useState<any>("");
  const MyFormItem = ({ name, ...props }: FormItemProps) => {
    const prefixPath = React.useContext(MyFormItemContext);
    const concatName =
      name !== undefined ? [...prefixPath, ...toArr(name)] : undefined;
    return <Form.Item name={concatName} {...props} />;
  };
  const { Header, Sider, Content } = Layout;
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };
  const [form] = Form.useForm();

  const onStatusChange = (value: string) => {
    switch (value) {
      case "Active":
        form.setFieldsValue("Active");
        return;
      case "Inactive":
        form.setFieldsValue("Inactive");
        return;
      default:
    }
  };
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
  const onGenderChange = (value: string) => {
    switch (value) {
      case "male":
        form.setFieldsValue({ note: "Hi, man!" });
        return;
      case "female":
        form.setFieldsValue({ note: "Hi, lady!" });
        return;
      case "other":
        form.setFieldsValue({ note: "Hi there!" });
        break;
      default:
    }
  };
  const onFinish = async (values: any) => {
    const webtoken = localStorage.getItem("webToken");
    let web = webtoken?.substring(1, webtoken?.length - 1);
    let { firstName, lastName, email, status,role, gender, phone } =
      values.user.name;
      console.log('Sta',status);
    let formData = new FormData();
    const requestData: any = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      role:role,
      password:"",
      status: status,
      gender: gender,
      phone: phone,
      profilPic: image,
    };
    for (var key in requestData) {
      formData.append(key, requestData[key]);
    }
    try {
      await axios
        .post(`https://api-property.mangoitsol.com/api/user/createuser`, formData, {
          headers: {
            Authorization: `Bearer ${web}`,
          },
        })
        .then((res) => {
          Router.push("/admin/user");
        });
    } catch (err) {
      console.log("#####", err);
    }
    console.log(values);
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
            <h2 className="textuseruser">Add New User</h2>
          </div>
          <div className="lanlordmain">
            <Form name="form_item_path" layout="vertical" onFinish={onFinish}>
              <MyFormItemGroup prefix={["user"]}>
                <MyFormItemGroup prefix={["name"]}>
                  <MyFormItem name="firstName" label="First Name"  rules={[
                      {
                        required: true,
                        message: "FirstName is required!",
                      },
                    ]}>
                    <Input />
                  </MyFormItem>
                  <MyFormItem name="lastName" label="Last Name"  rules={[
                      {
                        required: true,
                        message: "LastName is required!",
                      },
                    ]}>
                    <Input />
                  </MyFormItem>
                  <MyFormItem name="email" label="Email" rules={[
                      {
                        type: "email",
                        message: "Email is not valid!",
                      },
                      {
                        required: true,
                        message: "Email is required!",
                      },
                    ]}>
                    <Input />
                  </MyFormItem>
                  <MyFormItem name="status" label="Status"  rules={[
                      {
                        required: true,
                        message: "Status is required!",
                      },
                    ]}>
                    <Select
                      placeholder="Select a option and change status"
                      onChange={onStatusChange}
                      allowClear
                    >
                      <Option value="Active">Active</Option>
                      <Option value="Inactive">InActive</Option>
                    </Select>
                  </MyFormItem>
                  <MyFormItem name="role" label="Role"  rules={[
                      {
                        required: true,
                        message: "Role is required!",
                      },
                    ]}>
                    <InputNumber />
                  </MyFormItem>
                  <MyFormItem name="gender" label="Gender"  rules={[
                      {
                        required: true,
                        message: "Gender is required!",
                      },
                    ]}>
                    <Select
                      placeholder="Select your gender"
                      onChange={onGenderChange}
                      allowClear
                    >
                      <Option value="male">male</Option>
                      <Option value="female">female</Option>
                    </Select>
                  </MyFormItem>
                  <MyFormItem name="phone" label="Phone">
                    <Input
                      addonBefore={prefixSelector}
                      style={{ width: "100%" }}
                    />
                  </MyFormItem>
                  <Form.Item
                    name="upload"
                    label="Upload"
                    valuePropName="fileList"
                    getValueFromEvent={normFile}
                  >
                    {/* {image && image.length === 0 ? ( */}
                    <Upload name="logo" action="/upload.do" listType="picture">
                      <Button icon={<UploadOutlined />}>Click to upload</Button>
                    </Upload>
                    {/* <input
                      type="file"
                      onChange={(e: any) => {
                        setImage(e.target.files[0]);
                      }}
                    /> */}
                    {/* ) : (
                      <Upload
                        name="logo"
                        action="/upload.do"
                        listType="picture"
                      ></Upload>
                    )} */}
                  </Form.Item>
                </MyFormItemGroup>
              </MyFormItemGroup>

              <div className="btnsubland">
                <Button htmlType="submit" className="btnupdate">
                  Submit
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </Content>
    </Layout>
  );
}
