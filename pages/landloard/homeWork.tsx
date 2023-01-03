import React from "react";
import { Typography, Row, Col, Card, Space, Image } from "antd";
// import Image from "next/image";
const { Meta } = Card;
const { Title } = Typography;

const HomeWorkComp = () => {
  const array = [
    {
      img: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
      title: "property information",
      description:
        "www.instagram. comwww.instagram .comwww.instagram.comwww.insta",
    },
    {
      img: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
      title: "Valuation",
      description:
        "www.instagram.comwww.instagram .com www.instagram.comwww.instagram.com",
    },
    {
      img: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
      title: "Listing creation and assignment",
      description:
        "www.instagram.comwww .instagram.com www.instagram.comwww.instagram.com",
    },
    {
      img: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
      title: "Monitor",
      description:
        "www.instagram.comwww.instagram.com www.instagram .comwww.instagram.com",
    },
    {
      img: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
      title: "Pay",
      description:
        "www.instagram.comwww.instagram.com www.instagram.comwww .instagram.com",
    },
  ];
  return (
    <div className="landLoardHomeWorks">
      <h2
        style={{
          paddingTop: "10vh",
          fontFamily: "system-ui",
          fontSize: "2.5rem",
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        How it works
      </h2>
      <Typography
        style={{
          textAlign: "center",
          fontFamily: "system-ui",
          fontSize: "1.5rem",
          marginTop:'2%'
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Typography>


      <Row justify="space-around" className="landloardTopContentRow">
        {array?.map((e,i)=>{
          return(
            // <Col span={4}>
            <div key={i}>
           
            <Card
            key={e.title}
            className="landloardTopContentCard"
              style={{ width: 300 }}
              cover={
                <Image
                  alt="example"
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                  preview={false}
                />
              }
            >
            {/* <Meta className="landloardTopContentMeta" title={e.title} description={e.description} /> */}
            <div>
            <Title className="landloardTopContentTitle" level={5}>
            {e.title}
            </Title>
            </div>
           <div  className="landloardTopContentDescription">
              {e.description}
           </div>
            </Card>
            </div>
          // </Col>
          )
        })}
       
       
      </Row>
    </div>
  );
};

export default HomeWorkComp;
