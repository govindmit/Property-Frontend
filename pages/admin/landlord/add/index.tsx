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
  LoadingOutlined,
  PlusOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import type { FormItemProps } from "antd";
import axios from "axios";
import { Spin } from "antd";
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
  const [image, setImage] = useState<any>();
  const [photo, setPhoto] = useState<any>();

  const [loading, setLoading] = useState<Boolean>(false);
  const antIcon = (
    <LoadingOutlined style={{ fontSize: 24, color: "orangered" }} spin />
  );

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
    setImage(e.target.files[0]);
    let reader = new FileReader();
    let file = e.target.files[0];
    reader.onloadend = () => {
      setPhoto(reader.result);
    };
    reader.readAsDataURL(file);
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
  const onRoleChange = (value: string) => {
    switch (value) {
      case "1":
        form.setFieldsValue("1");
        return;
      case "2":
        form.setFieldsValue("2");
        return;
      case "3":
        form.setFieldsValue("3");
        return;
      case "4":
        form.setFieldsValue("4");
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
    let { firstName, lastName, email, status, role, gender,phone } =
      values.user.name;
    let formData = new FormData();
    const requestData: any = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      role: role,
      password: "",
      status: status,
      gender: gender,
      phone: phone,
      profilPic: image,
    };
    for (var key in requestData) {
      formData.append(key, requestData[key]);
    }
    setLoading(true);
    try {
      await axios
        .post(
          `https://api-property.mangoitsol.com/api/user/createuser`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: `Bearer ${web}`,
            },
          }
        )
        .then((res) => {
          setLoading(false);
          Router.push("/admin/landlord");
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
            <Link href="/admin/landlord">
              <Button
                type="text"
                className=" backbtnn"
                icon={<ArrowLeftOutlined />}
              >
                Back
              </Button>
            </Link>
            <h2 className="textuseruser">Add New Landlord</h2>
          </div>
          <div className="lanlordmain">
            <Form name="form_item_path" layout="vertical" onFinish={onFinish}>
              <MyFormItemGroup prefix={["user"]}>
                <MyFormItemGroup prefix={["name"]}>
                  <MyFormItem
                    name="firstName"
                    label="First Name"
                    rules={[
                      {
                        required: true,
                        message: "FirstName is required!",
                      },
                    ]}
                  >
                    <Input />
                  </MyFormItem>
                  <MyFormItem
                    name="lastName"
                    label="Last Name"
                    rules={[
                      {
                        required: true,
                        message: "LastName is required!",
                      },
                    ]}
                  >
                    <Input />
                  </MyFormItem>
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
                    <Input />
                  </MyFormItem>
                  <MyFormItem
                    name="status"
                    label="Status"
                    rules={[
                      {
                        required: true,
                        message: "Status is required!",
                      },
                    ]}
                  >
                    <Select
                      placeholder="Select a option and change status"
                      onChange={onStatusChange}
                      allowClear
                    >
                      <Option value="Active">Active</Option>
                      <Option value="Inactive">InActive</Option>
                    </Select>
                  </MyFormItem>
                  <MyFormItem
                    name="role"
                    label="Role"
                    rules={[
                      {
                        required: true,
                        message: "Role is required!",
                      },
                    ]}
                  >
                    <Select
                      placeholder="Select role"
                      onChange={onRoleChange}
                      allowClear
                    >
                      <Option value="1">Admin</Option>
                      <Option value="2">User</Option>
                      <Option value="3">Brokerage</Option>
                      <Option value="4">Landlord</Option>
                      {/* <Option value="5">Agent</Option> */}
                    </Select>
                  </MyFormItem>
                  <MyFormItem
                    name="gender"
                    label="Gender"
                    rules={[
                      {
                        required: true,
                        message: "Gender is required!",
                      },
                    ]}
                  >
                    <Select
                      placeholder="Select your gender"
                      onChange={onGenderChange}
                      allowClear
                    >
                      <Option value="male">male</Option>
                      <Option value="female">female</Option>
                    </Select>
                  </MyFormItem>
                  <MyFormItem
                    name="phone"
                    label="Phone"
                    rules={[
                      {
                        min: 10,
                        max: 10,
                        message: "Mobile number must be 10 digit",
                      },
                    ]}
                  >
                    <Input
                      type="number"
                      // addonBefore={prefixSelector}
                      style={{ width: "100%" }}
                    />
                  </MyFormItem>
                  <span style={{ display: "flex" }}>
                    {photo && (
                      <Image
                        src={photo}
                        alt="img"
                        width={70}
                        height={60}
                        className="addimage"
                      />
                    )}
                    <Form.Item
                      name="upload"
                      label=""
                      valuePropName="fileList"
                      style={{ marginTop: "15px" }}
                    >
                      <input
                        type="file"
                        multiple
                        accept=".pdf,.jpeg,.png,.csv,.doc,.docx,.txt,.xlsx,.xls"
                        className="imageTagClass"
                        onChange={(e) => normFile(e)}
                      />
                    </Form.Item>
                  </span>
                </MyFormItemGroup>
              </MyFormItemGroup>

              <div className="btnsubland">
                {loading ? (
                  <Button type="primary" className="submitbutton22">
                    <Spin indicator={antIcon} />
                  </Button>
                ) : (
                  <Button htmlType="submit" className="btnupdate">
                    Submit
                  </Button>
                )}
              </div>
            </Form>
          </div>
        </div>
      </Content>
    </Layout>
  );
}
