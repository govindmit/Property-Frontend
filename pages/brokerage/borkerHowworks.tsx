import React from 'react'
import { Typography, Row, Col, Card, Space, Image } from "antd";
// import Image from "next/image";
const { Meta } = Card;
const { Title } = Typography;

const BorkerHowworks = () => {
    const array = [
        {
          img: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
          title: "Listing creation",
          description: "Fill in basic information about your property like, expected income, property address,document etc and submit to propter",
        },
        {
          img: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
          title: "Pay per Lead",
          description:"Fill in basic information about your property like, expected income, property address,document etc and submit to propter",
        },
        {
          img: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
          title: "Updates",
          description:"Fill in basic information about your property like, expected income, property address,document etc and submit to propter",
        },
        {
          img: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
          title: "Applications",
          description:"Fill in basic information about your property like, expected income, property address,document etc and submit to propter",
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
     We connect you with the best leads to help convert your property stock into a successful transaction
    </Typography>


    <Row justify="center" className="landloardTopContentRow">
      {array?.map((e,i)=>{
        return(
          
          <div key={i} style={{margin:'10px 1.5%'}}>
         
          <Card
          key={e.title}
          className="landloardTopContentCard"
            style={{ width: 220 }}
            cover={
              <Image
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                preview={false}
              />
            }
          >
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
       
        )
      })}
     
     
    </Row>
  </div>
);
  
}

export default BorkerHowworks