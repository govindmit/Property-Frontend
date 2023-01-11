import React from "react";
import { Col, Card, Row, Space } from "antd";
import buyHome from "/public/assets/buyHome.png";
import rentHome from "/public/assets/rentHome.png";
import sellProperty from "/public/assets/sellProperty.png";
import vouchers from "/public/assets/rentHome.png";
import { ArrowRightOutlined } from "@ant-design/icons";
import {Image} from "antd";
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
    // <div className="propterHelpCls">
    //   <h1
    //     style={{
    //       paddingTop: "10vh",
    //       fontFamily: "system-ui",
    //       fontSize: "2.5rem",
    //       fontWeight: "bold",
    //       textAlign: "center",
    //     }}
    //   >
    //     See How Propter Can Help
    //   </h1>
    //   <Row
    //     gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
       
    //     className="propterRowCls"
    //   >
    //     {rowArray.map((e, i) => {
    //       return (
    //         <div key={i}>
    //           <Space>
    //             <Col className="gutter-row propertyColCls" span={32}>
    //               <Card
    //                 hoverable
    //                 style={{ width: '220px',marginTop:'5%' ,  boxShadow: '0px 0px 10px 0px rgba(0,0,0,10%)'}}
                    
    //               >
    //                  <Image
    //                  className="propertyImgCls"
    //                     alt="example"
    //                     src={e.Img.src}
    //                     width={100}
    //                     height={90}
                       
    //                   />
               
    //                 <Meta
    //                 className="propterHelpMetaCls"
    //                  title={e.title} description={e.description}
    //                 />
    //                 <div className="propterCardLinkCls"> <a className="homeCardLink">{e.link}</a>
    //                 <ArrowRightOutlined
    //                   style={{
    //                     fontSize:'12px',
    //                     color: "orangered",
    //                     marginLeft: "3%",
    //                     marginTop: "1%",
    //                   }}
    //                 /></div>
                   
    //               </Card>
    //             </Col>
    //           </Space>
    //         </div>
    //       );
    //     })}
    //   </Row>
    // </div>

    <div className="wrapper-area">
      <section className="main-contant">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="main-contant-heading">
                  <h2>See how Propter can help</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 col-lg-3">
                <div className="cart-box02">
                  <Image
                    width={80}
                    src="/agreement.png"
                    alt="box-img"
                    preview={false}
                  />
                  <h6>Digital marketing</h6>
                  <p>
                    We&apos;ll promote your property across our digital channels and
                    get you the best quality leads.
                  </p>
                  <a href="#">
                    Find Your Home{" "}
                    <i
                      className="fa fa-long-arrow-right"
                      aria-hidden="true"
                    ></i>
                  </a>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="cart-box02">
                <Image
                    width={80}
                    src="/agreement.png"
                    alt="box-img"
                    preview={false}
                  />
                  <h6>Listing Management</h6>
                  <p>Manage your listing and monitor its performance.</p>
                  <a href="#">
                    Find Your Home{" "}
                    <i
                      className="fa fa-long-arrow-right"
                      aria-hidden="true"
                    ></i>
                  </a>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="cart-box02">
                <Image
                    width={80}
                    src="/agreement.png"
                    alt="box-img"
                    preview={false}
                  />
                  <h6>Detailed Analytics</h6>
                  <p>
                    Get insights on your leads and listings, and how they are
                    performing in real-time to analyze what&apos;s driving demand.
                  </p>
                  <a href="#">
                    Find Your Home{" "}
                    <i
                      className="fa fa-long-arrow-right"
                      aria-hidden="true"
                    ></i>
                  </a>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="cart-box02">
                <Image
                    width={80}
                    src="/agreement.png"
                    alt="box-img"
                    preview={false}
                  />
                  <h6>Listing Management</h6>
                  <p>Manage your listing and monitor its performance.</p>
                  <a href="#">
                    Find Your Home{" "}
                    <i
                      className="fa fa-long-arrow-right"
                      aria-hidden="true"
                    ></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

    </div>
  );
};

export default PropterHelp;
