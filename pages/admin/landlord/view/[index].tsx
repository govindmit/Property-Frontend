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
  const { Header, Sider, Content } = Layout;
  const { confirm } = Modal;
  const { query } = useRouter();
  const [user, setUser] = useState<UserDataTypes | any>("");
  const inputStyle: React.CSSProperties = {
    padding: "5px 12px",
    borderRadius: "inherit",
    background: "#d1d1d1",
  };
  const style: React.CSSProperties = { color: "grey",fontFamily: "ui-serif",fontWeight: "600",fontSize: "15px"}
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
      title: "Are you sure delete this landlord?",
      icon: <ExclamationCircleFilled />,
      content: "",
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      async onOk() {
        const webtoken = localStorage.getItem("webToken");
        let web = webtoken?.substring(1, webtoken?.length - 1);
        try {
          await axios
            .delete(
              `https://api-property.mangoitsol.com/api/user/deleteuser/${user?.id}`,
              {
                headers: {
                  Authorization: `Bearer ${web}`,
                },
              }
            )
            .then((res) => {
              Router.push("/admin/landlord/");
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

  return (
    <Layout>
      <Sidebar />
      <Content className="contentcss">
        <Link href="/admin/landlord">
          <Button
            type="text"
            className=" backbtnn"
            icon={<ArrowLeftOutlined />}
            style={{ marginLeft: "-5px" }}
          >
            Back
          </Button>
        </Link>
        <h2 className="textuseruser">Landlord Detail</h2>
        <div>
          <div className="borderview">
            <div className="imagecenter1" style={{marginTop:"10px"}}>
              {user && user.profilPic != "" ? (
                <Image
                  style={{ borderRadius: "65px" }}
                  src={user?.profilPic}
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
              <Col className="gutter-row" span={6}>
                <MyFormItem name="firstName" label="Landlord firstName" style={style}>
                  <p className="datashow"> {user && user.firstName}</p>
                </MyFormItem>
              </Col>
              <Col className="gutter-row" span={2}></Col>

              <Col className="gutter-row" span={6}>
                <MyFormItem name="lastName" style={style} label="Landlord lastName">
                  <p className="datashow">{user && user.lastName} </p>
                </MyFormItem>
              </Col>
            </Row>
            <Row gutter={{ xs: 4, sm: 8, md: 12, lg: 20 }}>
              <Col className="gutter-row" span={6}></Col>
              <Col className="gutter-row" span={8}>
                <MyFormItem name="email" label="Landlord email" style={style}>
                  <p className="datashow">{user && user.email} </p>
                </MyFormItem>
              </Col>
              <Col className="gutter-row" span={0}></Col>
              <Col className="gutter-row" span={7}>
                <MyFormItem name="phone" label="Landlord phone" style={style}>
                  <p className="datashow">{user && user.phone} </p>
                </MyFormItem>
              </Col>
            </Row>
            <Row gutter={{ xs: 4, sm: 8, md: 12, lg: 20 }}>
              <Col className="gutter-row" span={6}></Col>
              <Col className="gutter-row" span={6}>
                <MyFormItem name="role" label="Landlord role" style={style}>
                  <p className="datashow">{user && user?.role?.title}</p>
                </MyFormItem>
              </Col>
              <Col className="gutter-row" span={2}></Col>
              <Col className="gutter-row" span={6}>
                <MyFormItem name="gender" label="Landlord gender" style={style}>
                  <p className="datashow">{user && user?.gender}</p>
                </MyFormItem>
              </Col>
            </Row>
            <Row gutter={{ xs: 4, sm: 8, md: 12, lg: 20 }}>
              <Col className="gutter-row" span={6}></Col>
              <Col className="gutter-row" span={6}>
                <MyFormItem name="status" label="Landlord status" style={style}>
                  <p className="datashow">{user && user?.status}</p>
                </MyFormItem>
              </Col>
              <span className="landlordeditSectionland">
              <Link href={`/admin/landlord/edit/${query?.index}`}>
                <Button type="primary">Edit</Button>
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
