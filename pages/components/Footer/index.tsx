import React from "react";
import { Layout } from "antd";
import { Col, Row, List, Typography, Space, Button, Image, Input } from "antd";
import logo from "../../../public/assets/logo.png";
import {  EnvironmentOutlined, } from "@ant-design/icons";
import Router from "next/router";
const { Title} = Typography

const { Header, Footer, Sider, Content } = Layout;
const style: React.CSSProperties = {
  background: "cyan",
  padding: "5px 0",
  color: "white",
};
const data = [
  "Racing car sprays burning fuel into crowd.",
  "Japanese princess to wed commoner.",
  "Australian walks 100km after outback crash.",
  "Man charged over missing wedding girl.",
  "Los Angeles battles huge wildfires.",
];
const FooterComp = () => {

  const handleClick =() =>{
    Router.push('/')
  }
  return (
    <div>
      <Layout className="footerLayout">
        <Header style={{ height: "auto" }} >
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} className='footMainRow'>
            <Col className="gutter-row" span={6}>
              <List header={<h4>About Us.</h4>} style={{ color: "white" }}>
                <Typography style={{ color: "white",marginTop:'10px',fontSize:'12px',width:'70%' }}>
                  With the online text generator you can process your personal
                  Lorem Ipsum enriching it with html elements that define its
                  structure, with the possibility to insert external links, but
                  not only.
                </Typography>
                <Space wrap style={{marginTop:'30px'}}>
                  <Button shape="circle">?</Button>
                  <Button
                    shape="circle"
                    style={{ backgroundColor: "orangered", color: "white" }}
                  >
                    ?
                  </Button>
                  <Button shape="circle">?</Button>
                  <Button shape="circle">?</Button>
                </Space>
              </List>
            </Col>

            <Col className="gutter-row" span={6}>
              <List header={<h4>Company</h4>} style={{ color: "white" }}>
                <List.Item style={{ color: "white", marginLeft:'-20px',fontSize:'12px'}} className='footerListItem'>About us</List.Item>
                <List.Item style={{ color: "white", marginLeft:'-20px',fontSize:'12px'}} className='footerListItem'>Leadership</List.Item>
                <List.Item style={{ color: "white", marginLeft:'-20px',fontSize:'12px'}} className='footerListItem'>Careers</List.Item>
                <List.Item style={{ color: "white", marginLeft:'-20px',fontSize:'12px'}} className='footerListItem'>Blog</List.Item>
                <List.Item style={{ color: "white", marginLeft:'-20px',fontSize:'12px'}} className='footerListItem'>
                  Propter Partners
                </List.Item>
                <List.Item style={{ color: "white", marginLeft:'-20px',fontSize:'12px'}} className='footerListItem'>Contact Us</List.Item>
              </List>
            </Col>

            <Col className="gutter-row" span={6}>
              <List header={<h4>Help?</h4>} style={{ color: "white" }}>
                <List.Item style={{ color: "white", marginLeft:'-20px',fontSize:'12px'}} className='footerListItem'>FAQ</List.Item>
                <List.Item style={{ color: "white", marginLeft:'-20px',fontSize:'12px'}} className='footerListItem'>Tearm And Condition </List.Item>
                <List.Item style={{ color: "white", marginLeft:'-20px',fontSize:'12px'}} className='footerListItem'>Reporting</List.Item>
                <List.Item style={{ color: "white", marginLeft:'-20px',fontSize:'12px'}} className='footerListItem'>Documentation</List.Item>
                <List.Item style={{ color: "white", marginLeft:'-20px',fontSize:'12px'}} className='footerListItem'>Support Policy</List.Item>
                <List.Item style={{ color: "white", marginLeft:'-20px',fontSize:'12px'}} className='footerListItem'>Privacy</List.Item>
              </List>
            </Col>
            <Col className="gutter-row" span={6}>
              <List
                header={
                  <>
                    <Image src={logo.src} alt="imagee" preview={false} style={{cursor:'pointer'}}/>
                    <h4 style={{ marginTop: "-30px", marginLeft: "65px" }}>
                      Propter
                    </h4>
                  </>
                }
                style={{ color: "white" ,cursor:'pointer' }}
                
              >
                <Typography style={{ color: "white" ,marginTop:'20px'}}>
                  Read Estate transaction made simple,efficent and quicker.
                </Typography>
                <Space style={{marginTop:'30px'}}>
                <EnvironmentOutlined
                  style={{ fontSize: "10px", color: "white" }}
                />
                  Dubai
                </Space>
                <Row style={{marginTop:'30px'}}>
                  <Col span={12}>
                    <Input placeholder="Basic usage"  style={{borderRadius:'0px'}}/>
                  </Col>
                  <Col span={12} >
                    <Button style={{ backgroundColor: "orangered", color: "white" ,borderRadius:'0px'}}>Subscribe</Button>
                  </Col>
                </Row>
              </List>
            </Col>
          </Row>
        </Header>

        <Footer style={{ textAlign: 'left',backgroundColor:'#484242',color:'white' }}>
          <Typography style={{ textAlign: 'center',color:'white' }}>©Propter2022 All rights reserved</Typography>
          
        </Footer>
      </Layout>
    </div>
  );
};

export default FooterComp;
