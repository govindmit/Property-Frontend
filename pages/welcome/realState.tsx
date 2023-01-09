import React from "react";
import { Col, Card, Row, Space, Button, Typography } from "antd";

const style: React.CSSProperties = { background: "#0092ff", padding: "8px 0" };
const RealState = () => {
  return (
    <div className="realStateCls">
      <h1
        style={{
          paddingTop: "10vh",
          fontFamily: "system-ui",
          fontSize: "2.5rem",
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        Real State Market Updates
      </h1>
      <Row
        gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
        style={{
          transform: "translate(-50%, 0%)",
          marginLeft: "50%",
          maxWidth: "1088px",
          width: "100%",
        }}
        className="realStateRow"
      >
        <Space>
          <Col className="gutter-row  realStateColCls" span={32}>
            <Card
              className="realStateCardCls1"
              hoverable
             
            >
              <div className="textCls" style={{ paddingTop: "30px" }}>
                <span className="spanCls">Buyer Guide</span>
                <Button className="firstCardBtn">25 jul 2022</Button>
              </div>
              <h3 className="h3Cls">What you should Be Prepared with before buying ?</h3>
            </Card>
            <Card
              className="realStateCardCls1"
              hoverable
           
            >
              <div className="textCls" style={{ paddingTop: "30px" }}>
                <span className="spanCls">Buyer Guide</span>
                <Button className="firstCardBtn">25 jul 2022</Button>
              </div>
              <h3 className="h3Cls">What you should Be Prepared with before buying ?</h3>
            </Card>
          </Col>
        </Space>

        {/* ============================================================== */}

        <Space>
          <Col className="gutter-row  realStateColCls" span={32}>
            <Card className="realStateCardCls" hoverable>
              <div className="textCls">
                <span className="spanCls">Real estate</span>
                <Button className="firstCardBtn">25 jul 2023</Button>
              </div>
              <h3>Have an ear to the groundon what real estate invest</h3>
              <span className="spanCls">Read more</span>
            </Card>
          </Col>
        </Space>
        <Space>
          <Col className="gutter-row  realStateColCls" span={32}>
            <Card className="realStateCardCls" hoverable>
              <div className="textCls">
                <span className="spanCls">Dubai marina</span>
                <Button className="firstCardBtn">25 jul 2022</Button>
              </div>
              <h3>apprisial skills and realestate career?Mckissock</h3>
              <span className="spanCls">Read more</span>
            </Card>
          </Col>
        </Space>
      </Row>
    </div>
  );
};

export default RealState;
