import React from 'react'
import { Typography,Button } from "antd";

const BrokerTopContent = () => {
  return (
    <div className="brokerMainContent">
    <h2
      style={{
        paddingTop: "10vh",
        fontFamily: "system-ui",
        fontSize: "2.5rem",
        fontWeight: "bold",
        textAlign: "center",
      }}
    >
    Leads delivered to your doorstep
    </h2>
    <Typography
      style={{
        textAlign: "center",
        paddingTop: "3vh",
        fontFamily: "system-ui",
        fontSize: "1rem",
      }}
    >
     We offer you an immersive marketing platform complete with tools, analytics,
      <br/> transaction management etc,to pu your properties across quality audience and 
      <br/> generate high quality leads- The best part is you dont need to pay us any fee for listing
      
    </Typography>
    <Button type="primary" className="brokermainContentBtn">Become A partner</Button>
  </div>
  )
}

export default BrokerTopContent