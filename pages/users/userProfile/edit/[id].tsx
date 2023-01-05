import React, { useEffect, useState } from "react";
import { Col, Row, Button, Avatar, Form, Input, Spin } from "antd";
import { ArrowLeftOutlined, UserOutlined } from "@ant-design/icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { userType } from "../../../../types/userTypes";
import { useRouter } from "next/router";
import userService from "../../../../services/userService";
import UserHeader from "../../userHeader";
import axios from "axios";
type LayoutType = Parameters<typeof Form>[0]["layout"];

const UserProfile = () => {
  const router = useRouter();

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
  const [isShow, setIsShow] = useState(false);

  const [fnameErr, setFNameErr] = useState(false);
  const [lnameErr, setLNameErr] = useState(false);
  const [phoneErr, setPhoneErr] = useState(false);
  const [emailErr, setEmailErr] = useState(false);
  const [genderErr, setGenderErr] = useState(false);

  const { id } = router.query;

  useEffect(() => {
    getUserProfile();
  }, []);

  const getUserProfile = async () => {
    setIsShow(true);
    const id: number = 1;
    await userService.getUserProfile(id).then((data) => {
      if (data.data != null) {
        setDataObj(data?.data);
        setIsShow(false);
        setFirstName(data?.data?.firstName);
        setLastName(data?.data?.lastName);
        setPhone(data?.data?.phone)
        setEmail(data?.data?.email)
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

  const setImgFn = (image: any) => {
    if (image != null) {
      setProfilePic(image.target.files[0]);
    }
  };
console.log(profilPic);
  const updatepRofileFn = async () => {
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

    const id: number = 1;
    const userData = new FormData();
    const data = {
      firstName: firstName,
      lastName: lastName,
      phone: phone,
      gender: gender,
      profilPic: profilPic,
      email: email,
    };

    userData.append(firstName, firstName)
    userData.append(lastName, lastName)
    userData.append(phone, phone)
    userData.append(gender, gender)
    userData.append(profilPic, profilPic)
    userData.append(email, email)



    userService.updateprofile(id, data).then((data) => {
      
      if (!firstName || !lastName || !phone || !gender || !email) {
        console.log(firstName,';;',lastName,';;',phone,';;;',email,';;',gender,'ccc')
        toast.error("please fill all fields", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } else  {
        toast.success("success", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        router.push("/users/myProfile");
      }
    });
  };
  return (
    <>
        <UserHeader/>
    <div className="userProfile">
      <ToastContainer />
      {isShow ? (
        <Spin size="large" />
      ) : (
        <>
          <div className="backBtnCls">
            <Row>
              <Col span={18} push={6}>
                <Button
                  type="text"
                  className="btncss backbtnn"
                  //   onClick={handleBack}
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
            <Avatar
              size={250}
              // icon={<UserOutlined />}
              src={dataObj?.profilPic}
              style={{ cursor: "pointer" }}
            />
            <input
              type="file"
              multiple
              accept=".pdf,.jpeg,.png,.csv,.doc,.docx,.txt,.xlsx,.xls"
              className="imageTagClass"
              onChange={(e) => setImgFn(e)}
            />
            <div
              style={{ color: "gray", marginLeft: "40px", marginTop: "15px" }}
            >
              upload a profile picture
            </div>
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
                      >
                        <Input
                          placeholder="input placeholder"
                          defaultValue={dataObj?.firstName}
                          onChange={(e) => {
                            setFirstName(e.target.value);
                          }}
                          onKeyUp={() => { setFNameErr(false); }}
                        />
                        {fnameErr ? (
                          <span style={{ color: "red" }}>
                            Please fill first name
                          </span>
                        ) : (
                          ""
                        )}
                      </Form.Item>
                      <Form.Item label="Mobile" className="userFormLableCls">
                        <Input
                          placeholder="input placeholder"
                          defaultValue={dataObj?.phone}
                          onChange={(e) => {
                            setPhone(e.target.value);
                          }}
                          onKeyUp={()=>{setPhoneErr(false)}}
                        />
                         {phoneErr ? (
                          <span style={{ color: "red" }}>
                            Please fill Phone number
                          </span>
                        ) : (
                          ""
                        )}
                      </Form.Item>

                      <Form.Item label="Gender" className="userFormLableCls">
                        <Input
                          placeholder="input placeholder"
                          defaultValue={dataObj?.gender}
                          onChange={(e) => {
                            setGender(e.target.value);
                          }}
                          onKeyUp={()=>{setGenderErr(false)}}
                        />
                         {genderErr ? (
                          <span style={{ color: "red" }}>
                            Please fill gender value
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
                      <Form.Item label="Last Name" className="userFormLableCls">
                        <Input
                          placeholder="input placeholder"
                          defaultValue={dataObj?.lastName}
                          onChange={(e) => {
                            setLastName(e.target.value);
                          }}
                          onKeyUp={()=>{setLNameErr(false)}}
                        />
                         {lnameErr ? (
                          <span style={{ color: "red" }}>
                            Please fill last name
                          </span>
                        ) : (
                          ""
                        )}
                      </Form.Item>
                      <Form.Item label="Email" className="userFormLableCls">
                        <Input
                          placeholder="input placeholder"
                          defaultValue={dataObj?.email}
                          onChange={(e) => {
                            setEmail(e.target.value);
                          }}
                          onKeyUp={()=>{setEmailErr(false)}}
                        />
                         {emailErr ? (
                          <span style={{ color: "red" }}>
                            Please fill email
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
    </>
  );
};

export default UserProfile;
