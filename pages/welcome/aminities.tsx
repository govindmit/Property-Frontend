import React from "react";
import { Col, Card, Row, Space, Button } from "antd";
import buyHome from "/public/assets/buyHome.png";
import rentHome from "/public/assets/rentHome.png";
import sellProperty from "/public/assets/sellProperty.png";
import vouchers from "/public/assets/vouchers.png";
import { ArrowRightOutlined } from "@ant-design/icons";
import {Image} from "antd";
const { Meta } = Card;
const style: React.CSSProperties = { background: "#0092ff", padding: "8px 0" };

const rowArray = [
  { Img: buyHome, title: "parking space" },
  { Img: rentHome, title: "parking space" },
  { Img: sellProperty, title: "parking space" },
  { Img: vouchers, title: "parking space" },
  { Img: buyHome, title: "parking space" },
  { Img: sellProperty, title: "parking space" },
  { Img: rentHome, title: "parking space" },
  { Img: buyHome, title: "parking space" },
];

const Aminities = () => {
  return (
    <div className="wrapper-area">
      {/* <h1
        style={{
          paddingTop: "10vh",
          fontFamily: "system-ui",
          fontSize: "2.5rem",
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        Find Properties Based on Aminities you want
      </h1>

      <Row
        gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
        style={{
          transform: "translate(-44%, 0%)",
          marginLeft: "50%",
          maxWidth: "1088px",
          width: "100%",
        }}
        className="aminitieRowcls1"
      >
        {rowArray.map((e, i) => {
          return (
            <div key={i}>
        
              <Space>
                <Col className="gutter-row  aminitieColCls" span={48}>
                  <Card
                    className="aminitieCardCls"
                    hoverable
                    style={{boxShadow: '0px 0px 10px 0px rgba(0,0,0,10%)'}}
                  >
                     <Image
                        className="aminiteImgCls"
                        alt="example"
                        src={e.Img.src}
                        width={100}
                        height={90}
                      />
                    <Meta className="aminitieMetaCls" title={e.title} />
                  </Card>
                  <Button shape="circle" className="aminitiBtnCls">
                    <ArrowRightOutlined style={{ color: "black" }} />
                  </Button>
                </Col>
              </Space>
            </div>
          );
        })}
      </Row> */}

<section className="Our-premium">
          <div className="container-fluid side-space">
            <div className="row">
              <div className="col-md-12">
                <div className="Our-premium-heading">
                  <h2>Find properties based on Amenities you want</h2>
                </div>
              </div>
            </div>
            <div className="row sec-block">
              <div className="col-md-6 col-lg-3">
                <div className="cart-small">
                  <Image
                    src="/agreement.png"
                    width={80}
                    alt="box-img"
                    preview={false}
                  />
                  <h6>Digital marketing</h6>
                  <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="cart-small">
                  <Image
                    src="/agreement.png"
                    width={80}
                    alt="box-img"
                    preview={false}
                  />
                  <h6>Listing Management</h6>
                  <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="cart-small">
                  <Image
                    src="/house.png"
                    width={80}
                    alt="box-img"
                    preview={false}
                  />
                  <h6>Detailed Analytics</h6>
                  <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="cart-small">
                  <Image
                    src="/loan.png"
                    width={80}
                    alt="box-img"
                    preview={false}
                  />
                  <h6>Transaction management</h6>
                  <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 col-lg-3">
                <div className="cart-small">
                  <Image
                    src="/agreement.png"
                    width={80}
                    alt="box-img"
                    preview={false}
                  />
                  <h6>Digital marketing</h6>
                  <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="cart-small">
                  <Image
                    src="/agreement.png"
                    width={80}
                    alt="box-img"
                    preview={false}
                  />
                  <h6>Listing Management</h6>
                  <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="cart-small">
                  <Image
                    src="/house.png"
                    width={80}
                    alt="box-img"
                    preview={false}
                  />
                  <h6>Detailed Analytics</h6>
                  <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="cart-small">
                  <Image
                    src="/loan.png"
                    width={80}
                    alt="box-img"
                    preview={false}
                  />
                  <h6>Transaction management</h6>
                  <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                </div>
              </div>
            </div>
          </div>
        </section>
    </div>
  );
};

export default Aminities;
