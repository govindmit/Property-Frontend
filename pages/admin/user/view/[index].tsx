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
             Router.push('/admin/user/')
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
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAOVBMVEWzs7P///+vr6/j4+Otra3u7u7Y2Njm5ua3t7f7+/vAwMC6urrU1NTz8/PQ0NDp6enKysrExMTc3NzfYYiMAAAEUUlEQVR4nO2dC4KqMAxFISA/QWH2v9gH4vj8ANo22NvOPSvwWJo0aQtJQgghhBBCCCGEEEIIIYQQQgghX0Uu+P4VOyLF+VxmRd9Eq1mlv3TZkEQpmd5z7uMbybxLH8mayBwlS5/pIhvI04thmtZtTDPyuGA4UkQ0jsuGaX3Kff8yHWTNcJyPEcQcyav2OZbeUwY+HSXZ1LtwClhRqtc8scAh1GGUY/mJ30QfpKL8fOo3koWnmPe1geCYOI6hOX78gN4YQlKUxmwAZwJK/9Jb+I38hKIoSwvtmBTtBceQGoKiDPaCadoGEG6q9xpb4Od+ebsMfYNvgXcYLWQWOYAPouMzOtH7dthEzu6GNfQgNu6CU/vGt8Y6GkOIPYgKs3Di5NtjFSl0DDvYlY1zLvzl6NtkjZXGrzmwazeHJfcjZ1BDMa/rV0CNpmrTME0r3y7LiJpgOvh2WUYpG06AhhpFwx9MQ7VkAdsgjt9QpbD4K4ag85CGNLwDtMynoQGgaxrFfBi/IWinJn5DxZU3aN87fsP102uxGMZf4+c2BzCCMhQ9w8a3yzKKvTZUw4OaIWZbX2Lvl0qr5jfWFhXewlRnc/Q/cKdO3M9gPIMWbBRX3VfAtkm1dn/vwYqnimH0BlYFlesLgvVq9jDE6mQoLrpvYFVQ2tlwAizSqKfDtMbKFonTweBF4Laf1A3RimC9kyZX8A6cKLb0L2DlignF8veCb58FdGMN4q1L1ZnYAQomquEUrTicsb3PtQBcLrySqwUb3yaraG3NIIaZGaVKH/nWzMtrWqzAKiqe0FjZgJ6lubLwJhpT8Bakj7jvIWKV9q84J8UDWOH7iusKHDrMzLglRewwM+OUFNHDzIxL/xs9zFyxT4r4YWbGvrUIufW7hO2hDKydik3sOhqghf0idou3AFLhf2ye04Ce0QnzeBpKHP3F+BUute9fbExu2FzE7K5tYra0wW3NbGByAAW1fbiNQaV4DizKzBh0+ZGba1t8PoQBRpkJg3QRRlX4jFHrNITK/gWzo3xBvTNxxnTtHUxleMO0HxVS5XQhNy6fAssYNn3hoBTtXp0Y0MImt+zsH3z/8I+x3n+qg3hBu+kbkh9p4Z9UaRw3Zg7Qwyh5r3AaIwO8LjMjVaF0FLpsAL97MQ6f5jnorqhyJEmRRv8QdFc0CcZQigzZDgf1LxyKIfH7ESzJq9MOh/QfqMt2SPw8suOzWexwF2iRLjsdvzuY0+CVez2bK9Tn9lsxdgos3xq8Z8uy3/tzJuOf2H978J4o+/1mpcixVT6vbkW9zy3hcep9LbC8R39pJ9vfbPJAqfnVljGp7531bMi0go5I6ze0rKOzJSdaFcMedO7TUQZgv4nW1VD/WqE2jvtWe1yz18X1BEcAho4TkYb+oSENaegfGtKQhv6hIQ1p6B8a0pCG/qEhDeM3TPoyw8b9wpug4ypICCGEEEIIIYQQQgghhBBCCPk7/AOT7UbJ5bD1AAAAAABJRU5ErkJggg=="
              alt="John"
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
              <p className="titlee">{user && user.phone}</p>
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
