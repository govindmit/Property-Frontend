import React from "react";
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
} from "antd";
import {
  CloseOutlined,
  EnvironmentOutlined,
  HeartOutlined,
} from "@ant-design/icons";
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
  return (
    <div className="favoriteCls">
      <div className="favoritesHeading">
        <Row>
          <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
            <h1>My Favorites</h1>
          </Col>
        </Row>
      </div>

      <div className="favoritsListCls">

        <Row style={{marginTop:'15px',marginBottom:'15px'}}>
          <Col
            xs={{ span: 12, offset: 1 }}
            lg={{ span: 4, offset: 2 }}
            md={{ span: 12, offset: 2 }}
          >
            <Card
              style={{ width: 300 }}
              cover={
                <Image
                  alt="example"
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
              }
            >
             
              <div>
                <Title level={4} style={{display:"inline-block"}} >AED 80,000/Year</Title><HeartOutlined style={{marginLeft:'4rem'}} />
              </div>
      
              <div>New Apartment Nice view</div>
              <div style={{marginTop:'5px'}}>
                <Space>
                <EnvironmentOutlined
                  style={{ fontSize: "10px", color: "orangered" }}
                />
                 Business Bay, Dubai
                </Space>
               
              </div>
              
              <div style={{marginTop:'5px'}}>
                <Space>
                   <b>3</b>Beds
                  &nbsp;
                   <b>2</b>Bath
                  &nbsp;
                <b>3450</b> sq ft
                </Space>
              </div>
            </Card>
          </Col>

          <Col
            xs={{ span: 12, offset: 1 }}
            lg={{ span: 4, offset: 2 }}
            md={{ span: 12, offset: 2 }}
          >
            {rorData.map((e) => {
              return (
                <div key={e.key}>
                <Row style={{ marginTop: "15px" }}>
                  <Col span={12} style={{ fontWeight: "bold", color: "black" }}>
                    {" "}
                    {e.key}{" "}
                  </Col>
                  {e.value ==='Active'?<Col span={12} style={{ color: "green" }}>
                    {e.value}
                  </Col>:
                   <Col span={12} style={{ color: "#4d4dc3" }}>
                   {e.value}
                 </Col>}
                </Row>
                </div>
              );
            })}
          </Col>

          <Col
            xs={{ span: 12, offset: 1 }}
            lg={{ span: 4, offset: 2 }}
            md={{ span: 12, offset: 2 }}
          >
            <div>
              <Button type="primary" className="favoriteReqBtnCls">
                Request A tour
              </Button>
              <div className="favoritCloseIconCls">
                <Space>
                <CloseOutlined />
                Remove
                </Space>
              </div>
            </div>
          </Col>
        </Row>
        {/* ======================================2nd================================================== */}
        <Divider className="dividerCls"/>
        <Row style={{marginTop:'15px',marginBottom:'15px'}}>
          <Col
            xs={{ span: 12, offset: 1 }}
            lg={{ span: 4, offset: 2 }}
            md={{ span: 12, offset: 2 }}
          >
            <Card
              style={{ width: 300 }}
              cover={
                <Image
                  alt="example"
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
              }
            >
             
              <div>
                <Title level={4} style={{display:"inline-block"}} >AED 80,000/Year</Title><HeartOutlined style={{marginLeft:'4rem'}} />
              </div>
      
              <div>New Apartment Nice view</div>
              <div style={{marginTop:'5px'}}>
                <Space>
                <EnvironmentOutlined
                  style={{ fontSize: "10px", color: "orangered" }}
                />
                 Business Bay, Dubai
                </Space>
               
              </div>
              
              <div style={{marginTop:'5px'}}>
                <Space>
                   <b>3</b>Beds
                  &nbsp;
                   <b>2</b>Bath
                  &nbsp;
                <b>3450</b> sq ft
                </Space>
              </div>
            </Card>
          </Col>

          <Col
            xs={{ span: 12, offset: 1 }}
            lg={{ span: 4, offset: 2 }}
            md={{ span: 12, offset: 2 }}
          >
            {rorData.map((e) => {
              return (
                <div key={e.key}>
                <Row style={{ marginTop: "15px" }}>
                  <Col span={12} style={{ fontWeight: "bold", color: "black" }}>
                    {" "}
                    {e.key}{" "}
                  </Col>
                  {e.value ==='Active'?<Col span={12} style={{ color: "green" }}>
                    {e.value}
                  </Col>:
                   <Col span={12} style={{ color: "#4d4dc3" }}>
                   {e.value}
                 </Col>}
                </Row>
                </div>
              );
            })}
          </Col>

          <Col
            xs={{ span: 12, offset: 1 }}
            lg={{ span: 4, offset: 2 }}
            md={{ span: 12, offset: 2 }}
          >
            <div>
              <Button type="primary" className="favoriteReqBtnCls">
                Request A tour
              </Button>
              <div className="favoritCloseIconCls">
                <Space>
                <CloseOutlined />
                Remove
                </Space>
              </div>
            </div>
          </Col>
        </Row>
        {/* =================================3rd=================================================== */}
        <Divider className="dividerCls"/>

        <Row style={{marginTop:'15px',marginBottom:'15px'}}>
          <Col
            xs={{ span: 12, offset: 1 }}
            lg={{ span: 4, offset: 2 }}
            md={{ span: 12, offset: 2 }}
          >
            <Card
              style={{ width: 300 }}
              cover={
                <Image
                  alt="example"
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
              }
            >
             
              <div>
                <Title level={4} style={{display:"inline-block"}} >AED 80,000/Year</Title><HeartOutlined style={{marginLeft:'4rem'}} />
              </div>
      
              <div>New Apartment Nice view</div>
              <div style={{marginTop:'5px'}}>
                <Space>
                <EnvironmentOutlined
                  style={{ fontSize: "10px", color: "orangered" }}
                />
                 Business Bay, Dubai
                </Space>
               
              </div>
              
              <div style={{marginTop:'5px'}}>
                <Space>
                   <b>3</b>Beds
                  &nbsp;
                   <b>2</b>Bath
                  &nbsp;
                <b>3450</b> sq ft
                </Space>
              </div>
            </Card>
          </Col>

          <Col
            xs={{ span: 12, offset: 1 }}
            lg={{ span: 4, offset: 2 }}
            md={{ span: 12, offset: 2 }}
          >
            {rorData.map((e) => {
              return (
                <div key={e.key}>   
                <Row style={{ marginTop: "15px" }}>
                  <Col span={12} style={{ fontWeight: "bold", color: "black" }}>
                    {" "}
                    {e.key}{" "}
                  </Col>
                  {e.value ==='Active'?<Col span={12} style={{ color: "green" }}>
                    {e.value}
                  </Col>:
                   <Col span={12} style={{ color: "#4d4dc3" }}>
                   {e.value}
                 </Col>}
                </Row>
                     </div>
              );
            })}
          </Col>

          <Col
            xs={{ span: 12, offset: 1 }}
            lg={{ span: 4, offset: 2 }}
            md={{ span: 12, offset: 2 }}
          >
            <div>
              <Button type="primary" className="favoriteReqBtnCls">
                Request A tour
              </Button>
              <div className="favoritCloseIconCls">
                <Space>
                <CloseOutlined />
                Remove
                </Space>
              </div>
            </div>
          </Col>
        </Row>
        <Divider className="dividerCls"/>

      </div>
    </div>
  );
};

export default FavoriteComp;
