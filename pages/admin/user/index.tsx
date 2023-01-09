import * as React from "react";
import { useEffect, useState } from "react";
import Sidebar from "../../sidebar";
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
import Link from "next/link";
import { Button } from "antd";
import { Input, Space } from "antd";
import {
  AudioOutlined,
  DeleteOutlined,
  EditFilled,
  ExclamationCircleFilled,
  EyeOutlined,
  MoreOutlined,
} from "@ant-design/icons";
import axios from "axios";
export interface UserDataTypes {
  address: String;
  email: String;
  id: Number;
  firstName: String;
  lastName: String;
  status: String;
}
import Image from "next/image";

export default function UserListing() {
  const { Header, Sider, Content } = Layout;
  const { confirm } = Modal;
  const [state, setstate] = useState<UserDataTypes | any>({
    query: "",
    list: [],
  });
  const [userData, setUserData] = useState<UserDataTypes | any>("");
  const [userData1, setUserData1] = useState<UserDataTypes | any>("");
  const [allData, setAllData] = useState("");
  const [NewData, setNewData] = useState<UserDataTypes | any>(0);
  const [ActiveData, setActiveNewData] = useState<UserDataTypes | any>("");
  const [inActiveData, setINactiveData] = useState<UserDataTypes | any>("");
  const [Activedata, setActiveData] = useState<UserDataTypes | any>("");
  const [tabClassName, setTabClassName] = useState<UserDataTypes | any>("");
  const [tab1ClassName, setTab1ClassName] = useState<UserDataTypes | any>("");
  const [tab2ClassName, setTab2ClassName] = useState<UserDataTypes | any>("");
  const [user, setUser] = useState<UserDataTypes | any>("");

  const handleDelete = () => {
    confirm({
      title: "Are you sure delete this user?",
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
              `https://api-property.mangoitsol.com/api/user/deleteuser/${userData?.id}`,
              {
                headers: {
                  Authorization: `Bearer ${web}`,
                },
              }
            )
            .then((res) => {
              getUserData();
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

  const content = (
    <div>
      <Link href={`/admin/user/view/${userData.id}`}>
        <Button style={{ textAlign: "center" }} type="link">
        <EyeOutlined style={{ color: "#0014ff" }} /> 
        <span style={{    marginLeft: "14px",color:"#0014ff"}}> View</span>
        </Button>
      </Link>
      <p style={{ textAlign: "center", cursor: "pointer" ,marginBottom:"5px"}}>
        <Link href={`/admin/user/edit/${userData.id}`}>
          <EditFilled style={{ color: "#4096ff" }} /> &emsp;Edit
        </Link>
      </p>
      {" "}
      <p style={{ textAlign: "center", cursor: "pointer",color:"red" }}>
      <Button type="link" onClick={handleDelete} style={{color:"red"}}><DeleteOutlined style={{ color: "red" }} />&ensp; Del</Button>
      </p>
    </div>
  );
  const columns = [
    {
      key: "firstName",
      title: "First Name",
      dataIndex: "firstName",
    },
    {
      key: "lastName",
      title: "Last Name",
      dataIndex: "lastName",
    },
    {
      key: "email",
      title: "Email",
      dataIndex: "email",  
    },
    {
      key: "profilPic",
      title: "Image",
      dataIndex:"profilPic",
      render: (t:any) => <Image alt="image" src={t} width={50} height={50}/>
    },
    {
      key: "phone",
      title: "Phone",
      dataIndex: "phone",
    }, 
    {
      key: "gender",
      title: "Gender",
      dataIndex: "gender",
    },
    {
      key: "status",
      title: "Status",
      dataIndex: "status",
    },
    {
      key: "action",
      title: "Actions",
      render: (record: any) => {
        return (
          <>
            <Popover content={content} title="" trigger="click">
              &emsp;&nbsp;
              <MoreOutlined onClick={() => handleClick(record)} />
            </Popover>
          </>
        );
      },
    },
  ];
  const handleClick = (data: any) => {
    setUserData(data);
  };
  const getUserData = async () => {
    const webtoken = localStorage.getItem("webToken");
    let web = webtoken?.substring(1, webtoken?.length - 1);
    try {
      await axios
        .get(`https://api-property.mangoitsol.com/api/user/getusers`, {
          headers: {
            Authorization: `Bearer ${web}`,
          },
        })
        .then((res) => {
          setUser(res.data);
          const identifierUserData = res.data.filter((data: any) => {
            if (data?.Role?.title === "User") {
              return data;
            }
          });
          let newdata = identifierUserData.filter((ae: any) => {
            return ae.status === "Inactive";
          });
          let newactivedata = identifierUserData.filter((ae: any) => {
            return ae.status === "Active";
          });
          setActiveNewData(newactivedata);
          setNewData(newdata);
          setUserData1(identifierUserData);
        });
    } catch (err) {
      console.log("#####", err);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);
  const handleAlldata = (val: String) => {
    if (val === "all") {
      if (allData === "1") {
        setTabClassName("");
        setTab1ClassName("");
        setTab2ClassName("");
      } else {
        setAllData("1");
        setTabClassName("active");
        setTab1ClassName("");
        setTab2ClassName("");
      }
    } else if (val === "Active") {
      setAllData("2");
      setActiveData(ActiveData);
      setTab1ClassName("active");
      setTabClassName("");
      setTab2ClassName("");
    } else if (val === "Inactive") {
      setAllData("3");
      setTab2ClassName("active");
      setTabClassName("");
      setTab1ClassName("");
      setINactiveData(NewData);
    } else {
      setAllData("");
    }
  };
  const handleChange = (e: any) => {
    const identifier =
      allData === "1"
        ? userData1
        : allData === "2"
        ? Activedata
        : allData === "3"
        ? inActiveData
        : [];
    if (allData === "1") {
      const results = identifier.filter((post: any) => {
        var a, b;
        if (e.target.value === "") return userData1;
        a = post.firstName.toLowerCase().includes(e.target.value.toLowerCase());
        b = post.email.toLowerCase().includes(e.target.value.toLowerCase());
        return a || b;
      });
      setstate({
        query: e.target.value,
        userData1: results,
      });
    } else if (allData === "2") {
      const results = identifier.filter((post: any) => {
        var a, b;
        if (e.target.value === "") return userData1;
        a = post.firstName.toLowerCase().includes(e.target.value.toLowerCase());
        b = post.email.toLowerCase().includes(e.target.value.toLowerCase());
        return a || b;
      });
      setstate({
        query: e.target.value,
        Activedata: results,
      });
    } else if (allData === "3") {
      const results = identifier.filter((post: any) => {
        var a, b;
        if (e.target.value === "") return userData1;
        a = post.firstName.toLowerCase().includes(e.target.value.toLowerCase());
        b = post.email.toLowerCase().includes(e.target.value.toLowerCase());
        return a || b;
      });
      setstate({
        query: e.target.value,
        inActiveData: results,
      });
    } else {
      const results =
        userData1 &&
        userData1.filter((post: any) => {
          var a, b;
          if (e.target.value === "") return userData1;
          a = post.firstName
            .toLowerCase()
            .includes(e.target.value.toLowerCase());
          b = post.email.toLowerCase().includes(e.target.value.toLowerCase());
          return a || b;
        });
      setstate({
        query: e.target.value,
        userData1: results,
      });
    }
  };

  const searchAllData = state?.query !== "" ? state?.userData1 : userData1;
  const searchActiveData = state?.query !== "" ? state?.Activedata : Activedata;
  const searchInActiveData =
    state?.query !== "" ? state?.inActiveData : inActiveData;
  return (
    <Layout>
      <Sidebar />
      <Content className="contentcss">
        <div className="backflex">
          <div className="btndivsearch">
            <Button
              onClick={() => handleAlldata("all")}
              type="link"
              className={tabClassName ? "active" : ""}
            >
              All({userData1 && userData1.length})
            </Button>
            <Button
              type="link"
              onClick={() => handleAlldata("Active")}
              className={tab1ClassName ? "active" : ""}
            >
              Active({ActiveData && ActiveData?.length})
            </Button>
            <Button
              type="link"
              onClick={() => handleAlldata("Inactive")}
              className={tab2ClassName ? "active" : ""}
            >
              Inactive({NewData && NewData?.length})
            </Button>
          </div>
          <div className="positioncss">
            <Input
              onChange={handleChange}
              value={state.query}
              type="search"
              placeholder="Search..."
            />
          </div>
          <div style={{ marginLeft: "50%" }}>
            <Link href="/admin/user/add">
              <Button>Add User</Button>
            </Link>
          </div>
        </div>
        <div className="mainuserdiv">
          {allData === "1" && userData1 !== null ? (
            //all data on active
            <Table
              dataSource={searchAllData}
              columns={columns}
              pagination={{
                pageSize: searchAllData?.length,
                total: searchAllData?.length,
                showSizeChanger: true,
              }}
            />
          ) : allData === "2" && Activedata !== null ? (
            <Table
              dataSource={searchActiveData}
              columns={columns}
              pagination={{
                pageSize: 10,
                total: searchActiveData?.length,
                showSizeChanger: true,
              }}  
            />
          ) : allData === "3" && inActiveData !== null ? (
            <Table
              dataSource={searchInActiveData}
              columns={columns}
              pagination={{
                pageSize: 10,
                total: searchInActiveData?.length,
                showSizeChanger: true,
              }}
            />
          ) : (
            //on page reload
            <Table
              dataSource={searchAllData}
              columns={columns}
              pagination={{
                pageSize: 10,
                total: searchAllData?.length,
                showSizeChanger: true,
              }}
            />
          )}
        </div>
      </Content>
    </Layout>
  );
}
