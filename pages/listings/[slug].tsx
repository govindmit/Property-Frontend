/* eslint-disable react/jsx-no-undef */
import React, { useEffect, useState, useCallback } from "react";
import dynamic from "next/dynamic";
import axios from "axios";
import { Checkbox, Layout, Typography } from "antd";
import { Form, Input, Button, Col, Divider, Row, Tabs } from "antd";
import type { FormItemProps } from "antd";
import { toast } from "react-toastify";
import Router, { useRouter, withRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import propertyService from "../../services/propertyService";
import Moment from "moment";
import Loader from "../common/loader";
import ImageGallery, { ReactImageGalleryItem } from "react-image-gallery";
import VideoImageThumbnail from "react-video-thumbnail-image"; // use npm published version
// const VideoThumbnail = dynamic(import("react-video-thumbnail"), { ssr: false });

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

const slideWidth = 30;

const sleep = (ms = 0) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};
const createItem = (position: any, idx: any) => {
  const item = {
    styles: {
      transform: `translateX(${position * slideWidth}rem)`,
    },
    player: position,
  };

  const item1 = {
    styles: {
      transform: `translateX(${position * slideWidth}rem)`,
      filter: "grayscale(1)",
    },
    player: position,
  };

  const item2 = {
    styles: {
      transform: `translateX(${position * slideWidth}rem)`,
      opacity: 0,
    },
    player: position,
  };

  switch (position) {
    case length - 1:
    case length + 1:
      item.styles = { ...item1.styles };
      break;
    case length:
      break;
    default:
      item.styles = { ...item2.styles };
      break;
  }

  return item;
};

const CarouselSlideItem = ({ pos, idx, activeIdx }: any) => {
  const item = createItem(pos, idx);
  return (
    <li className="carousel__slide-item" style={item.styles}>
      <div className="carousel__slide-item-img-link">
        <Link href={`/listings/${item?.player?.slug}`}>
          <Image
            width={50}
            height={50}
            src={item?.player?.upload_file?.imagee[0]}
            alt="image"
          />
        </Link>
      </div>
      <div className="popularProperty">
        <h6 className="fonthead">
          $ {(pos?.rent_per_year / 12)?.toFixed(2) + "/Month"}
        </h6>
        <h5>{pos?.property_name}</h5>
        <address>
          <i className="fa fa-map-marker" aria-hidden="true"></i>
          {pos?.property_address}
        </address>
        <span>
          <i className="fa fa-bed" aria-hidden="true"></i>
          {pos?.beds} Bedrooms
        </span>
        &emsp;
        <span>
          <i className="fa fa-bath" aria-hidden="true"></i>
          {pos?.baths} Baths
        </span>
        &emsp;
        <span>
          <i className="fa fa-microchip" aria-hidden="true"></i>
          {pos?.sqft} Sq Ft
        </span>
      </div>
    </li>
  );
};

