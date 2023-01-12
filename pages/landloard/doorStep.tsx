import React from "react";
import { Typography, Button } from "antd";

const TopMainComp = () => {
  return (
    <div className="landloardMainContent">
      <h2
        style={{
          paddingTop: "5vh",
          fontFamily: "system-ui",
          fontSize: "2rem",
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        Buy,Shell or Rent your spaces quickly
      </h2>
      <Typography
        style={{
          textAlign: "center",
          paddingTop: "3vh",
          fontFamily: "system-ui",
          fontSize: "1rem",
        }}
      >
        Digitize your space with content created by Propter
        <br /> and get it accross to the right buyers and renters pay us
        <br />
        only when we get you a successful deal
      </Typography>
      <Button type="primary" className="mainContentBtn">
        List Your Property
      </Button>
    </div>
  );
};

export default TopMainComp;
