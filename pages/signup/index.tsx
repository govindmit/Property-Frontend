import React, { useState } from "react";
import { Avatar, Col, Layout, Radio, Row, Tabs } from "antd";
import { Form, Input, Button } from "antd";
import type { FormItemProps } from "antd";
import { Checkbox } from "antd";
import type { CheckboxChangeEvent } from "antd/es/checkbox";
import { ArrowLeftOutlined, UserOutlined,CloseOutlined } from "@ant-design/icons";
import { Typography } from "antd";
import Router, { withRouter } from "next/router";
import { Select } from "antd";
import type { SizeType } from 'antd/es/config-provider/SizeContext';

export interface IAppProps {}

interface MyFormItemGroupProps {
  prefix: string | number | (string | number)[];
  children: React.ReactNode;
}

export default function App(props: IAppProps) {
  const [activeKey, setActiveKey] = React.useState("1");
  const [size, setSize] = useState<SizeType>('small'); // default is 'middle'

  const onKeyChange = (key: React.SetStateAction<string>) => setActiveKey(key);
  const { Title } = Typography;
  const { TabPane } = Tabs;
  const { Header, Footer, Sider, Content } = Layout;
  const MyFormItemContext = React.createContext<(string | number)[]>([]);
  const onFinish = (value: object) => {
    onKeyChange("2");
    console.log(value);
  };
  const handleBack = () => {
    setActiveKey("1");
  };
  const tabhandleBack = () => {
    setActiveKey("2");
  };
  const tabhandleBackreturn = () => {
    setActiveKey("4");
  };
  const tabhandleBackthird = () => {
    setActiveKey("3");
  };
  function toArr(
    str: string | number | (string | number)[]
  ): (string | number)[] {
    return Array.isArray(str) ? str : [str];
  }
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };
  const MyFormItemGroup = ({ prefix, children }: MyFormItemGroupProps) => {
    const prefixPath = React.useContext(MyFormItemContext);
    const concatPath = React.useMemo(
      () => [...prefixPath, ...toArr(prefix)],
      [prefixPath, prefix]
    );

    return (
      <MyFormItemContext.Provider value={concatPath}>
        { children }
      </MyFormItemContext.Provider>
    );
  };
  const onFinish1 = (value: object) => {
    setActiveKey("5");
    console.log(value);
  };
  const onFinish2 = (value: object) => {
    console.log(value);
  };
  const onFinish3 = (value: object) => {
    setActiveKey("7");
  };
  const onFinishagent=()=>{
    setActiveKey("9");
  }
  const MyFormItem = ({ name, ...props }: FormItemProps) => {
    const prefixPath = React.useContext(MyFormItemContext);
    const concatName =
      name !== undefined ? [...prefixPath, ...toArr(name)] : undefined;

    return <Form.Item name={concatName} {...props} />;
  };
  const handlefirst = () => {
    setActiveKey("4");
  };
  const onCheckBox = (e: CheckboxChangeEvent) => {
    console.log(`checked = ${e.target.checked}`);
  };
  const handleLandlord = () => {
    onKeyChange("3");
  };
  const handleBrokerage = () => {
    setActiveKey("6");
  };
  const tabhandleBackbrokerage = () => {
    setActiveKey("6");
  };
  const tabhandleBackBroker = () => {
    setActiveKey("2");
  };
  const tabhandleBackagent=()=>{
    setActiveKey("8");
  }
  const tabhandleReagent=()=>{
    setActiveKey("2");
  }
  const handleAgent = () => {
    setActiveKey("8");
  };
  const onFinishagentt = (value: object) => {
    setActiveKey("10");
  };