const Carousel = () => {
  const [items, setItems] = React.useState([]);
  const [isTicking, setIsTicking] = React.useState(false);
  const [activeIdx, setActiveIdx] = React.useState(0);
  const [iidx, setiidx] = React.useState(0);

  const bigLength = items.length;

  const getPopularProperty = async () => {
    const webtoken = localStorage.getItem("webToken");
    let web = webtoken?.substring(1, webtoken?.length - 1);
    await propertyService.popularRentProperty(web).then(async (data: any) => {
      setItems(data?.data?.data);
    });
  };

  const prevClick = (jump = 1) => {
    if (!isTicking) {
      setIsTicking(true);
      setItems((prev: any) => {
        return prev.map((_: any, i: any) => prev[(i + jump) % bigLength]);
      });
    }
  };

  const nextClick = (jump = 1) => {
    if (!isTicking) {
      setIsTicking(true);
      setItems((prev: any) => {
        return prev.map(
          (_: any, i: any) => prev[(i - jump + bigLength) % bigLength]
        );
      });
    }
  };
  const handleDotClick = (idx: any) => {
    setiidx(idx);
    if (idx < iidx) prevClick(iidx - idx);
    if (idx > iidx) nextClick(idx - iidx);
  };
  React.useEffect(() => {
    if (isTicking) sleep(300).then(() => setIsTicking(false));
  }, [isTicking]);

  React.useEffect(() => {
    setActiveIdx((bigLength - (iidx % bigLength)) % bigLength);
  }, [items]);
  React.useEffect(() => {
    getPopularProperty();
  }, []);
  return (
    <div className="carousel__wrap ">
      <div className="carousel__inner">
        <div className="carousel__container">
          <ul className="carousel__slide-list">
            {items?.slice(0, 5)?.map((pos: any, i: any) => (
              <CarouselSlideItem
                key={i}
                idx={i}
                pos={pos}
                activeIdx={activeIdx}
              />
            ))}
          </ul>
        </div>
        <div className="carousel__dots">
          {items?.slice(0, 5)?.map((pos: any, i: any) => (
            <button
              key={i}
              onClick={() => handleDotClick(i)}
              className={i === activeIdx ? "dot active" : "dot"}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default function App() {
  const { query } = useRouter();
  const { TextArea } = Input;
  let datee = new Date();
  var newThumb:any;
  const [loading, setLoading] = useState<Boolean>(false);
  const [listingData, setListingData] = useState<UserDataTypes | any>("");
  const [allproperty, setAllProperty] = useState<UserDataTypes | any>("");
  const [thumb, setThumb] = useState<any>("");
  
  const memoizedHandleClick = useCallback((item: any) => {
    return (
      <video width="918" controls>
        <source src={item.embedUrl} />
      </video>
    );
  }, []);

  var imageee:any[] = [];
  for (var i = 0; i < listingData?.upload_file?.imagee.length; i++) {
    imageee.push({
      original: listingData?.upload_file?.imagee[i]?.replace('http','https'),
      thumbnail: listingData?.upload_file?.imagee[i]?.replace('http','https'),
    });
  }
  // const images: readonly ReactImageGalleryItem[] = imageee;

  for (var i = 0; i < listingData?.upload_file?.videos.length; i++) {
     newThumb = listingData?.upload_file?.videos[i];
    imageee.push({
      original: "",
      thumbnail: thumb && thumb === "" ? "/video-img-banner.png" : thumb,
      embedUrl: listingData?.upload_file?.videos[i]?.replace('http','https'),
      renderItem: memoizedHandleClick,
    });
  }

  const getUserData = async () => {
    const webtoken = localStorage.getItem("webToken");
    let web = webtoken?.substring(1, webtoken?.length - 1);
    await propertyService
      .getPropertyBySlug(query?.slug, web)
      .then(async (data: any) => {
        setListingData(data?.data[0]);
        if (data) {
          await propertyService
            .getRentProperty(web, data?.data[0]?.city)
            .then((data: any) => {
              setAllProperty(data.data);
              setLoading(true);
            });
        }
      });
  };
  const onChange = (e: any) => {
    console.log("fgdfgfd");
  };

  useEffect(() => {
    if (!query) {
      return;
    }
    getUserData();
  }, [query]);

  var someString = listingData?.description;
  var index = someString?.indexOf("."); // Gets the first index where a space occours
  var firstPart = someString?.substr(0, index); // Gets the first part
  var secondPart = someString?.substr(index + 1);

  let dateFormet1 = Moment(listingData?.createdAt).format("MM-DD-YYYY");
  let dateFormet2 = Moment(datee).format("MM-DD-YYYY");
  var date1 = Moment(dateFormet2);
  var date2 = Moment(dateFormet1);
  var days = date1.diff(date2, "days");

  const items = listingData?.floor_planes?.map((data: any, i: any) => {
    const id = String(i + 1);
    return {
      label: `${data?.floor_range}`,
      key: id,
      children: (
        <div>
          <div style={{ display: "flex" }}>
            {data && data?.plan_drawing === undefined ? (
              <Image width={400} height={350} src="" alt="foolr-img" />
            ) : (
              <Image
                width={400}
                height={350}
                src={data?.plan_drawing[0]}
                alt="foolr-img"
              />
            )}
            <div className="col-md-6">
              <div className="Deluxe-Portion" style={{ marginLeft: "24%" }}>
                <h5>Deluxe Portion</h5>
                <p>{data?.description}</p>
              </div>
            </div>
          </div>
          <div className="bgfloor">
            <div style={{ display: "flex" }}>
              <p className="headtabs">Total Area &emsp;</p>
              <p className="paraheading">
                {" "}
                .........................&emsp;{data?.sqft} Sq. Ft
              </p>
              <br />
              <p style={{ marginLeft: "25%" }} className="headtabs">
                Smokings &emsp;
              </p>
              <p className="paraheading">
                .........................&emsp; Not Allowed
              </p>
            </div>
            {data?.floor_range === "Top Garden" ? (
              ""
            ) : (
              <div style={{ display: "flex" }}>
                <p className="headtabs">Bedroom &emsp;</p>
                <p className="paraheading">
                  {" "}
                  .........................&emsp;{data?.bedroom_sqft} Sq. Ft
                </p>
                <br />
                <p style={{ marginLeft: "28.3%" }} className="headtabs">
                  Lounge &emsp;
                </p>
                <p className="paraheading">
                  .........................&emsp;{data?.lounge_sqft} Sq. Ft
                </p>
              </div>
            )}
          </div>
        </div>
      ),
    };
  });

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
                { newThumb === undefined ? (
                  ""
                ) : (
                  <div className="videothumb">
                    <VideoImageThumbnail
                       videoUrl={newThumb}
                       thumbnailHandler={(thumbnail: any) => setThumb(thumbnail)}
                    />
                  </div>
                )}
                 {loading ? (
                <div className="img-gallery">
                  <ImageGallery
                   items={imageee && imageee}
                   showNav={false}
                   showFullscreenButton={false}
                   showPlayButton={false}
                  />
                </div>
                  ) : (
                    <Loader />
                  )}  
                <div className="house-detail">
                  <div className="img-detail">
                    <p className="iconmap">
                      <i className="fa fa-map-marker" aria-hidden="true"></i>
                      &nbsp;{listingData?.property_address}, {listingData?.city}
                    </p>
                    <h4>{listingData?.property_name}</h4>
                    <span className="fontbed">
                      <Image src="/beds.svg" width={25} height={25} alt="fdf" />
                      &nbsp;
                      {listingData?.beds} Bed
                    </span>
                    <span className="fontbed">
                      <Image
                        src="/baths.svg"
                        width={20}
                        height={20}
                        alt="fdf"
                      />
                      &nbsp;
                      {listingData?.baths} Baths
                    </span>
                    <span className="fontbed">
                      <Image
                        src="/square-foot.svg"
                        width={25}
                        height={25}
                        alt="fdf"
                      />
                      &nbsp;
                      {listingData?.sqft} sqft
                    </span>
                  </div>
                  <div className="price-box">
                    <h4>AED {listingData?.rent_per_year}/Year</h4>
                  </div>
                </div>
                <div className="Description" style={{ marginTop: "25px" }}>
                  <h5>Description</h5>
                  <p>{firstPart}</p>
                  <p>{secondPart}</p>
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
                    <p>Hospitals</p>
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
                          &nbsp;{" "}
                          <span style={{ fontWeight: "600" }}>{data.name}</span>{" "}
                          <br /> &nbsp;&nbsp;
                          <span style={{ color: "grey" }}>
                            {data.sqft} sq feet
                          </span>
                        </div>
                      </Col>
                    ))}
                  </Row>
                </div>

                <div className="Amenities mt-5">
                  <h5 className="amanities">Amenities</h5>
                  <div className="container pl-0">
                    <Form className="form-amnt" action="/action_page.php">
                      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                        {listingData?.amenities?.map((amnt: any, i: any) => (
                          <Col className="gutter-row dddddd" span={8} key={i}>
                            <div key={i} className="amntencss">
                              <Checkbox
                                onChange={onChange}
                                className="checkcss"
                              >
                                {amnt}
                              </Checkbox>
                            </div>
                          </Col>
                        ))}
                      </Row>
                    </Form>
                  </div>
                  <div className="Floor-Plans mt-5 floorcss">
                    <h5>Floor Plans</h5>
                    <div className="container">
                      <Tabs items={items} className="tabClass" />
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
                        {allproperty &&
                          allproperty?.slice(0, 4)?.map((list: any) => (
                            <Col
                              className="gutter-row amndisplay"
                              span={6}
                              key={list.property_name}
                            >
                              <Link href={`/listings/${list?.slug}`}>
                                <div className="Related-box">
                                  <Image
                                    width={300}
                                    height={150}
                                    src={list.upload_file?.imagee[0]}
                                    alt={list.property_name}
                                  />
                                  <div className="related-head">
                                    <h5>AED {list.rent_per_year}/Year</h5>
                                    <h6>{list.property_name}</h6>
                                    <p className="iconmap">
                                      <i
                                        className="fa fa-map-marker"
                                        aria-hidden="true"
                                      ></i>
                                      &nbsp; {list.property_address},{" "}
                                      {list.city}
                                    </p>
                                    <p>
                                      {list.beds} Beds &emsp;{list.baths} Baths
                                      &emsp;{list.sqft} Sq ft
                                    </p>
                                  </div>
                                </div>
                              </Link>
                            </Col>
                          ))}
                      </Row>
                    </div>
                    <div className="Listing-box mt-5 pl-3">
                      <h5>Listing provided by</h5>
                      <p>
                        Reference: AJJ-23324
                        <br />
                        Brokerage:{listingData?.user?.organization_name}
                        <br />
                        Trakheesi Permit: {listingData?.user?.trakheesi_number}
                        <br />
                        Broker ORN: {listingData?.user?.ORN}
                        <br />
                        Agent BRN: {listingData?.user?.BRN}
                        <br />
                        Listing: {days} Days Ago
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
                    <h5 className="title">Contact Us</h5>
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
                  <h5>Popular Properties</h5>
                  <Carousel />
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
