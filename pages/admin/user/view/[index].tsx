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
import { Button, Form, Input, Select } from "antd";
import Router, { withRouter } from "next/router";
import type { FormInstance } from "antd/es/form";
import { ArrowLeftOutlined, ExclamationCircleFilled } from "@ant-design/icons";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import axios from "axios";
export interface IAppProps {}
export interface UserDataTypes {
  address: String;
  email: String;
  id: Number;
  firstName: String;
  lastName: String;
  status: String;
}

export default function AddUser(props: IAppProps) {
  const { Option } = Select;
  const { Header, Sider, Content } = Layout;
  const { confirm } = Modal;
  const { query } = useRouter();
  const [user, setUser] = useState<UserDataTypes | any>("");

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
            <h2 className="textuseruser">User Details</h2>
          </div>
          <div className="card1">
            <Image
              src={
                user && user?.profilPic === ""
                  ? "data:image/jpeg;base64,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"
                  : user?.profilPic
              }
              alt="Image"
              width={150}
              height={150}
            />
            <h1>
              {user && user.firstName} {user && user.lastName}
            </h1>
            <div style={{ marginTop: "10px" }}>
              <p className="titlee">{user && user.email}</p>
            </div>
            <div
              style={{
                display: "flex",
                marginTop: "10px",
                marginLeft: "100px",
                marginBottom: "10px",
              }}
            >
              <p>Status : </p>
              <p className="title2"> &nbsp;{user && user.status}</p>
              <br />
            </div>
            <div style={{ marginTop: "10px" }}>
              <p className="titlee">{user && user.phone ==="undefined"?"":user.phone}</p>
            </div>

            <div className="landlordeditSection">
              <Link href={`/admin/user/edit/${query?.index}`}>
                <Button type="primary">Edit</Button>
              </Link>
              &emsp;&emsp;
              <Button danger onClick={handleDelete}>
                Delete
              </Button>
            </div>
          </div>
        </div>
      </Content>
    </Layout>
  );
}
