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
} from "antd";
import type { FormItemProps } from "antd";
import { Button, Form, Input, Select } from "antd";
import Router, { withRouter } from "next/router";
import type { FormInstance } from "antd/es/form";
import {
  ArrowLeftOutlined,
  ExclamationCircleFilled,
  LoadingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import { Avatar, Col, Radio, Row, Tabs } from "antd";
import Image from "next/image";
import { useRouter } from "next/router";
import axios from "axios";
import userService from "../../../../services/userService";

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
  first_name: string;
  last_name: string;
  email: string;
  status: string;
  phone: string;
  gender: string;
  profile_pic: string;
  role_type: string;
}

export default function AddUser(props: IAppProps) {
  const { Option } = Select;
  const { Header, Sider, Content } = Layout;
  const { confirm } = Modal;
  const { query }:any = useRouter();
  const [user, setUser] = useState<UserDataTypes | any>("");
  const inputStyle: React.CSSProperties = {
    padding: "5px 12px",
    borderRadius: "inherit",
    background: "#d1d1d1",
  };
  const style: React.CSSProperties = {
    color: "grey",
    fontFamily: "ui-serif",
    fontWeight: "600",
    fontSize: "15px",
  };
  const landlordcs: React.CSSProperties = { fontSize: "21px" };
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };
  const [form] = Form.useForm();

  const antIcon = (
    <LoadingOutlined style={{ fontSize: 24, color: "orangered" }} spin />
  );

  const MyFormItem = ({ name, ...props }: FormItemProps) => {
    const prefixPath = React.useContext(MyFormItemContext);
    const concatName =
      name !== undefined ? [...prefixPath, ...toArr(name)] : undefined;
    return <Form.Item name={concatName} {...props} />;
  };

  const handleDelete = () => {
    confirm({
      title: "Are you sure delete this User?",
      icon: <ExclamationCircleFilled />,
      content: "",
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      async onOk() {
        const webtoken = localStorage.getItem("webToken");
        let web = webtoken?.substring(1, webtoken?.length - 1);
        try {
          await userService.deleteUser(user?.id,web)
          .then((res) => {
            Router.push("/admin/user/");
          });
        } catch (err) {
          console.log("#####", err);
        }
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  };
  const getUserData = async () => {
    const webtoken = localStorage.getItem("webToken");
    let web = webtoken?.substring(1, webtoken?.length - 1);
    try {
      await userService.getUserProfile(query?.index,web).then((res: any) => {
        setUser(res.data);
      });
    } catch (err) {
      console.log("#####", err);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <Layout>
      <Sidebar />
      <Content className="contentcss">
        <Link href="/admin/user">
          <Button
            type="text"
            className=" backbtnn"
            icon={<ArrowLeftOutlined />}
            style={{ marginLeft: "-5px" }}
          >
            Back
          </Button>
        </Link>
        <h2 className="textuseruser">User Detail</h2>
        <div>
          <div className="borderview">
            <div className="imagecenter1" style={{ marginTop: "10px" }}>
              {user && user.profile_pic != "" ? (
                <Image
                  style={{ borderRadius: "65px" }}
                  src={user?.profile_pic}
                  alt="image"
                  width={100}
                  height={100}
                />
              ) : (
                <Avatar
                  size={64}
                  icon={<UserOutlined />}
                  className="avatarcss"
                />
              )}
            </div>
            <Row gutter={{ xs: 4, sm: 8, md: 12, lg: 20 }}>
              <Col className="gutter-row" span={6}></Col>
              <Col className="gutter-row" span={5}>
                <MyFormItem name="firstName" label="First Name" style={style}>
                  <p className="datashow"> {user && user.first_name}</p>
                </MyFormItem>
              </Col>
              <Col className="gutter-row" span={3}></Col>

              <Col className="gutter-row" span={5}>
                <MyFormItem name="lastName" style={style} label="Last Name">
                  <p className="datashow">{user && user.last_name} </p>
                </MyFormItem>
              </Col>
            </Row>
            <Row gutter={{ xs: 4, sm: 8, md: 12, lg: 20 }}>
              <Col className="gutter-row" span={6}></Col>
              <Col className="gutter-row" span={8}>
                <MyFormItem name="email" label="Email" style={style}>
                  <p className="datashow">{user && user.email} </p>
                </MyFormItem>
              </Col>
              <Col className="gutter-row" span={0}></Col>
              <Col className="gutter-row" span={6}>
                <MyFormItem name="phone" label="Phone" style={style}>
                  <p className="datashow">{user && user.phone} </p>
                </MyFormItem>
              </Col>
            </Row>
            <Row gutter={{ xs: 4, sm: 8, md: 12, lg: 20 }}>
              <Col className="gutter-row" span={6}></Col>
              <Col className="gutter-row" span={4}>
              <MyFormItem name="status" label="Status" style={style}>
                  <p className="datashow">{user && user?.status}</p>
                </MyFormItem>
              </Col>
              <Col className="gutter-row" span={4}></Col>
              <Col className="gutter-row" span={10}>
                <MyFormItem name="gender" label="Gender" style={style}>
                  <p className="datashow">{user && user?.gender}</p>
                </MyFormItem>
              </Col>
            </Row>
            <Row gutter={{ xs: 4, sm: 8, md: 12, lg: 20 }}>
              <Col className="gutter-row" span={6}></Col>
              <Col className="gutter-row" span={4}>
                <MyFormItem name="status" label="" style={style}>
                  {/* <p className="datashow">{user && user?.status}</p> */}
                </MyFormItem>
              </Col>
              <span className="landlordeditSectionview">
                <Link href={`/admin/user/edit/${query?.index}`}>
                  <Button type="default" className="btnview">Edit</Button>
                </Link>
                &emsp;&emsp;
                <Button danger onClick={handleDelete}>
                  Delete
                </Button>
              </span>
            </Row>
          </div>
          <br />
          <br />
        </div>
      </Content>
    </Layout>
  );
}
