import React, { useEffect, useState } from "react";
import axios from "axios";
import { Checkbox, Layout, Typography } from "antd";
import { Form, Input, Button, Col, Divider, Row } from "antd";
import type { FormItemProps } from "antd";
import { toast } from "react-toastify";
import Router, { useRouter, withRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

const MyFormItemContext = React.createContext<(string | number)[]>([]);
export interface UserDataTypes {
  address: String;
  email: String;
  id: Number;
  first_name: String;
  last_name: String;
  status: String;
}

interface MyFormItemGroupProps {
  prefix: string | number | (string | number)[];
  children: React.ReactNode;
}

export default function App() {
  const { query } = useRouter();
  const { TextArea } = Input;
  const [listingData, setListingData] = useState<UserDataTypes | any>("");
  const [allproperty, setAllProperty] = useState<UserDataTypes | any>("");

  const getAllData = async () => {
    const webtoken = localStorage.getItem("webToken");
    let web = webtoken?.substring(1, webtoken?.length - 1);
    try {
      await axios
        .get(`https://api-property.mangoitsol.com/api/listing`, {
          headers: {
            Authorization: `Bearer ${web}`,
          },  
        })
        .then((res) => {
          setAllProperty(res.data);
        });
    } catch (err) {
      console.log("#####", err);
    }
  };

  const getUserData = async () => {
    const webtoken = localStorage.getItem("webToken");
    let web = webtoken?.substring(1, webtoken?.length - 1);
    try {
      await axios
        .get(`https://api-property.mangoitsol.com/api/listing/${query?.slug}`, {
          headers: {
            Authorization: `Bearer ${web}`,
          },
        })
        .then((res) => {
          setListingData(res.data);
        });
    } catch (err) {
      console.log("#####", err);
    }
  };
  const onChange = (e: any) => {
    console.log("fgdfgfd");
  };

  useEffect(() => {
    getAllData();
    getUserData();
  }, []);

  var someString = listingData?.description;
  var index = someString?.indexOf("."); // Gets the first index where a space occours
  var firstPart = someString?.substr(0, index); // Gets the first part
  var secondPart = someString?.substr(index + 1);

  return (
    <>
      <div className="sec-block">
        <div className="container-fluid side-space-tow">
          <div className="row">
            <div className="col-md-12">
              <div className="top-sec-nav">
                <ul>
                  <li>
                    <span>
                      <Link href="/buy">
                        {" "}
                        <i className="fa fa-arrow-left" aria-hidden="true"></i>
                      </Link>
                    </span>
                  </li>
                  <li>
                    <Link href="#">Search</Link>
                  </li>
                  <li>
                    <Link href="#">Overview</Link>
                  </li>
                  <li>
                    <Link href="#">Amenities</Link>
                  </li>
                  <li>
                    <Link href="#">Floor Plans</Link>
                  </li>
                  <li>
                    <Link href="#">Price Trends</Link>
                  </li>
                  <li>
                    <Link href="#">
                      <span>
                        <i className="fa fa-heart-o" aria-hidden="true"></i>
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <section className="main-page">
          <div className="container-fluid side-space-tow">
            <div className="row">
              <div className="col-md-7 col-lg-9">
                <Image
                  // className="img-size"
                  src={listingData?.upload_file}
                  width={1200}
                  height={500}
                  alt="car-house"
                />
                <div className="img-gallery">
                  <Image
                    src="/002.jpg"
                    alt="-gallery-img"
                    width={143}
                    height={100}
                  />
                  <Image
                    src="/002.jpg"
                    alt="-gallery-img"
                    width={143}
                    height={100}
                  />
                  <Image
                    src="/002.jpg"
                    alt="-gallery-img"
                    width={143}
                    height={100}
                  />
                  <Image
                    src="/002.jpg"
                    alt="-gallery-img"
                    width={143}
                    height={100}
                  />
                  <Image
                    src="/002.jpg"
                    alt="-gallery-img"
                    width={143}
                    height={100}
                  />
                  <Image
                    src="/002.jpg"
                    alt="-gallery-img"
                    width={143}
                    height={100}
                  />
                  <Image
                    src="/002.jpg"
                    alt="-gallery-img"
                    width={143}
                    height={100}
                  />
                </div>
                <div className="house-detail">
                  <div className="img-detail">
                    <p>
                      <i className="fa fa-map-marker" aria-hidden="true"></i>
                      &nbsp;{listingData?.property_address}
                    </p>
                    <h4>{listingData?.property_name}</h4>
                    <span className="fontbed">
                      <Image src="/beds.svg" width={25} height={25} alt="fdf" />&nbsp;
                      {listingData?.beds} Bed
                    </span>
                    <span className="fontbed">
                    <Image src="/baths.svg" width={20} height={20} alt="fdf" />&nbsp;
                      {listingData?.baths} Baths
                    </span>
                    <span className="fontbed">
                    <Image src="/square-foot.svg" width={25} height={25} alt="fdf" />&nbsp;
                      {listingData?.sqft} sqft
                    </span>
                  </div>
                  <div className="price-box">
                    <h4>AED {listingData?.sale_value}</h4>
                    <p>{listingData?.property_sale_status}</p>
                    <Link className="btn-main" href="#">
                      Get Pre-Qualified
                    </Link>
                  </div>
                </div>
                <div className="Description">
                  <h5>Description</h5>
                  <p>{firstPart}</p>
                  <p>{secondPart}</p>
                </div>
                <div className="Open-House">
                  <h5>Open-House</h5>
                  <ul>
                    <li>
                      Saturday, July 30 <span>1:30 PM to 4:00 PM</span>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      Saturday, July 30 <span>1:30 PM to 4:00 PM</span>
                    </li>
                  </ul>
                </div>
                <div className="local-info">
                  <h5>Local Information</h5>
                  <div className="loc-box">
                    <Image
                      width={232}
                      height={170}
                      src="/map-box.png"
                      alt="map-box"
                    />
                    <p>Maps</p>
                  </div>
                  <div className="loc-box">
                    <Image
                      width={232}
                      height={170}
                      src="/map-box.png"
                      alt="map-box"
                    />
                    <p>Parks</p>
                  </div>
                  <div className="loc-box">
                    <Image
                      width={232}
                      height={170}
                      src="/map-box.png"
                      alt="map-box"
                    />
                    <p>Haspitals</p>
                  </div>
                  <div className="loc-box">
                    <Image
                      width={232}
                      height={170}
                      src="/map-box.png"
                      alt="map-box"
                    />
                    <p>Restaurants</p>
                  </div>
                </div>
                <p>
                  <br />
                  <i className="fa fa-car" aria-hidden="true"></i>
                  <span style={{ fontWeight: 600 }}> - mins to</span>
                  &nbsp;
                  <span style={{ color: "#0597ff", fontWeight: 600 }}>
                    Commute to location
                  </span>
                </p>
                <div className="Home-Highlights mt-4">
                  <h5>Home Highlights</h5>
                  <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    {listingData?.home_highlight?.map((data: any, i: any) => (
                      <Col className="gutter-row amndisplay" span={6} key={i}>
                        <span className="iocn-img">
                        <Image
                          width={45}
                          height={35}
                          src={data.icon}
                          alt="iocn-img"
                          />
                          </span>
                        <div>
                           &nbsp; <span style={{fontWeight: "600"}}>{data.name}</span> <br /> &nbsp;&nbsp;<span style={{color:"grey"}}>{data.sqft} sq feet</span> 
                        </div>
                      </Col>
                    ))}
                  </Row>
                </div>

                <div className="Amenities mt-5">
                  <h5>Amenities</h5>
                  <div className="container pl-0"> 
                        <Form className="form-amnt" action="/action_page.php">
                        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                          {listingData?.amenities?.map((amnt: any, i: any) => (
                            <Col className="gutter-row dddddd" span={8} key={i}>
                           <div key={i} className="amntencss">
                                <Checkbox onChange={onChange}>{amnt}</Checkbox>
                             </div>
                              </Col>
                          ))}
                          </Row>
                        </Form>   
                  </div>
                  <div className="Floor-Plans mt-5">
                    <h5>Floor Plans</h5>
                    <div className="container">
                      <div className="row">
                        <div className="col-md-6">
                          <Image
                            width={500}
                            height={300}
                            src="/Floor-Plans.png"
                            alt="foolr-img"
                          />
                        </div>
                        <div className="col-md-6">
                          <div className="Deluxe-Portion">
                            <h5>Deluxe Portion</h5>
                            <p>
                              Enimad minim veniam quis nostrud exercitat ullamco
                              laboris. Lorem ipsum dolor sit amet cons aetetur
                              adipisicing elit sedo eiusmod Incididunt labore et
                              dolore magna aliqua. Ut sed ayd minim veniam.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="total-sub">
                        <Image
                          width={1000}
                          height={50}
                          src="/total-sub.png"
                          alt="sub"
                        />
                      </div>
                      <div className="affar mt-4">
                        <h5>Affordability</h5>
                        <p>
                          Tip: You should try to keep your rent within a third
                          of your gross household income.
                        </p>
                        <div className="price-contant">
                          <div className="price-per-year">
                            <p>
                              For this Property
                              <span>AED 240,000</span> Per Year Is the suggested
                              income
                            </p>
                          </div>
                          <div className="price-text">
                            <p>
                              Win over prospective landlords with your smart
                              budgeting. As o good rule of thumb ideally you
                              would have at least three times your monthly rent
                              in combined household income.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="price-trd mt-4">
                        <Image
                          width={650}
                          height={400}
                          src="/price-trend.png"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="Related">
                      <h5>Related Properties</h5>
                          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                            {allproperty && allproperty?.map((list: any) => (
                              <Col className="gutter-row amndisplay" span={6} key={list.property_name}>
                                <div className="Related-box" >
                                  <Image
                                    width={300}
                                    height={150}
                                    src={list.upload_file}
                                    alt={list.property_name}
                                  />
                                  <div className="related-head">
                                    <h5>AED {list.sale_value}/Year</h5>
                                    <h6>{list.property_name}</h6>
                                    <p>
                                      {list.property_address}, {list.country}
                                    </p>
                                    <p>
                                      {list.beds} Beds &emsp;{list.baths} Baths
                                      &emsp;{list.sqft} Sq ft
                                    </p>
                                  </div>
                                </div>
                                </Col>
                              ))}
                              </Row>
                    </div>
                    <div className="Listing-box mt-5 pl-3">
                      <h5>Listing provided by</h5>
                      <p>
                        Roference: AJJ-23324
                        <br />
                        Broxeroge: beter Homes Inc.
                        <br />
                        Trokhees Permit 342343243
                        <br />
                        Broker ORK: 123212
                        <br />
                        Agent BRN: 2433
                        <br />
                        sing: 12 Days Ago
                        <br />
                        Lost Updotadt 20oys Ago.
                        <br />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-5 col-lg-3 ">
                <div className="top-button">
                  <Link href="#">Request a Tour</Link>
                  <Link href="#">Start a Application</Link>
                </div>
                <div className="contact-form-wrapper d-flex justify-content-center">
                  <Form action="#" className="contact-form">
                    <h5 className="title">Contact Agent</h5>
                    <div>
                      <Input
                        type="text"
                        className="form-control rounded border-white mb-3 form-input"
                        id="name"
                        placeholder="Your Name*"
                        required
                      />
                    </div>
                    <div>
                      <Input
                        type="email"
                        className="form-control rounded border-white mb-3 form-input"
                        placeholder="Your Phone*"
                        required
                      />
                    </div>
                    <div>
                      <Input
                        type="email"
                        className="form-control rounded border-white mb-3 form-input"
                        placeholder="Your Email*"
                        required
                      />
                    </div>
                    <div className="textAreaaa">
                      <TextArea
                        className="form-control rounded border-white mb-3 form-text-area"
                        placeholder="Message"
                      />
                    </div>
                    <div className="submit-button-wrapper">
                      <Button type="link">Send Message </Button>
                    </div>
                  </Form>
                </div>
                <div className="popular">
                  <h4>Popular Properties</h4>
                  <Image src="/005.jpg" width={300} height={175} alt="img" />
                  <h6>$349.00/Month</h6>
                  <h5>New Aparment Nice View</h5>
                  <address>
                    <i className="fa fa-map-marker" aria-hidden="true"></i>
                    Sector P, Emirates Hills
                  </address>
                  <span>
                    <i className="fa fa-bed" aria-hidden="true"></i>6 Beds +
                    Maid
                  </span>
                  <span>
                    <i className="fa fa-bath" aria-hidden="true"></i>7Baths
                  </span>
                  <span>
                    <i className="fa fa-microchip" aria-hidden="true"></i>13,450
                    sqft
                  </span>
                </div>
                <div className="real-Est">
                  <h5>Real Estate News</h5>
                  <div className="Rela-box">
                    <div className="dffd">
                      <Image width={95} height={50} src="/002.jpg" alt="as" />
                    </div>
                    <div className="real-heading">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit.
                      </p>
                    </div>
                  </div>
                  <div className="Rela-box">
                    <div className="dffd">
                      <Image width={95} height={50} src="/002.jpg" alt="ss" />
                    </div>
                    <div className="real-heading">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit.
                      </p>
                    </div>
                  </div>
                  <div className="Rela-box">
                    <div className="dffd">
                      <Image width={95} height={50} src="/002.jpg" alt="ssd" />
                    </div>
                    <div className="real-heading">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit.
                      </p>
                    </div>
                  </div>
                  <div className="Rela-box">
                    <div className="dffd">
                      <Image width={95} height={50} src="/002.jpg" alt="xzc" />
                    </div>
                    <div className="real-heading">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="share-icon">
                  <h5>Share this property</h5>
                  <div className="social-icon">
                    <i className="fa fa-facebook" aria-hidden="true"></i>
                    <i className="fa fa-instagram" aria-hidden="true"></i>
                    <i className="fa fa-youtube" aria-hidden="true"></i>
                    <i className="fa fa-twitter" aria-hidden="true"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
