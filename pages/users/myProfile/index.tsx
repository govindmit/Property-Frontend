import React, { useEffect, useState } from "react";
import { Col, Row, Button, Avatar, Form, Input, Spin, Typography } from "antd";
import {
  ArrowLeftOutlined,
  UserOutlined,
  EditOutlined,
} from "@ant-design/icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { userType } from "../../../types/userTypes";

import userService from "../../../services/userService";
import Router from "next/router";
import UserHeader from "../userHeader";
type LayoutType = Parameters<typeof Form>[0]["layout"];
const { Title } = Typography;

const MyProfile = () => {
  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState<LayoutType>("vertical");
  const [firstName, setFirstName] = useState<userType | any>("");
  const [lastName, setLastName] = useState<userType | String>("");
  const [profilPic, setProfilePic] = useState<userType | any>();
  const [phone, setPhone] = useState<userType | any>();
  const [gender, setGender] = useState<userType | String>("");
  const [reraNumber, setReraNumber] = useState<userType | any>();
  const [email, setEmail] = useState<userType | String>();
  const [dataObj, setDataObj] = useState<userType | any>({});
  const [isShow, setIsShow] = useState(false);

  const [nameErr, setNameErr] = useState(false);

  useEffect(() => {
    getUserProfile();
  }, []);



  const getUserProfile = async () => {
    const token:any  = (localStorage.getItem('webToken') ? localStorage.getItem('webToken'):null)
    const a =JSON.parse(token)
    setIsShow(true);
    const id: number = 12;
    await userService.getUserProfile(id,a).then((data) => {
      if (data.data != null) {
        setDataObj(data?.data);
        setIsShow(false);
        setFirstName(data?.data?.firstName);
        setLastName(data?.data?.lastName);
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

  // const updatepRofileFn = async () => {
  //   if (!firstName) {
  //     setNameErr(true);
  //   }
  //   const id: number = 1;
  //   const data = {
  //     firstName: firstName,
  //     lastName: lastName,
  //     phone: phone,
  //     gender: gender,
  //     profilPic: profilPic,
  //     email: email,
  //     reraNumber: reraNumber,
  //   };

  //   userService.updateprofile(id, data,token).then((data) => {
  //     console.log(data);
  //     if (!firstName) {
  //       toast.error("please fill all fields", {
  //         position: "top-right",
  //         autoClose: 5000,
  //         hideProgressBar: false,
  //         closeOnClick: true,
  //         pauseOnHover: true,
  //         draggable: true,
  //         progress: undefined,
  //         theme: "light",
  //       });
  //     } else if (data.status === 200) {
  //       toast.success("success", {
  //         position: "top-right",
  //         autoClose: 5000,
  //         hideProgressBar: false,
  //         closeOnClick: true,
  //         pauseOnHover: true,
  //         draggable: true,
  //         progress: undefined,
  //         theme: "light",
  //       });
  //       window.location.reload();
  //     }
  //   });
  // };

  const handleEdit = () => {
    Router.push(`/users/userProfile/edit/${11}`); 
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
              <Col span={12} push={6}>
                <Button
                  type="text"
                  className="btncss backbtnn"
                  //   onClick={handleBack}
                  icon={<ArrowLeftOutlined />}
                >
                  Back
                </Button>
              </Col>
              <Col span={12} push={6}>
                <Button
                  type="text"
                  className="btncss backbtnn"
                  onClick={() => {
                    handleEdit();
                  }}
                  icon={<EditOutlined />}
                >
                  Edit
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
            
            />
        
          </div>

          <div className="myProfile">
            <Row className="myProfileRow">
              <Col xs={{ span: 12, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                <Title level={4}>FirstName</Title>
                <span>{dataObj.firstName}</span>
              </Col>
              <Col xs={{ span: 12, offset: 1 }} lg={{ span: 6, offset: 2 }}>
              <Title level={4}>LastName</Title>
                <span>{dataObj.lastName}</span>
              </Col>
            </Row>
            <Row className="myProfileRow">
              <Col xs={{ span: 12, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                <Title level={4}>Mobile</Title>
                <span>{dataObj.phone}</span>
              </Col>
              <Col xs={{ span: 12, offset: 1 }} lg={{ span: 6, offset: 2 }}>
              <Title level={4}>Email</Title>
                <span>{dataObj.email}</span>
              </Col>
            </Row>
            <Row className="myProfileRow">
              <Col xs={{ span: 12, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                <Title level={4}>Gender</Title>
                <span>{dataObj.gender}</span>
              </Col>
              {/* <Col xs={{ span: 12, offset: 1 }} lg={{ span: 6, offset: 2 }}>
              <Title level={4}>FirstName</Title>
                <span>dfdfsfs</span>
              </Col> */}
            </Row>
          </div>
        </>
      )}
    </div>
    </>
  );
};

export default MyProfile;
