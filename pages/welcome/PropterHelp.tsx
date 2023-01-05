import React from "react";
import { Col, Card, Row, Space } from "antd";
import buyHome from "/public/assets/buyHome.png";
import rentHome from "/public/assets/rentHome.png";
import sellProperty from "/public/assets/sellProperty.png";
import vouchers from "/public/assets/rentHome.png";
import { ArrowRightOutlined } from "@ant-design/icons";
import Image from "next/image";
const { Meta } = Card;
const style: React.CSSProperties = { background: "#0092ff", padding: "8px 0" };

const rowArray = [
  {
    Img: buyHome,
    title: "Sell/Rent your property",
    link: "For Landloard",
    description:
      "with our words first video listing serviceWith the online text generator you can process your personal Lorem Ipsum enriching it with html elements that define its structure, with the possibility to insert external links, but not only.",
  },
  {
    Img: rentHome,
    title: "Find Your Home",
    link: "Find Your Home",
    description:
      "with our words first video listing serviceWith the online text generator you can process your personal Lorem Ipsum enriching it with html elements that define its structure, with the possibility to insert external links, but not only.",
  },
  {
    Img: sellProperty,
    title: "Rent A home",
    link: "Rent A home",
    description:
      "with our words first video listing serviceWith the online text generator you can process your personal Lorem Ipsum enriching it with html elements that define its structure, with the possibility to insert external links, but not only.",
  },
  {
    Img: vouchers,
    title: "Vouchers",
    link: "See all vouchers",
    description:
      "with our words first video listing serviceWith the online text generator you can process your personal Lorem Ipsum enriching it with html elements that define its structure, with the possibility to insert external links, but not only.",
  },
];

const PropterHelp = () => {
  return (
    <div className="propterHelpCls">
      <h1
        style={{
          paddingTop: "10vh",
          fontFamily: "system-ui",
          fontSize: "2.5rem",
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        See How Propter Can Help
      </h1>
      <Row
        gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
       
        className="propterRowCls"
      >
        {rowArray.map((e, i) => {
          return (
            <div key={i}>
              <Space>
                <Col className="gutter-row propertyColCls" span={32}>
                  <Card
                    hoverable
                    style={{ width: '260px',marginTop:'5%' }}
                    
                  >
                     <Image
                     className="propertyImgCls"
                        alt="example"
                        src={e.Img.src}
                        width={100}
                        height={90}
                       
                      />
               
                    <Meta
                    className="propterHelpMetaCls"
                     title={e.title} description={e.description}
                    />
                    <div className="propterCardLinkCls"> <a className="homeCardLink">{e.link}</a>
                    <ArrowRightOutlined
                      style={{
                        color: "orangered",
                        marginLeft: "3%",
                        marginTop: "1%",
                      }}
                    /></div>
                   
                  </Card>
                </Col>
              </Space>
            </div>
          );
        })}
      </Row>
    </div>
  );
};

export default PropterHelp;
