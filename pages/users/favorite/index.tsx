import React, { useState } from "react";
import {
  Col,
  Row,
  Avatar,
  Card,
  Typography,
  List,
  Skeleton,
  Button,
  Image,
  Space,
  Divider,
  Radio,
} from "antd";
import {
  CloseOutlined,
  EnvironmentOutlined,
  HeartOutlined,
} from "@ant-design/icons";
import UserHeader from "../userHeader";
const { Meta } = Card;

interface DataType {
  key: string;
  name: string;
}
const { Title } = Typography;
const rorData = [
  { key: "Open House Shedule", value: "Fri 29th july22" },
  { key: "Date posted", value: "Mon 22th june22" },
  { key: "year build", value: "2005" },
  { key: "sqft", value: "1323" },
  { key: "AED/Sqft", value: "AED 2,233" },
  { key: "Status", value: "Active" },
];
const FavoriteComp = () => {
  const [disabled, setDisabled] = useState(true);
  return (
    <div className="favoriteCls">
      <UserHeader />
      <div className="favoritesHeading">
        <Row>
          <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
            <h1>My Favorites</h1>
          </Col>
        </Row>
      </div>

      <div className="favoritsListCls">
        <Row className="favRow">
          <div className="col1">
            <Card
              className="col1Card"
              cover={
                <Image
                  alt="example"
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                  preview={false}
                />
              }
            >
              <div>
                <Title level={4} style={{ display: "inline-block" }}>
                  AED 80,000/Year
                </Title>
                <HeartOutlined style={{ marginLeft: "4rem" }} />
              </div>

              <div>New Apartment Nice view</div>
              <div style={{ marginTop: "5px" }}>
                <Space>
                  <EnvironmentOutlined
                    style={{ fontSize: "10px", color: "orangered" }}
                  />
                  Business Bay, Dubai
                </Space>
              </div>

              <div style={{ marginTop: "5px" }}>
                <Space>
                  <b>3</b>Beds &nbsp;
                  <b>2</b>Bath &nbsp;
                  <b>3450</b> sq ft
                </Space>
              </div>
            </Card>
          </div>
          <div className="col2">
            {" "}
            <div style={{ marginTop: "25%" }}>
              {rorData.map((e) => {
                return (
                  <div key={e.key}>
                    <Row style={{ marginTop: "15px" }}>
                      <Col
                        span={12}
                        style={{ fontWeight: "bold", color: "black" }}
                      >
                        {" "}
                        {e.key}{" "}
                      </Col>
                      {e.value === "Active" ? (
                        <Col span={12} style={{ color: "green" }}>
                          {e.value}
                        </Col>
                      ) : (
                        <Col span={12} style={{ color: "#4d4dc3" }}>
                          {e.value}
                        </Col>
                      )}
                    </Row>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="col3">
            {" "}
            <div style={{ marginTop: "35%" }}>
              <Button type="primary" className="tourBtn">
                Request A tour
              </Button>
              <div className="removeCls">
                <Space>
                  <CloseOutlined className="removeIconCls" />
                  Remove
                </Space>
              </div>
            </div>
          </div>
        </Row>
        <Divider className="dividerCls" />
        <Row className="favRow">
          <div className="col1">
            <Card
              className="col1Card"
              cover={
                <Image
                  alt="example"
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                  preview={false}
                />
              }
            >
              <div>
                <Title level={4} style={{ display: "inline-block" }}>
                  AED 80,000/Year
                </Title>
                <HeartOutlined style={{ marginLeft: "4rem" }} />
              </div>

              <div>New Apartment Nice view</div>
              <div style={{ marginTop: "5px" }}>
                <Space>
                  <EnvironmentOutlined
                    style={{ fontSize: "10px", color: "orangered" }}
                  />
                  Business Bay, Dubai
                </Space>
              </div>

              <div style={{ marginTop: "5px" }}>
                <Space>
                  <b>3</b>Beds &nbsp;
                  <b>2</b>Bath &nbsp;
                  <b>3450</b> sq ft
                </Space>
              </div>
            </Card>
          </div>
          <div className="col2">
            {" "}
            <div style={{ marginTop: "25%" }}>
              {rorData.map((e) => {
                return (
                  <div key={e.key}>
                    <Row style={{ marginTop: "15px" }}>
                      <Col
                        span={12}
                        style={{ fontWeight: "bold", color: "black" }}
                      >
                        {" "}
                        {e.key}{" "}
                      </Col>
                      {e.value === "Active" ? (
                        <Col span={12} style={{ color: "green" }}>
                          {e.value}
                        </Col>
                      ) : (
                        <Col span={12} style={{ color: "#4d4dc3" }}>
                          {e.value}
                        </Col>
                      )}
                    </Row>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="col3">
            {" "}
            <div style={{ marginTop: "35%" }}>
              <Button type="primary" className="tourBtn">
                Request A tour
              </Button>
              <div className="removeCls">
                <Space>
                  <CloseOutlined className="removeIconCls" />
                  Remove
                </Space>
              </div>
            </div>
          </div>
        </Row>
        <Divider className="dividerCls" />


        <Row className="favRow">
          <div className="col1">
            <Card
              className="col1Card"
              cover={
                <Image
                  alt="example"
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                  preview={false}
                />
              }
            >
              <div>
                <Title level={4} style={{ display: "inline-block" }}>
                  AED 80,000/Year
                </Title>
                <HeartOutlined style={{ marginLeft: "4rem" }} />
              </div>

              <div>New Apartment Nice view</div>
              <div style={{ marginTop: "5px" }}>
                <Space>
                  <EnvironmentOutlined
                    style={{ fontSize: "10px", color: "orangered" }}
                  />
                  Business Bay, Dubai
                </Space>
              </div>

              <div style={{ marginTop: "5px" }}>
                <Space>
                  <b>3</b>Beds &nbsp;
                  <b>2</b>Bath &nbsp;
                  <b>3450</b> sq ft
                </Space>
              </div>
            </Card>
          </div>
          <div className="col2">
            {" "}
            <div style={{ marginTop: "25%" }}>
              {rorData.map((e) => {
                return (
                  <div key={e.key}>
                    <Row style={{ marginTop: "15px" }}>
                      <Col
                        span={12}
                        style={{ fontWeight: "bold", color: "black" }}
                      >
                        {" "}
                        {e.key}{" "}
                      </Col>
                      {e.value === "Active" ? (
                        <Col span={12} style={{ color: "green" }}>
                          {e.value}
                        </Col>
                      ) : (
                        <Col span={12} style={{ color: "#4d4dc3" }}>
                          {e.value}
                        </Col>
                      )}
                    </Row>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="col3">
            {" "}
            <div style={{ marginTop: "35%" }}>
              <Button type="primary" className="tourBtn">
                Request A tour
              </Button>
              <div className="removeCls">
                <Space>
                  <CloseOutlined className="removeIconCls" />
                  Remove
                </Space>
              </div>
            </div>
          </div>
        </Row>
      </div>
    </div>
  );
};

export default FavoriteComp;
