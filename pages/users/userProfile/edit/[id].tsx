import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { Col, Row, Button, Avatar, Form, Input, Spin } from "antd";
import { ArrowLeftOutlined, UserOutlined } from "@ant-design/icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { userType } from "../../../../types/userTypes";
import { useRouter } from "next/router";
import userService from "../../../../services/userService";
import UserHeader from "../../userHeader";
import { Upload } from "antd";
// import ImgCrop from "antd-img-crop";
import type { RcFile, UploadFile, UploadProps } from "antd/es/upload/interface";
import Loader from "../../../common/loader";
const ImgCrop = dynamic(import('antd-img-crop'), { ssr: false })
type LayoutType = Parameters<typeof Form>[0]["layout"];

const UserProfile = () => {
  const router = useRouter();
  const [showPreImage, setShowPreImage] = useState(false);

  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState<LayoutType>("vertical");
  const [firstName, setFirstName] = useState<userType | any>("");
  const [lastName, setLastName] = useState<userType | any>("");
  const [profilPic, setProfilePic] = useState<userType | any>();
  const [phone, setPhone] = useState<userType | any>();
  const [gender, setGender] = useState<userType | any>("");
  const [reraNumber, setReraNumber] = useState<userType | any>();
  const [email, setEmail] = useState<userType | any>();
  const [dataObj, setDataObj] = useState<userType | any>({});
  const [loadings, setLoadings] = useState<boolean>(false);
  const [isShow, setIsShow] = useState(false);
  const [photo, setPhoto] = useState<any>();

  const [fnameErr, setFNameErr] = useState(false);
  const [lnameErr, setLNameErr] = useState(false);
  const [phoneErr, setPhoneErr] = useState(false);
  const [emailErr, setEmailErr] = useState(false);
  const [genderErr, setGenderErr] = useState(false);
  const [isError, setIsError] = useState(false);
  const { id }: any = router.query;

  const [fileList, setFileList] = useState<UploadFile[]>([
    {
      uid: "-1",
      name: "image.png",
      status: "done",
      url: dataObj?.profilPic,
    },
  ]);

  useEffect(() => {
    getUserProfile();
  }, []);

  const handleBack = () => {
    router.push("/users/myProfile");
  };

  const getUserProfile = async () => {
    setIsShow(true);
    const token: any = localStorage.getItem("webToken")
      ? localStorage.getItem("webToken")
      : null;
    const a = JSON.parse(token);
    console.log(";;;;;;", id);

    await userService.getUserProfile(id, a).then((data) => {
      if (data.data != null) {
        setDataObj(data?.data);
        setIsShow(false);
        setFirstName(data?.data?.firstName);
        setLastName(data?.data?.lastName);
        setPhone(data?.data?.phone);
        setEmail(data?.data?.email);
        setGender(data?.data?.gender);
        setProfilePic(data?.data?.profilPic);
      }
    });
  };

  const onFormLayoutChange = ({ layout }: { layout: LayoutType }) => {
    setFormLayout(layout);
  };

  const formItemLayout =
    formLayout === "horizontal"
      ? {
          labelCol: { span: 4 },
          wrapperCol: { span: 14 },
        }
      : null;

  const buttonItemLayout =
    formLayout === "horizontal"
      ? {
          wrapperCol: { span: 14, offset: 4 },
        }
      : null;

  const updatepRofileFn = async () => {
    setLoadings(true);
    const token: any = localStorage.getItem("webToken")
      ? localStorage.getItem("webToken")
      : null;
    const a = JSON.parse(token);
    if (!firstName) {
      setFNameErr(true);
    }
    if (!lastName) {
      setLNameErr(true);
    }
    if (!phone) {
      setPhoneErr(true);
    }
    if (!email) {
      setEmailErr(true);
    }
    if (!gender) {
      setGenderErr(true);
    }

    const userData = new FormData();
    const data = {
      firstName: firstName,
      lastName: lastName,
      phone: phone,
      gender: gender,
      profilPic: profilPic,
      email: email,
    };

    userData.append(firstName, firstName);
    userData.append(lastName, lastName);
    userData.append(phone, phone);
    userData.append(gender, gender);
    userData.append(profilPic, profilPic);
    userData.append(email, email);

    if (!firstName || !lastName || !phone || !gender || !email || isError) {
      toast.error("please fill all fields correctly", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      await userService.updateprofile(id, data, a).then((data) => {
        if (data) {
          setLoadings(false);
        }
        router.push("/users/myProfile");
      });
    }
  };

  const onChange: UploadProps["onChange"] = ({
    fileList: newFileList,
  }: any) => {
    setFileList(newFileList);
    setProfilePic(newFileList[0].originFileObj);

    let reader = new FileReader();
    let file = newFileList[0].originFileObj;
    reader.onloadend = () => {
      setShowPreImage(true);
      setPhoto(reader.result);
    };
    reader.readAsDataURL(file);
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
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
  };

  return (
    <div>
      <UserHeader />
      <div className="userProfile">
        <ToastContainer />
        {isShow ? (
          <Loader/>
        ) : (
          <>
            <div className="backBtnCls">
              <Row>
                <Col span={18} push={6}>
                  <Button
                    type="text"
                    className="btncss backbtnn"
                    onClick={handleBack}
                    icon={<ArrowLeftOutlined />}
                  >
                    Back
                  </Button>
                </Col>
              </Row>
            </div>
            <div className="userProHeadingCls">
              <Row>
                <Col span={18} push={6}>
                  <h1>Your Details</h1>
                </Col>
              </Row>
            </div>
            <div className="userProfilImg">
              {showPreImage ? (
                <Avatar size={250} src={photo} />
              ) : (
                <Avatar size={250} src={dataObj?.profilPic} />
              )}

              <ImgCrop rotate>
                <Upload
                  className="imageTagClass"
                  action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                  listType="picture-card"
                  onChange={onChange}
                >
                  {fileList.length < 5 && "+ Upload"}
                </Upload>
              </ImgCrop>

              <div style={{ color: "gray", marginLeft: "40px", marginTop: "15px" }}> {" "} upload a profile picture{" "} </div>
            </div>

            <div className="userProFormCls">
              <Row>
                <Col span={12} offset={6}>
                  <Row>
                    <Col span={8}>
                      <Form
                        {...formItemLayout}
                        layout={formLayout}
                        form={form}
                        initialValues={{ layout: formLayout }}
                        onValuesChange={onFormLayoutChange}
                      >
                        <Form.Item
                          label="First Name"
                          className="userFormLableCls"
                          // name="First Name"
                          rules={[
                            {
                              required: true,
                              message: "Please input your First Name!",
                            },
                          ]}
                        >
                          <Input
                            placeholder="input placeholder"
                            defaultValue={dataObj?.firstName}
                            onChange={(e) => {
                              setFirstName(e.target.value);
                            }}
                            onKeyUp={() => {
                              setFNameErr(false);
                            }}
                          />
                          {fnameErr ? (
                            <span style={{ color: "red" }}>
                              Please fill first name.
                            </span>
                          ) : (
                            ""
                          )}
                        </Form.Item>
                        <Form.Item
                          label="Mobile"
                          className="userFormLableCls"
                          rules={[
                            {
                              required: true,
                              message: "Please input your Mobile number",
                            },
                          ]}
                        >
                          <Input
                            placeholder="input placeholder"
                            defaultValue={dataObj?.phone}
                            onChange={(e) => {
                              setPhone(e.target.value);
                              if (e.target.value.length > 10) {
                                setIsError(true);
                              }
                            }}
                            onKeyUp={(e: any) => {
                              setPhoneErr(false);
                              if (e.target.value.length === 10) {
                                setIsError(false);
                              }
                            }}
                          />
                          {isError ? (
                            <span style={{ color: "red" }}>
                              Phone number must be 10 digits.
                            </span>
                          ) : (
                            ""
                          )}
                          {phoneErr ? (
                            <span style={{ color: "red" }}>
                              Please fill Phone number.
                            </span>
                          ) : (
                            ""
                          )}
                        </Form.Item>

                        <Form.Item
                          label="Gender"
                          className="userFormLableCls"
                          rules={[
                            {
                              required: true,
                              message: "Please input your Gender",
                            },
                          ]}
                        >
                          <Input
                            placeholder="input placeholder"
                            defaultValue={dataObj?.gender}
                            onChange={(e) => {
                              setGender(e.target.value);
                            }}
                            onKeyUp={() => {
                              setGenderErr(false);
                            }}
                          />
                          {genderErr ? (
                            <span style={{ color: "red" }}>
                              Please fill gender value.
                            </span>
                          ) : (
                            ""
                          )}
                        </Form.Item>
                      </Form>
                    </Col>
                    <Col span={8} offset={8}>
                      <Form
                        {...formItemLayout}
                        layout={formLayout}
                        form={form}
                        initialValues={{ layout: formLayout }}
                        onValuesChange={onFormLayoutChange}
                      >
                        <Form.Item
                          label="Last Name"
                          className="userFormLableCls"
                          rules={[
                            {
                              required: true,
                              message: "Please input your last name",
                            },
                          ]}
                        >
                          <Input
                            placeholder="input placeholder"
                            defaultValue={dataObj?.lastName}
                            onChange={(e) => {
                              setLastName(e.target.value);
                            }}
                            onKeyUp={() => {
                              setLNameErr(false);
                            }}
                          />
                          {lnameErr ? (
                            <span style={{ color: "red" }}>
                              Please fill last name.
                            </span>
                          ) : (
                            ""
                          )}
                        </Form.Item>
                        <Form.Item
                          label="Email"
                          className="userFormLableCls"
                          rules={[
                            {
                              required: true,
                              message: "Please input your email",
                            },
                          ]}
                        >
                          <Input
                            placeholder="input placeholder"
                            defaultValue={dataObj?.email}
                            onChange={(e) => {
                              setEmail(e.target.value);
                            }}
                            onKeyUp={() => {
                              setEmailErr(false);
                            }}
                          />
                          {emailErr ? (
                            <span style={{ color: "red" }}>
                              Please fill email.
                            </span>
                          ) : (
                            ""
                          )}
                        </Form.Item>
                      </Form>
                    </Col>
                  </Row>
                </Col>
              </Row>

              <Row style={{ marginTop: "25px", marginBottom: "25px" }}>
                <Col xs={2} sm={4} md={6} lg={8} xl={10}></Col>
                <Col xs={20} sm={16} md={12} lg={8} xl={4}>
          
                  <Button
                    type="primary"
                    loading={loadings}
                    style={{ backgroundColor: "gray", width: "60%" }}
                    onClick={() => {
                      updatepRofileFn();
                    }}
                  >
                    Confirm
                  </Button>
                </Col>
                <Col xs={2} sm={4} md={6} lg={8} xl={10}></Col>
              </Row>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
