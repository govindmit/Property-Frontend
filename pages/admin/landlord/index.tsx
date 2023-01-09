import * as React from "react";
import { useEffect, useState } from "react";
import Sidebar from "../../sidebar";
import { Divider, Layout, Menu, Modal, Popconfirm, Popover, Table, theme } from "antd";
import Link from "next/link";
import { Button } from "antd";
import { Input, Space } from 'antd';
import { AudioOutlined, DeleteOutlined, EditFilled, ExclamationCircleFilled, MoreOutlined } from '@ant-design/icons';
export interface UserDataTypes {
  address: String,
  email: String,
  id: Number,
  name: String,
  status: String,
}

export default function UserListing() {
  const { Header, Sider, Content } = Layout;
  const { confirm } = Modal;
  const [state, setstate] = useState<UserDataTypes | any>({ query: "", list: [] });
  const [userData, setUserData] = useState<UserDataTypes | any>('')
  const [allData, setAllData] = useState('');
  const [NewData, setNewData] = useState<UserDataTypes | any>('');
  const [ActiveData, setActiveNewData] = useState<UserDataTypes | any>('')
  const [inActiveData, setINactiveData] = useState<UserDataTypes | any>('')
  const [Activedata, setActiveData] = useState<UserDataTypes | any>('')
  const [tabClassName, setTabClassName] = useState<UserDataTypes | any>('')
  const [tab1ClassName, setTab1ClassName] = useState<UserDataTypes | any>('')
  const [tab2ClassName, setTab2ClassName] = useState<UserDataTypes | any>('')


  const handleDelete = () => {
    confirm({
      title: 'Are you sure delete this landLord?',
      icon: <ExclamationCircleFilled />,
      content: '',
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk() {
        console.log('OK', userData);
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  }

  const content = (
    <div>
      <p style={{ textAlign: "center", cursor: "pointer" }}><Link href={`/admin/landlord/edit/${userData.id}`}><EditFilled style={{ color: "#4096ff" }} /></Link></p>
      <p style={{ textAlign: "center", cursor: "pointer" }}> <DeleteOutlined style={{ color: "red" }} onClick={handleDelete} /></p>
      <Link href={`/admin/landlord/view/${userData.id}`}> <Button style={{ textAlign: "center" }} type="link">View</Button></Link>
    </div>
  );
  const { Search } = Input;
  const data = [
    {
      id: 1,
      firstName: "Leanne ",
      lastName: "Graham",
      email: "Sincere@april.com",
      phone: 9998887776,
      noOfProperty: 3,
      status: "Active",
      address: "London Kulas Light Apt. 556",
      website: "https://tekolio.com/",
    },
    {
      id: 2,
      firstName: "Ervin ",
      lastName: "Howell",
      email: "Shanna@melissa.org",
      phone: 9998887776,
      noOfProperty: 6,
      status: "Active",
      address: "New York Victor Plains Suite 879",
      website: "anastasia.net",
    },
    {
      id: 3,
      firstName: "Clementine ",
      lastName: "Bauch",
      email: "Nathan@yesenia.net",
      phone: 9998887776,
      noOfProperty: 2,
      status: "Active",
      address: "Douglas Extension uitzipcod",
      website: "ramiro.info",
    },
    {
      id: 4,
      firstName: "Patricia ",
      lastName: "Lebsack",
      email: "Julianne.OConner@kory.org",
      phone: 9998887776,
      noOfProperty: 1,
      status: "Active",
      address: "Hoeger Mal Apt. 692 South Elvis",
      website: "kale.biz",
    },
    {
      id: 5,
      firstName: "Chelsey ",
      lastName: "Dietrich",
      email: "Lucio_Hettinger@annie.com",
      phone: 9998887776,
      noOfProperty: 2,
      status: "Inactive",
      address: "Skiles ks Suit 51 Roscoevi",
      website: "demarco.info",
    },
    {
      id: 6,
      firstName: "Dennis ",
      lastName: "Schulist",
      email: "Karley_Dach@jasper.net",
      phone: 9998887776,
      noOfProperty: 2,
      status: "Active",
      address: "Norberto Crossing",
      website: "ola.org",
    },
    {
      id: 7,
      firstName: "Kurtis ",
      lastName: "Weissnat",
      email: "Telly.Hoeger@billy.com",
      phone: 9998887776,
      noOfProperty: 2,
      status: "Active",
      address: "Rex Tra Suite 2 Howemouth",
      website: "elvis.io",
    },
    {
      id: 8,
      firstName: "Nicholas",
      lastName: "Runolfsdottir",
      email: "Sherwood@rosamond.net",
      phone: 9998887776,
      noOfProperty: 2,
      status: "Active",
      address: "Ellsworth mit Sui 729 Aliyavi",
      website: "jacynthe.com",
    },
    {
      id: 9,
      firstName: "Glenna ",
      lastName: "Reichert",
      email: "Chaim_McDermott@dana.org",
      phone: 9998887776,
      noOfProperty: 2,
      status: "Active",
      address: "Dayna Park uitzipcod",
      website: "conrad.com",
    },
    {
      id: 10,
      firstName: "Clementina ",
      lastName: "DuBuque",
      email: "Rey.Padberg@karina.com",
      phone: 9998887776,
      noOfProperty: 2,
      status: "Active",
      address: "Kattie Turnpike Suite 198 Lebsackbury",
      website: "ambrose.net",
    },
    {
      id: 11,
      firstName: "Leanne ",
      lastName: "Graham",
      email: "Sincere@april.com",
      phone: 9998887776,
      noOfProperty: 2,
      status: "Active",
      address: "London Kulas Light Apt. 556",
      website: "https://tekolio.com/",
    },
    {
      id: 12,
      firstName: "Ervin ",
      lastName: "Howell",
      email: "Shanna@melissa.org",
      phone: 9998887776,
      noOfProperty: 2,
      status: "Active",
      address: "New York Victor Plains Suite 879",
      website: "anastasia.net",
    },
    {
      id: 13,
      firstName: "Clementine ",
      lastName: "Bauch",
      email: "Nathan@yesenia.net",
      phone: 9998887776,
      noOfProperty: 2,
      status: "Active",
      address: "Douglas Extension uitzipcod",
      website: "ramiro.info",
    },
    {
      id: 14,
      firstName: "Patricia ",
      lastName: "Lebsack",
      email: "Julianne.OConner@kory.org",
      phone: 9998887776,
      noOfProperty: 2,
      status: "Active",
      address: "Hoeger Mal Apt. 692 South Elvis",
      website: "kale.biz",
    },
    {
      id: 15,
      firstName: "Chelsey ",
      lastName: "Dietrich",
      email: "Lucio_Hettinger@annie.com",
      phone: 9998887776,
      noOfProperty: 2,
      status: "Inactive",
      address: "Skiles ks Suit 51 Roscoevi",
      website: "demarco.info",
    },
    {
      id: 16,
      firstName: "Dennis ",
      lastName: "Schulist",
      email: "Karley_Dach@jasper.net",
      phone: 9998887776,
      noOfProperty: 2,
      status: "Active",
      address: "Norberto Crossing",
      website: "ola.org",
    },
    {
      id: 17,
      firstName: "Kurtis ",
      lastName: "Weissnat",
      email: "Telly.Hoeger@billy.com",
      phone: 9998887776,
      noOfProperty: 2,
      status: "Active",
      address: "Rex Tra Suite 2 Howemouth",
      website: "elvis.io",
    },
    {
      id: 18,
      firstName: "Nicholas",
      lastName: "Runolfsdottir",
      email: "Sherwood@rosamond.net",
      phone: 9998887776,
      noOfProperty: 2,
      status: "Active",
      address: "Ellsworth mit Sui 729 Aliyavi",
      website: "jacynthe.com",
    },
    {
      id: 19,
      firstName: "Glenna ",
      lastName: "Reichert",
      email: "Chaim_McDermott@dana.org",
      phone: 9998887776,
      noOfProperty: 2,
      status: "Active",
      address: "Dayna Park uitzipcod",
      website: "conrad.com",
    },
    {
      id: 20,
      firstName: "Clementina ",
      lastName: "DuBuque",
      email: "Rey.Padberg@karina.com",
      phone: 9998887776,
      noOfProperty: 2,
      status: "Active",
      address: "Kattie Turnpike Suite 198 Lebsackbury",
      website: "ambrose.net",
    },
    {
      id: 21,
      firstName: "Clementine ",
      lastName: "Bauch",
      email: "Nathan@yesenia.net",
      phone: 9998887776,
      noOfProperty: 2,
      status: "Active",
      address: "Douglas Extension uitzipcod",
      website: "ramiro.info",
    },
    {
      id: 22,
      firstName: "Patricia ",
      lastName: "Lebsack",
      email: "Julianne.OConner@kory.org",
      phone: 9998887776,
      noOfProperty: 2,
      status: "Active",
      address: "Hoeger Mal Apt. 692 South Elvis",
      website: "kale.biz",
    },

  ]
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
      key: "phone",
      title: "Phone",
      dataIndex: "phone",
    },
    {
      key: "noOfProperty",
      title: "No. of Property",
      dataIndex: "noOfProperty",
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
              &emsp;&nbsp;<MoreOutlined
                onClick={() => handleClick(record)}
              />
            </Popover>
          </>
        );
      },
    },
  ]
  const handleClick = (data: any) => {
    setUserData(data)
  }
  useEffect(() => {
    let newdata = data.filter((ae) => {
      return ae.status === "Inactive"
    });
    let newactivedata = data.filter((ae) => {
      return ae.status === "Active"
    });
    setActiveNewData(newactivedata)
    setNewData(newdata)
  },[])

  const handleAlldata = (val: String) => {
    if (val === 'all') {
      if (allData === "1") {
        setTabClassName('')
        setTab1ClassName('')
        setTab2ClassName('')

      } else {
        setAllData("1")
        setTabClassName('active')
        setTab1ClassName('')
        setTab2ClassName('')
      }

    } else if (val === 'active') {
      setAllData("2")
      setActiveData(ActiveData)
      setTab1ClassName('active')
      setTabClassName("")
      setTab2ClassName("")
    } else if (val === 'inactive') {
      setAllData("3")
      setTab2ClassName('active')
      setTabClassName('')
      setTab1ClassName('')
      setINactiveData(NewData)
    } else {
      setAllData("")
    }
  }
  const handleChange = (e: any) => {
    const identifier = (allData === '1' ? data : allData === '2' ? Activedata : allData === '3' ? inActiveData : [])
    if (allData === '1') {

      const results = identifier.filter((post: any) => {
        var a, b;
        if (e.target.value === "") return data;
        a = post.firstName.toLowerCase().includes(e.target.value.toLowerCase());
        b = post.lastName.toLowerCase().includes(e.target.value.toLowerCase());
        return a || b;
      });
      setstate({
        query: e.target.value,
        data: results
      });
    } else if (allData === '2') {
      const results = identifier.filter((post: any) => {
        var a, b;
        if (e.target.value === "") return data;
        a = post.firstName.toLowerCase().includes(e.target.value.toLowerCase());
        b = post.lastName.toLowerCase().includes(e.target.value.toLowerCase());
        return a || b;
      });
      setstate({
        query: e.target.value,
        Activedata: results,

      });
    } else if (allData === '3') {
      const results = identifier.filter((post: any) => {
        var a, b;
        if (e.target.value === "") return data;
        a = post.firstName.toLowerCase().includes(e.target.value.toLowerCase());
        b = post.lastName.toLowerCase().includes(e.target.value.toLowerCase());
        return a || b;
      });
      setstate({
        query: e.target.value,
        inActiveData: results,

      });
    } else {
      const results = data.filter((post: any) => {
        var a, b;
        if (e.target.value === "") return data;
        a = post.firstName.toLowerCase().includes(e.target.value.toLowerCase());
        b = post.lastName.toLowerCase().includes(e.target.value.toLowerCase());
        return a || b;
      });
      setstate({
        query: e.target.value,
        data: results
      });
    }
  };

  const searchAllData = state?.query !== "" ? state?.data : data
  const searchActiveData = state?.query !== "" ? state?.Activedata : Activedata
  const searchInActiveData = state?.query !== "" ? state?.inActiveData : inActiveData

  return (
    <Layout>
      <Sidebar />
      <Content className="contentcss">
        <div className="backflex">
          <div className="btndivsearch">
            <Button onClick={() => handleAlldata('all')} type="link" className={tabClassName ? 'active' : ''}>All({data.length})</Button>
            <Button type="link" onClick={() => handleAlldata('active')} className={tab1ClassName ? 'active' : ''}>Active({ActiveData?.length})</Button>
            <Button type="link" onClick={() => handleAlldata('inactive')} className={tab2ClassName ? 'active' : ''}>Inactive({NewData?.length})</Button>
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
            <Link href="/admin/landlord/add"><Button>Add Landlord</Button></Link>
          </div>
        </div>
        <div className="mainuserdiv">
          {
            allData === "1" && data !== null ?
              //all data on active
              <Table
                dataSource={searchAllData}
                columns={columns}
                pagination={{ pageSize: searchAllData?.length, total: searchAllData?.length, showSizeChanger: true }}
              />
              :
              allData === "2" && Activedata !== null ? <Table
                dataSource={searchActiveData}
                columns={columns}
                pagination={{ pageSize: 10, total: searchActiveData?.length, showSizeChanger: true }}
              /> : allData === "3" && inActiveData !== null ? <Table
                dataSource={searchInActiveData}
                columns={columns}
                pagination={{ pageSize: 10, total: searchInActiveData?.length, showSizeChanger: true }}
              /> :
                //on page reload
                <Table
                  dataSource={searchAllData}
                  columns={columns}
                  pagination={{ pageSize: 10, total: searchAllData?.length, showSizeChanger: true }}
                />
          }
        </div>
      </Content>
    </Layout>
  );
}