const onFinishagentslide=()=>{
  setActiveKey("11");
}
const tabhandleBackagentback=()=>{
  setActiveKey("10");

}
const tabhandleagenttermback=()=>{
  setActiveKey("10");

}
const onFinish4=()=>{
  setActiveKey("12");
  
}
  const inputStyle: React.CSSProperties = {
    padding: "8px 0",
    borderRadius: "inherit",
  };
  const inputStyle1: React.CSSProperties = {
    borderRadius: "inherit",
  };
  const style: React.CSSProperties = { fontWeight: 558 };
  const landlordcs: React.CSSProperties = { fontSize: "21px" };

  return (
    <div className="mainlogindiv sign">
      <Tabs defaultActiveKey="1" activeKey={activeKey} onChange={onKeyChange}>
        <TabPane tab="Tab 1" key="1" className="mainnnnn">
          <div className="textCenter">
            <h2 className="h2margin proptrhead">Welcome to Propter</h2>
            <h3 style={{marginBottom:"11px"}} className="proptrcss">Create an Account</h3>
          </div>
          <div className="marginleftcss">
            <Form name="form_item_path" layout="vertical" onFinish={onFinish}>
              <div>
                <MyFormItemGroup prefix={["user"]}>
                  <MyFormItemGroup prefix={["data"]}>
                    <div>
                      <MyFormItem name="email" label="Email or Mobile number">
                        <Input placeholder="Enter Email / Mobile No." />
                      </MyFormItem>
                      <MyFormItem name="password" label="Password">
                        <Input placeholder="Create Password" />
                      </MyFormItem>
                    </div>
                  </MyFormItemGroup>
                </MyFormItemGroup>
                <Checkbox onChange={onCheckBox} className="checkboxx">
                  I am a landlord or a broker
                </Checkbox>
                <br />
                <br />
                <Button
                  type="primary"
                  htmlType="submit"
                  className="submitbutton"
                >
                  Submit
                </Button>
                <p className="pbody">
                  By submitting, I accept Propter&apos;s term of service
                </p>
              </div>
            </Form>
          </div>
        </TabPane>
        <TabPane tab="Tab 2" key="2">
          <Content className="mainLayout">
            <Button
              type="text"
              className="btncss backbtnn"
              onClick={handleBack}
              icon={<ArrowLeftOutlined />}
            >
              Back
            </Button>
            <Title level={4} className="container1">
              What best describes you?
            </Title>
            <div className="btncontainer">
              <Button className="btn1" type="text" onClick={handleLandlord}>
                LandLord
              </Button>
              &emsp;&emsp;&emsp;&emsp;
              <Button className="btn1" type="text" onClick={handleBrokerage}>
                Brokerage
              </Button>
              &emsp;&emsp;&emsp;&emsp;
              <Button className="btn1" type="text" onClick={handleAgent}>
                RE Agent
              </Button>
            </div>
            <div className="submitdiv2">
              <Button
                onClick={() => onKeyChange("3")}
                className="submitbutton2"
                type="primary"
              >
                Continue
              </Button>
            </div>
          </Content>
        </TabPane>
        <TabPane tab="Tab 3" key="3">
          <Content className="mainLayout">
            <Button
              type="text"
              className="btncss backbtnn"
              onClick={tabhandleBack}
              icon={<ArrowLeftOutlined />}
            >
              Back
            </Button>
            <Title level={5} className="headingall">
              How many properties you manage?
            </Title>
            <div className="btncontainer">
              <Button className="btn1" type="text">
                1 - 4 properties/units
              </Button>
              &emsp;&emsp;&emsp;&emsp;
              <Button className="btn1" type="text">
                5 - 10 properties/units
              </Button>
              &emsp;&emsp;&emsp;&emsp;
              <Button className="btn1" type="text">
                11+ properties/units
              </Button>
            </div>
            <div className="submitdiv2">
              <Button
                className="submitbutton2"
                type="primary"
                onClick={handlefirst}
              >
                Continue
              </Button>
            </div>
          </Content>
          {/* <button onClick={() => onKeyChange("1")}>okkk</button> */}
        </TabPane>
        <TabPane tab="Tab 4" key="4">
          <Content className="mainLayout">
            <Button
              type="text"
              className="btncss backbtnn"
              onClick={tabhandleBackthird}
              icon={<ArrowLeftOutlined />}
            >
              Back
            </Button>
            <Title level={5} style={landlordcs}>
              Landlord profile
            </Title>
            <div className="btncontainer">
              <Form
                name="form_item_path"
                layout="vertical"
                onFinish={onFinish1}
              >
                <div>
                  <MyFormItemGroup prefix={["user"]}>
                    <MyFormItemGroup prefix={["data"]}>
                      <div>
                        <div className="imagecenter">
                          <Avatar
                            size={64}
                            icon={<UserOutlined />}
                            className="avatarcss"
                          />
                          <p style={{ color: "grey", fontSize: "9px" ,marginTop:"6px"}}>
                            Upload a profile picture
                          </p>
                        </div>
                        <Row gutter={{ xs: 4, sm: 8, md: 12, lg: 20 }}>
                          <Col className="gutter-row" span={11}>
                            <MyFormItem
                              name="firstname"
                              label="Landlord First Name*"
                              style={style}
                            >
                              <Input style={inputStyle} />
                            </MyFormItem>
                          </Col>
                          <Col className="gutter-row" span={2}></Col>
                          <Col className="gutter-row" span={11}>
                            <MyFormItem
                              name="lastname"
                              label="Landlord Last Name*"
                              style={style}
                            >
                              <Input style={inputStyle} />
                            </MyFormItem>
                          </Col>
                        </Row>
                        <Row gutter={{ xs: 4, sm: 8, md: 12, lg: 20 }}>
                          <Col className="gutter-row" span={11}>
                            <MyFormItem
                              name="phone"
                              label="Landlord Phone*"
                              style={style}
                            >
                              <Input style={inputStyle} />
                            </MyFormItem>
                          </Col>
                          <Col className="gutter-row" span={2}></Col>
                          <Col className="gutter-row" span={11}>
                            <MyFormItem
                              name="emails"
                              label="Landlord Email*"
                              style={style}
                            >
                              <Input style={inputStyle} />
                            </MyFormItem>
                          </Col>
                        </Row>
                        <Row gutter={{ xs: 4, sm: 8, md: 12, lg: 20 }}>
                          <Col className="gutter-row" span={24}>
                            <MyFormItem
                              name="propertyname"
                              label="Your organisation or property name*"
                              style={style}
                            >
                              <Input style={inputStyle} />
                            </MyFormItem>
                          </Col>
                        </Row>
                      </div>
                    </MyFormItemGroup>
                  </MyFormItemGroup>
                  <br />
                  <br />
                  <div className="btnform3">
                    <Button
                      type="primary"
                      htmlType="submit"
                      className="submitbuttonform2"
                    >
                      Continue
                    </Button>
                  </div>
                </div>
              </Form>
            </div>
          </Content>
          {/* <button onClick={() => onKeyChange("1")}>okkk</button> */}
        </TabPane>
        <TabPane tab="Tab 5" key="5">
          <Content className="mainLayout">
            <Button
              type="text"
              className="btncss backbtnn"
              onClick={tabhandleBackreturn}
              icon={<ArrowLeftOutlined />}
            >
              Back
            </Button>
            <div className="fifthtab" style={{ display: "flex" }}>
              <Title level={5} style={landlordcs} className="headingall">
                Let&apos;s add your first property
              </Title>
              <Button
                type="primary"
                htmlType="submit"
                className="submitbuttonform3tab"
              >
                Skip
              </Button>
            </div>
            <div className="btncontainer">
              <Form
                name="form_item_path"
                layout="vertical"
                onFinish={onFinish2}
              >
                <div>
                  <MyFormItemGroup prefix={["user"]}>
                    <MyFormItemGroup prefix={["data"]}>
                      <div>
                        <h3 style={{ color: "#b3adad" }}>
                          General Information
                        </h3>
                      </div>
                      <br />
                      <div>
                        <Row gutter={{ xs: 4, sm: 8, md: 12, lg: 20 }}>
                          <Col className="gutter-row" span={10}>
                            <MyFormItem
                              name="pro_address"
                              label="Property Address"
                              style={style}
                            >
                              <Input style={inputStyle} />
                            </MyFormItem>
                          </Col>
                          <Col className="gutter-row" span={1}></Col>
                          <Col className="gutter-row" span={10}>
                            <MyFormItem
                              name="pro_name"
                              label="Property Name(Optional)"
                              style={style}
                            >
                              <Input style={inputStyle} />
                            </MyFormItem>
                          </Col>
                        </Row>
                        <Row gutter={{ xs: 4, sm: 8, md: 12, lg: 20 }}>
                          <Col className="gutter-row" span={21}>
                            <MyFormItem
                              name="addressline"
                              label="Address Line 2"
                              style={style}
                            >
                              <Input style={inputStyle} />
                            </MyFormItem>
                          </Col>
                        </Row>
                        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                          <Col className="gutter-row" span={10}>
                            <MyFormItem name="city" label="City" style={style}>
                              <Input style={inputStyle} />
                            </MyFormItem>
                          </Col>
                          <Col className="gutter-row" span={1}></Col>
                          <Col className="gutter-row" span={10}>
                            <MyFormItem
                              name="country"
                              label="Country"
                              style={style}
                            >
                              <Input style={inputStyle} />
                            </MyFormItem>
                          </Col>
                        </Row>
                      </div>
                    </MyFormItemGroup>
                  </MyFormItemGroup>
                  <br />
                  <br />
                  <div className="btnform3tab">
                    <Button
                      type="primary"
                      htmlType="submit"
                      className="submitbuttonform2tab"
                    >
                      Continue
                    </Button>
                  </div>
                </div>
              </Form>
            </div>
          </Content>
          {/* <button onClick={() => onKeyChange("1")}>okkk</button> */}
        </TabPane>
        <TabPane tab="Tab 6" key="6">
          <Content className="mainLayout">
            <Button
              type="text"
              className="btncss backbtnn"
              onClick={tabhandleBackBroker}
              icon={<ArrowLeftOutlined />}
            >
              Back
            </Button>

            <Title level={5} style={landlordcs} className="headingall">
              Brokerage Details
            </Title>

            <div style={{ marginTop: "3%" }}>
              <Form
                name="form_item_path"
                layout="vertical"
                onFinish={onFinish3}
                className="brokeragefont"
              >
                <div>
                  <MyFormItemGroup prefix={["user"]}>
                    <MyFormItemGroup prefix={["data"]}>
                      <div>
                        <Row gutter={{ xs: 4, sm: 8, md: 12, lg: 20 }}>
                          <Col className="gutter-row" span={21}>
                            <MyFormItem
                              name="brokeragename"
                              label="Brokerage Name"
                              style={style}
                            >
                              <Input style={inputStyle1} />
                            </MyFormItem>
                          </Col>
                        </Row>
                        <Row gutter={{ xs: 4, sm: 8, md: 12, lg: 20 }}>
                          <Col className="gutter-row" span={21}>
                            <MyFormItem
                              name="officeAddress"
                              label="Office Address"
                              style={style}
                            >
                              <Input style={inputStyle1} />
                            </MyFormItem>
                          </Col>
                        </Row>
                        <Row gutter={{ xs: 4, sm: 8, md: 12, lg: 20 }}>
                          <Col className="gutter-row" span={10}>
                            <MyFormItem name="city" label="City" style={style}>
                              <Input style={inputStyle1} />
                            </MyFormItem>
                          </Col>
                          <Col className="gutter-row" span={1}></Col>
                          <Col className="gutter-row" span={10}>
                            <MyFormItem
                              name="country"
                              label="Country"
                              style={style}
                            >
                              <Input style={inputStyle1} />
                            </MyFormItem>
                          </Col>
                        </Row>
                        <Row gutter={{ xs: 4, sm: 8, md: 12, lg: 20 }}>
                          <Col className="gutter-row" span={10}>
                            <MyFormItem
                              name="managingfirstname"
                              label="Managing broker first name"
                              style={style}
                            >
                              <Input style={inputStyle1} />
                            </MyFormItem>
                          </Col>
                          <Col className="gutter-row" span={1}></Col>
                          <Col className="gutter-row" span={10}>
                            <MyFormItem
                              name="managinglastname"
                              label="Managing broker last name"
                              style={style}
                            >
                              <Input style={inputStyle1} />
                            </MyFormItem>
                          </Col>
                        </Row>
                        <Row gutter={{ xs: 4, sm: 8, md: 12, lg: 20 }}>
                          <Col className="gutter-row" span={10}>
                            <MyFormItem
                              name="phone"
                              label="Phone"
                              style={style}
                            >
                              <Input style={inputStyle1} />
                            </MyFormItem>
                          </Col>
                          <Col className="gutter-row" span={1}></Col>
                          <Col className="gutter-row" span={10}>
                            <MyFormItem
                              name="emailsa"
                              label="Email"
                              style={style}
                            >
                              <Input style={inputStyle1} />
                            </MyFormItem>
                          </Col>
                        </Row>
                        <Row gutter={{ xs: 4, sm: 8, md: 12, lg: 20 }}>
                          <Col className="gutter-row" span={10}>
                            <MyFormItem
                              name="trakheesi_no"
                              label="Trakheesi Number"
                              style={style}
                            >
                              <Input style={inputStyle1} />
                            </MyFormItem>
                          </Col>
                          <Col className="gutter-row" span={1}></Col>
                          <Col className="gutter-row" span={10}>
                            <MyFormItem
                              name="orn"
                              label="Office Registration Number(ORN)"
                              style={style}
                            >
                              <Input style={inputStyle1} />
                            </MyFormItem>
                          </Col>
                        </Row>
                        <Row gutter={{ xs: 4, sm: 8, md: 12, lg: 20 }}>
                          <Col className="gutter-row" span={21}>
                            <MyFormItem
                              name="broker_registration"
                              label="Broker Registration Number(BRN)"
                              style={style}
                            >
                              <Input style={inputStyle1} />
                            </MyFormItem>
                          </Col>
                        </Row>
                      </div>
                    </MyFormItemGroup>
                  </MyFormItemGroup>
                  <br />
                  <br />
                  <div className="btnform3tab">
                    <Button
                      type="primary"
                      htmlType="submit"
                      className="submitbuttonform2tab"
                    >
                      Continue
                    </Button>
                  </div>
                </div>
              </Form>
            </div>
          </Content>
        </TabPane>
        <TabPane tab="Tab 7" key="7">
          <Content className="mainLayout">
            <Button
              type="text"
              className="btncss backbtnn"
              onClick={tabhandleBackbrokerage}
              icon={<ArrowLeftOutlined />}
            >
              Back
            </Button>

            <Title level={5} style={landlordcs} className="headingall">
              Just one more step
            </Title>

            <div style={{ marginTop: "4%", display: "flex" }}>
              <Checkbox onChange={onCheckBox} className="checkboxx" />
              &emsp;
              <h3 style={{ marginRight: "27%" }}>
                {" "}
                By ticking this checkbox, one agree&apos;s to Propter&apos;s
                Terms of Privacy. I authorize Propter to contact us to facilate
                the enrollment process in the partner program.
              </h3>
            </div>
            <div className="btnform7tab">
              <Button
                type="primary"
                htmlType="submit"
                className="submitbuttonform7tab"
              >
                Continue
              </Button>
            </div>
          </Content>
        </TabPane>
        <TabPane tab="Tab 8" key="8">
          <Content className="mainLayout">
            <Button
              type="text"
              className="btncss backbtnn"
              onClick={tabhandleReagent}
              icon={<ArrowLeftOutlined />}
            >
              Back
            </Button>

            <Title level={5} style={landlordcs} className="headingall">
              Brokerage Details
            </Title>
            <Form
              name="form_item_path"
              layout="vertical"
              onFinish={onFinishagent}
              className="brokeragefont"
            >
              <div>
                <MyFormItemGroup prefix={["user"]}>
                  <MyFormItemGroup prefix={["data"]}>
                    <div
                      className="brokeragelastone"
                      style={{ marginTop: "4%" }}
                    >
                      <Row gutter={{ xs: 4, sm: 8, md: 12, lg: 20 }}>
                        <Col className="gutter-row" span={21}>
                          <MyFormItem
                            name="choose_brokerage"
                            label="Choose your brokerage"
                            style={style}
                          >
                            <Select
                              defaultValue="Choose..."
                              style={inputStyle1}
                              onChange={handleChange}
                              options={[
                                {
                                  value: "jack",
                                  label: "Jack",
                                },
                                {
                                  value: "lucy",
                                  label: "Lucy",
                                },
                              ]}
                            />
                          </MyFormItem>
                        </Col>
                      </Row>
                      <Row gutter={{ xs: 4, sm: 8, md: 12, lg: 20 }}>
                        <Col className="gutter-row" span={21}>
                          <MyFormItem name="emaill" label="Email" style={style}>
                            <Input style={{borderRadius: "inherit",height:"41px"}} />
                          </MyFormItem>
                        </Col>
                      </Row>
                    </div>
                  </MyFormItemGroup>
                </MyFormItemGroup>
                <div className="btnform7tab">
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="submitbuttonform8tab"
                  >
                    Continue
                  </Button>
                </div>
              </div>
            </Form>
          </Content>
        </TabPane>
        <TabPane tab="Tab 9" key="9">
          <Content className="mainLayout">
            <Button
              type="text"
              className="btncss backbtnn"
              onClick={tabhandleBackagent}
              icon={<ArrowLeftOutlined />}
            >
              Back
            </Button>
            <Title level={5} style={landlordcs}>
             Your Details
            </Title>
            <div className="btncontainer">
              <Form
                name="form_item_path"
                layout="vertical"
                onFinish={onFinishagentt}
              >
                <div>
                  <MyFormItemGroup prefix={["user"]}>
                    <MyFormItemGroup prefix={["data"]}>
                      <div>
                        <div className="imagecenter">
                          <Avatar
                            size={76}
                            icon={<UserOutlined />}
                            className="avatarcss1"
                          />
                          <p style={{ color: "grey", fontSize: "10px",marginTop:"6px" }}>
                            Upload a profile picture
                          </p>
                        </div>
                        <Row gutter={{ xs: 4, sm: 8, md: 12, lg: 20 }}>
                          <Col className="gutter-row" span={11}>
                            <MyFormItem
                              name="firstname"
                              label="First Name"
                              style={style}
                            >
                              <Input style={inputStyle} />
                            </MyFormItem>
                          </Col>
                          <Col className="gutter-row" span={2}></Col>
                          <Col className="gutter-row" span={11}>
                            <MyFormItem
                              name="lastname"
                              label="Last Name"
                              style={style}
                            >
                              <Input style={inputStyle} />
                            </MyFormItem>
                          </Col>
                        </Row>
                        <Row gutter={{ xs: 4, sm: 8, md: 12, lg: 20 }}>
                          <Col className="gutter-row" span={11}>
                            <MyFormItem
                              name="phone"
                              label="Mobile"
                              style={style}
                            >
                              <Input style={inputStyle} />
                            </MyFormItem>
                          </Col>
                          <Col className="gutter-row" span={2}></Col>
                          <Col className="gutter-row" span={11}>
                            <MyFormItem
                              name="emailll"
                              label="Email"
                              style={style}
                            >
                              <Input style={inputStyle} />
                            </MyFormItem>
                          </Col>
                        </Row>
                        <Row gutter={{ xs: 4, sm: 8, md: 12, lg: 20 }}>
                          <Col className="gutter-row" span={11}>
                            <MyFormItem
                              name="rera_number"
                              label="RERA Number*"
                              style={style}
                            >
                              <Input style={inputStyle} />
                            </MyFormItem>
                          </Col>
                          <Col className="gutter-row" span={2}></Col>
                          <Col className="gutter-row" span={11}>
                            <MyFormItem
                              name="gender"
                              label="Gender*"
                              style={style}
                            >
                              <Input style={inputStyle} />
                            </MyFormItem>
                          </Col>
                        </Row>
                      </div>
                    </MyFormItemGroup>
                  </MyFormItemGroup>
                  <br />
                  <br />
                  <div className="btnform3">
                    <Button
                      type="primary"
                      htmlType="submit"
                      className="submitbuttonform2"
                    >
                      Confirm
                    </Button>
                  </div>
                </div>
              </Form>
            </div>
          </Content>
        </TabPane>
        <TabPane tab="Tab 10" key="10">
          <Content className="mainLayout">
            <Button
              type="text"
              className="btncss backbtnn"
              onClick={tabhandleReagent}
              icon={<ArrowLeftOutlined />}
            >
              Back
            </Button>

            <Title level={5} style={landlordcs} className="headingall">
              Your Experience
            </Title>
            <Form
              name="form_item_path"
              layout="vertical"
              onFinish={onFinishagentslide}
              className="brokeragefont"
            >
              <div>
                <MyFormItemGroup prefix={["user"]}>
                  <MyFormItemGroup prefix={["data"]}>
                    <div
                      className="brokeragelastone"
                      style={{ marginTop: "4%" }}
                    >
                      <Row gutter={{ xs: 4, sm: 8, md: 12, lg: 20 }}>
                        <Col className="gutter-row" span={21}>
                          <MyFormItem
                            name="deal"
                            label="How many deals have you closed in the last 12 months?"
                            style={style}
                          >
                            <Select
                              defaultValue="Max. of 4 localities"
                              style={inputStyle1}
                              onChange={handleChange}
                              options={[
                                {
                                  value: "jack",
                                  label: "Jack",
                                },
                                {
                                  value: "lucy",
                                  label: "Lucy",
                                },
                              ]}
                            />
                          </MyFormItem>
                          <p className="selectheadingg">To quality for Propters Partner Program, agents must have 5 closing within the last 12 months. Propter will verify this information.</p>
                        </Col>
                      </Row>
                      <Row gutter={{ xs: 4, sm: 8, md: 12, lg: 20 }}>
                        <Col className="gutter-row" span={21}>
                          <MyFormItem name="cover" label="Localities you want to cover" style={style}>
                            <Input style={inputStyle1} placeholder="Max. of 4 localities " />
                          </MyFormItem>
                          <div className="btnmaincss">

                          <Button  size={size} className="btnselect">Deira<CloseOutlined /></Button>&emsp;
                          <Button  size={size} className="btnselect">Bussiness Bay <CloseOutlined /></Button>

                          </div>
                        </Col>
                      </Row>
                      <Row gutter={{ xs: 4, sm: 8, md: 12, lg: 20 }}>
                        <Col className="gutter-row" span={21}>
                          <MyFormItem name="licence" label="Licensing Emirates" style={style}>
                            <Input style={inputStyle1}/>
                          </MyFormItem>
                        </Col>
                      </Row>
                    </div>
                  </MyFormItemGroup>
                </MyFormItemGroup>
                <div className="btnform7tab">
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="submitbuttonform8tab"
                  >
                    Continue
                  </Button>
                </div>
              </div>
            </Form>
          </Content>
        </TabPane>
        <TabPane tab="Tab 11" key="11">
          <Content className="mainLayout">
            <Button
              type="text"
              className="btncss backbtnn"
              onClick={tabhandleBackagentback}
              icon={<ArrowLeftOutlined />}
            >
              Back
            </Button>
            <Title level={5} style={landlordcs} className="headingall">
             Customer Feedbacks
            </Title>
            <div style={{ marginTop: "3%" }}>
              <Form
                name="form_item_path"
                layout="vertical"
                onFinish={onFinish4}
                className="brokeragefont"
              >
                <div>
                  <MyFormItemGroup prefix={["user"]}>
                    <MyFormItemGroup prefix={["data"]}>
                      <div>
                      <Row gutter={{ xs: 4, sm: 8, md: 12, lg: 20 }}>
                          <Col className="gutter-row" span={10}>
                            <MyFormItem name="link" label="Link" style={style}>
                              <Input style={inputStyle1} />
                            </MyFormItem>
                          </Col>
                        </Row> 
                        <div className="numberingDiv">
                        <Row gutter={{ xs: 4, sm: 8, md: 12, lg: 20 }}>
                         1.&emsp;&emsp;&nbsp; <Col className="gutter-row" span={10}>
                           <MyFormItem name="name1" label="Customer Name" style={style}>
                              <Input style={inputStyle1} />
                            </MyFormItem>
                          </Col>
                          <Col className="gutter-row" span={1}></Col>
                          <Col className="gutter-row" span={10}>
                            <MyFormItem
                              name="number1"
                              label="Customer Number"
                              style={style}
                            >
                              <Input style={inputStyle1} />
                            </MyFormItem>
                          </Col>
                        </Row>
                        <Row gutter={{ xs: 4, sm: 8, md: 12, lg: 20 }}>
                        2.&emsp;&emsp;&nbsp; <Col className="gutter-row" span={10}>
                            <MyFormItem
                              name="name2"
                              label="Customer Name"
                              style={style}
                            >
                              <Input style={inputStyle1} />
                            </MyFormItem>
                          </Col>
                          <Col className="gutter-row" span={1}></Col>
                          <Col className="gutter-row" span={10}>
                            <MyFormItem
                              name="number2"
                              label="Customer Number"
                              style={style}
                            >
                              <Input style={inputStyle1} />
                            </MyFormItem>
                          </Col>
                        </Row>
                        <Row gutter={{ xs: 4, sm: 8, md: 12, lg: 20 }}>
                        3.&emsp;&emsp;&nbsp;<Col className="gutter-row" span={10}>
                            <MyFormItem
                              name="name3"
                              label="Customer Name"
                              style={style}
                            >
                              <Input style={inputStyle1} />
                            </MyFormItem>
                          </Col>
                          <Col className="gutter-row" span={1}></Col>
                          <Col className="gutter-row" span={10}>
                            <MyFormItem
                              name="number3"
                              label="Customer Number"
                              style={style}
                            >
                              <Input style={inputStyle1} />
                            </MyFormItem>
                          </Col>
                        </Row>
                        </div> 
                      </div>
                    </MyFormItemGroup>
                  </MyFormItemGroup>
                  <br />
                  <br />
                  <div className="btnform3tab12">
                    <Button
                      type="primary"
                      htmlType="submit"
                      className="submitbuttonform2tab"
                    >
                      Continue
                    </Button>
                  </div>
                </div>
              </Form>
            </div>
          </Content>
        </TabPane>
        <TabPane tab="Tab 12" key="12">
          <Content className="mainLayout">
            <Button
              type="text"
              className="btncss backbtnn"
              onClick={tabhandleagenttermback}
              icon={<ArrowLeftOutlined />}
            >
              Back
            </Button>

            <Title level={5} style={landlordcs} className="headingall">
              Terms
            </Title>

            <div style={{ marginTop: "4%", display: "flex" }}>
             
              <h5 style={{ marginRight: "27%" }}>
              Do you agree not to require preapproval until after the first tour*
              </h5>
            </div>
            <div className="radiomargin">
            <Radio>Yes</Radio> &emsp;&emsp;&emsp; <Radio>No</Radio>
            </div>
              <h5 className="h5smallfont">
             In order for our customers to have a pleasant experience when choosing a property, it is important that partner agent do no initiate the convervation in regard to finacing until after their first meeting with a Propter customer.
              </h5>
            <div className="btnform7tab">
              <Button
                type="primary"
                htmlType="submit"
                className="submitbuttonform7tab"
              >
                Continue
              </Button>
            </div>
          </Content>
        </TabPane>
      </Tabs>
    </div>
  );
}
