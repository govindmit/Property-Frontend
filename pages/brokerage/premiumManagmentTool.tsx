import React from "react";
import { Col, Card, Row, Space, Button ,Typography,Image} from "antd";
import buyHome from "/public/assets/buyHome.png";
import rentHome from "/public/assets/rentHome.png";
import sellProperty from "/public/assets/sellProperty.png";
import vouchers from "/public/assets/vouchers.png";
import { ArrowRightOutlined } from "@ant-design/icons";
const { Title } = Typography;
// import Image from "next/image";
// import Typography from "antd/es/typography/Typography";
const { Meta } = Card;
const style: React.CSSProperties = { background: "#0092ff", padding: "8px 0" };

const rowArray = [
  { Img:buyHome, title: "Digital marketing" ,description:"parking spaceparking spaceparking spaceparking spaceparking space"},
  { Img:rentHome, title: "High quality vieos" ,description:"parking spaceparking spaceparking spaceparking spaceparking space"},
  { Img:sellProperty, title: "360 walkthrough" ,description:"parking spaceparking spaceparking spaceparking spaceparking space"},
  { Img:buyHome, title: "Dron view" ,description:"parking spaceparking spaceparking spaceparking spaceparking space"},
  
];

const PrimiumManagmentTool = () => {
  return (
    <div className="premiumCls">
      <h1
        style={{
          paddingTop: "10vh",
          fontFamily: "system-ui",
          fontSize: "25px",
          fontWeight: "800",
          textAlign: "center",
        }}
      >
       Our premium management tool
      </h1>
      <Typography  style={{
          textAlign: "center",
          paddingTop: "3vh",
          fontFamily: "system-ui",
          fontSize: "1rem",
          fontWeight:500
        }}>
        we help showcase your property in the best possible way to attract buyers or tenant quickly
      </Typography>

            
      <Row
        gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
        style={{
          transform: "translate(-50%, 0%)",
          marginLeft: "50%",
          maxWidth: "1088px",
          width: "100%",
          marginTop:'20px'
        }}
        className="premiumRowCls"
        justify='space-around'
      >
        {rowArray.map((e,i) => {
          return (
            <div key={i}>

                <Card
                  className="premiumCardCls"
                  hoverable
                  style={{ width: 240 }}
                  
                >
                   <Image
                       className="propertyImgCls"
                        alt="example"
                        src={e.Img.src}
                        width={100}
                        height={90}
                        preview={false}
                      />
                    
                    <div>
                      <Title className='premiumCardTitle' level={4}>{e.title}</Title>
                    </div>
                    <div className="premiumCardDescription">
                      {e.description}
                    </div>
                </Card>
                    </div>
           
          );
        })}
      </Row>
    </div>
  );
};

export default PrimiumManagmentTool;
