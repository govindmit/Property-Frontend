import React, { useEffect, useState } from "react";
import Sidebar from "../../../sidebar";
import {
  Divider,
  InputNumber,
  Layout,
  Menu,
  message,
  Modal,
  Popconfirm,
  Popover,
  Table,
  theme,
} from "antd";
import { Button, Form, Input, Select, Upload } from "antd";
import ImgCrop from "antd-img-crop";
import Image from "next/image";
import { Avatar, Col, Radio, Row, Tabs } from "antd";
import type { FormInstance } from "antd/es/form";
import Router, { useRouter, withRouter } from "next/router";
import {
  ArrowLeftOutlined,
  LoadingOutlined,
  PlusOutlined,
  UploadOutlined,
  UserOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import type { FormItemProps } from "antd";
import { toast } from "react-toastify";
import axios from "axios";
import { Spin } from "antd";
import type { RcFile, UploadFile, UploadProps } from "antd/es/upload/interface";

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
  const { Content } = Layout;
  const [image, setImage] = useState<any>();
  const [photo, setPhoto] = useState<any>();
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [loading, setLoading] = useState<Boolean>(false);
  const { query } = useRouter();
  const [user, setUser] = useState<UserDataTypes | any>("");
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");
  const handleCancel = () => setPreviewOpen(false);
  const style: React.CSSProperties = { fontWeight: 558 };
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

  const onChange: UploadProps["onChange"] = ({ fileList: newFileList }) => {
    setFileList(newFileList);
    setImage(newFileList[0]?.originFileObj);
  };
  const beforeUpload = (file: RcFile) => {
    const isJpgOrPng =
      file.type === "image/jpeg" ||
      file.type === "image/png" ||
      file.type === "image/jpg";
    if (!isJpgOrPng) {
      message.error("You can only upload JPG/PNG file!");
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error("Image must smaller than 2MB!");
    }
    return isLt2M;
  };
  const onPreview = async (file: UploadFile) => {
    let src = file.url as string;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj as RcFile);
        reader.onload = () => resolve(reader.result as string);
      });
    }
    setPreviewImage(file.thumbUrl || (file.preview as string));
    setPreviewOpen(true);
    setPreviewTitle(
      file.name || file.url!.substring(file.url!.lastIndexOf("/") + 1)
    );
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
    let { firstName, lastName, email, status, role, phone, gender } =
      values.user.name;
    let requesData = {
      firstName: firstName === undefined ? user.firstName : firstName,
      lastName: lastName === undefined ? user.lastName : lastName,
      email: email === undefined ? user.email : email,
      status: status === undefined ? user.status : status,
      role: role === undefined ? user.role?.id : role,
      phone: phone === undefined ? user.phone : phone,
      gender: gender === undefined ? user.gender : gender,
      profilPic: image,
    };
    setLoading(true);
    try {
      await axios
        .put(
          `https://api-property.mangoitsol.com/api/user/${query?.index}`,
          requesData,
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
  };
  const inputStyle: React.CSSProperties = {
    padding: "5px 12px",
    borderRadius: "inherit",
    background: "#d1d1d1"
  };

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
        <h2 className="textuseruser">Edit Landlord Detail</h2>
        <div className="btncontainer">
          <Form name="form_item_path" layout="vertical" onFinish={onFinish}>
            <div>
              <MyFormItemGroup prefix={["user"]}>
                <MyFormItemGroup prefix={["name"]}>
                  <div>
                    <div className="imagecenter1">
                      <ImgCrop rotate>
                        <Upload
                          style={{ borderRadius: "78px !important" }}
                          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                          listType="picture-card"
                          fileList={fileList}
                          beforeUpload={beforeUpload}
                          onChange={onChange}
                          onPreview={onPreview}
                        >
                          {fileList.length < 1 && (
                           user && user.profilPic !=""?
                           <Image style={{borderRadius:"65px"}} src={user?.profilPic} alt="image" width={100} height={100}/>
                           : 
                            <Avatar
                              size={64}
                              icon={<UserOutlined />}
                              className="avatarcss"
                            />
                          )}
                        </Upload>
                      </ImgCrop>
                      <Modal
                        open={previewOpen}
                        title={previewTitle}
                        footer={null}
                        onCancel={handleCancel}
                      >
                        <Image
                          alt="example"
                          width={470}
                          height={400}
                          src={previewImage && previewImage}
                        />
                      </Modal>
                      <p
                        style={{
                          color: "grey",
                          fontSize: "11px",
                          marginTop: "2px",
                        }}
                      >
                        Upload a profile picture
                      </p>
                    </div>
                    <Row gutter={{ xs: 4, sm: 8, md: 12, lg: 20 }}>
                      <Col className="gutter-row" span={1}></Col>
                      <Col className="gutter-row" span={10}>
                        <MyFormItem
                          name="firstName"
                          label="Landlord First Name"
                          style={style}
                          rules={[
                            {
                             min:2,
                              message: "Please enter at least 2 characters",
                            },
                          ]}
                        >
                          <Input
                            style={inputStyle}
                            defaultValue={user && user.firstName}
                          />
                        </MyFormItem>
                      </Col>
                      <Col className="gutter-row" span={2}></Col>

                      <Col className="gutter-row" span={10}>
                        <MyFormItem
                          name="lastName"
                          style={style}
                          label="Landlord Last Name"
                          rules={[
                            {
                             min:2,
                              message: "Please enter at least 2 characters",
                            },
                          ]}
                        >
                          <Input style={inputStyle} defaultValue={user && user.lastName}  />
                        </MyFormItem>
                      </Col>
                    </Row>
                    <Row gutter={{ xs: 4, sm: 8, md: 12, lg: 20 }}>
                      <Col className="gutter-row" span={1}></Col>
                      <Col className="gutter-row" span={10}>
                        <MyFormItem
                          name="email"
                          label="Landlord Email"
                          style={style}
                          rules={[
                            {
                              type: "email",
                              message: "Landlord email is not valid!",
                            },
                          ]}
                        >
                          <Input style={inputStyle} defaultValue={user && user.email}/>
                        </MyFormItem>
                      </Col>
                      <Col className="gutter-row" span={2}></Col>
                      <Col className="gutter-row" span={10}>
                        <MyFormItem
                          name="phone"
                          label="Landlord Phone"
                          style={style}
                          rules={[
                            {
                              min: 10,
                              max: 10,
                              message: "Landlord phone number must be 10 digit",
                            },
                          ]}
                        >
                          <Input
                            type="number"
                            // addonBefore={prefixSelector}
                            style={inputStyle}
                            defaultValue={user && user.phone}
                          />
                        </MyFormItem>
                      </Col>
                    </Row>
                    <Row gutter={{ xs: 4, sm: 8, md: 12, lg: 20 }}>
                      <Col className="gutter-row" span={1}></Col>
                      <Col className="gutter-row" span={10}>
                        <MyFormItem
                          name="role"
                          label="Landlord Role"
                          style={style}
                          
                        >
                          <Select
                            placeholder="Select role"
                            onChange={onRoleChange}
                            allowClear
                            defaultValue={user && user?.role?.title}
                            className="dropdownadmin"

                          >
                            <Option value="1">Admin</Option>
                            <Option value="2">User</Option>
                            <Option value="3">Brokerage</Option>
                            <Option value="4">Landlord</Option>
                            {/* <Option value="5">Agent</Option> */}
                          </Select>
                        </MyFormItem>
                      </Col>
                      <Col className="gutter-row" span={2}></Col>
                      <Col className="gutter-row" span={10}>
                        <MyFormItem
                          name="gender"
                          label="Landlord Gender"
                          style={style}
                         
                        >
                          <Select
                            placeholder="Select your gender"
                            onChange={onGenderChange}
                            allowClear
                            defaultValue={user && user.gender}
                            className="dropdownadmin"

                          >
                            <Option value="male">male</Option>
                            <Option value="female">female</Option>
                          </Select>
                        </MyFormItem>
                      </Col>
                    </Row>
                    <Row gutter={{ xs: 4, sm: 8, md: 12, lg: 20 }}>
                      <Col className="gutter-row" span={1}></Col>
                      <Col className="gutter-row" span={22}>
                        <MyFormItem
                          name="status"
                          label="Landlord Status"
                          style={style}
                         
                        >
                          <Select
                            placeholder="Select a option and change status"
                            onChange={onStatusChange}
                            allowClear
                            defaultValue={user && user.status}
                            className="dropdownadmin"
                          
                          >
                            <Option value="Active">Active</Option>
                            <Option value="Inactive">InActive</Option>
                          </Select>
                        </MyFormItem>
                      </Col>
                    </Row>
                  </div>
                </MyFormItemGroup>
              </MyFormItemGroup>
              <br />
              <br />
              <div className="btnsublanduser">
                {loading ? (
                  <Button type="primary" className="submitbutton22user">
                    <Spin indicator={antIcon} />
                  </Button>
                ) : (
                  <Button htmlType="submit" className="btnupdateuser">
                    Update
                  </Button>
                )}
              </div>
            </div>
          </Form>
        </div>
      </Content>
    </Layout>
  );
}
