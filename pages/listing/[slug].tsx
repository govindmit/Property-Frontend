import React, { useEffect, useState } from "react";
import axios from "axios";
import { Divider, Layout, Typography } from "antd";
import { Form, Input, Button } from "antd";
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

  const [listingData,setListingData]=useState<UserDataTypes | any>("")
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

  useEffect(() => {
    getUserData();
  }, []);

console.log('@@@@@@@@@@@@@@@',listingData);
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
                    <Link href="/buy"> <i className="fa fa-arrow-left" aria-hidden="true"></i></Link>
                    </span>
                  </li>
                  <li>
                    <a href="#">Search</a>
                  </li>
                  <li>
                    <a href="#">Overview</a>
                  </li>
                  <li>
                    <a href="#">Amenities</a>
                  </li>
                  <li>
                    <a href="#">Floor Plans</a>
                  </li>
                  <li>
                    <a href="#">Price Trends</a>
                  </li>
                  <li>
                    <a href="#">
                      <span>
                        <i className="fa fa-heart-o" aria-hidden="true"></i>
                      </span>
                    </a>
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
                  <img src="/002.jpg" alt="-gallery-img" />
                  <img src="/002.jpg" alt="-gallery-img" />
                  <img src="/002.jpg" alt="-gallery-img" />
                  <img src="/002.jpg" alt="-gallery-img" />
                  <img src="/002.jpg" alt="-gallery-img" />
                  <img src="/002.jpg" alt="-gallery-img" />
                </div>
                <div className="house-detail">
                  <div className="img-detail">
                    <p>
                      <i className="fa fa-map-marker" aria-hidden="true"></i>
                      Sector P, Emirates Hills
                    </p>
                    <h4>Exclusive renovated 6 bed villa with superb views</h4>
                    <span>
                      <i className="fa fa-bed" aria-hidden="true"></i>6 Beds +
                      Maid
                    </span>
                    <span>
                      <i className="fa fa-bath" aria-hidden="true"></i>7Baths
                    </span>
                    <span>
                      <i className="fa fa-microchip" aria-hidden="true"></i>
                      13,450 sqft
                    </span>
                  </div>
                  <div className="price-box">
                    <h4>AED 43,800,000</h4>
                    <p>Est, Mortguage AED18333/mo</p>
                    <a className="btn-main" href="#">
                      Get Pre-Qualified
                    </a>
                  </div>
                </div>
                <div className="Description">
                  <h5>Description</h5>
                  <p>
                    Recently renovated, and with breathtaking lake views, this
                    6-bedroom villa resides in the prestigious Emirates Hills
                    community, Ready to move in, it offers a refined,
                    family-centric lifestyle with ample gated parking for the
                    owners.
                  </p>
                  <p>
                    This home is committed to being a sophisticated sanctuary
                    for residents. This is seen in separate formal and informal
                    living areas offering spacious living for those memorable
                    get-togethers, These are complemented by main and serving
                    kitchens, both newly upgraded to include state-of-the-art
                    fittings and fixtures, Upstairs, a family room provides a
                    private relaxation space.
                  </p>
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
                    <img src="/map-box.png" alt="map-box" />
                    <p>Maps</p>
                  </div>
                  <div className="loc-box">
                    <img src="/map-box.png" alt="map-box" />
                    <p>Parks</p>
                  </div>
                  <div className="loc-box">
                    <img src="/map-box.png" alt="map-box" />
                    <p>Haspitals</p>
                  </div>
                  <div className="loc-box">
                    <img src="/map-box.png" alt="map-box" />
                    <p>Resta</p>
                  </div>
                </div>
                <p>
                  <i className="fa fa-car" aria-hidden="true"></i>- mins to{" "}
                  <span>commute to location</span>
                </p>
                <div className="Home-Highlights mt-4">
                  <h5>Home Highlights</h5>
                  <div className="container mt-4">
                    <div className="row">
                      <div className="col-md-3 p-0">
                        <div className="Highlights-opt">
                          <div className="iocn-img">
                            <img src="/bed.png" alt="iocn-img" />
                          </div>
                          <div className="home-heading">
                            <h6>
                              Living Room <br /> 24 * 11
                            </h6>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3 p-0">
                        <div className="Highlights-opt">
                          <div className="iocn-img">
                            <img src="/bed.png" alt="iocn-img" />
                          </div>
                          <div className="home-heading">
                            <h6>
                              Living Room <br /> 24 * 11
                            </h6>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3 p-0">
                        <div className="Highlights-opt">
                          <div className="iocn-img">
                            <img src="/bed.png" alt="iocn-img" />
                          </div>
                          <div className="home-heading">
                            <h6>
                              Living Room <br /> 24 * 11
                            </h6>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3 p-0">
                        <div className="Highlights-opt">
                          <div className="iocn-img">
                            <img src="/bed.png" alt="iocn-img" />
                          </div>
                          <div className="home-heading">
                            <h6>
                              Living Room <br /> 24 * 11
                            </h6>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="col-md-3 p-0">
                        <div className="Highlights-opt">
                          <div className="iocn-img">
                            <img src="/bed.png" alt="iocn-img" />
                          </div>
                          <div className="home-heading">
                            <h6>
                              Living Room <br /> 24 * 11
                            </h6>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3 p-0">
                        <div className="Highlights-opt">
                          <div className="iocn-img">
                            <img src="/bed.png" alt="iocn-img" />
                          </div>
                          <div className="home-heading">
                            <h6>
                              Living Room <br /> 24 * 11
                            </h6>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3 p-0">
                        <div className="Highlights-opt">
                          <div className="iocn-img">
                            <img src="/bed.png" alt="iocn-img" />
                          </div>
                          <div className="home-heading">
                            <h6>
                              Living Room <br /> 24 * 11
                            </h6>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3 p-0">
                        <div className="Highlights-opt">
                          <div className="iocn-img">
                            <img src="/bed.png" alt="iocn-img" />
                          </div>
                          <div className="home-heading">
                            <h6>
                              Living Room <br /> 24 * 11
                            </h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="Amenities mt-5">
                  <h5>Amenities</h5>
                  <div className="container">
                    <div className="row">
                      <div className="col-md-4 p-0 amnt">
                        <form className="form-amnt" action="/action_page.php">
                          <input
                            type="checkbox"
                            id="vehicle1"
                            name="vehicle1"
                            value="Bike"
                          />
                          <label htmlFor="vehicle1">Air Conditioning</label>
                          <br />
                          <input
                            type="checkbox"
                            id="vehicle2"
                            name="vehicle2"
                            value="Car"
                          />
                          <label htmlFor="vehicle2">Gym</label>
                          <br />
                          <input
                            type="checkbox"
                            id="vehicle3"
                            name="vehicle3"
                            value="Boat"
                          />
                          <label htmlFor="vehicle3">Microwave</label>
                          <br />
                          <input
                            type="checkbox"
                            id="vehicle3"
                            name="vehicle3"
                            value="Boat"
                          />
                          <label htmlFor="vehicle3">Swimming Pool</label>
                          <br />
                          <input
                            type="checkbox"
                            id="vehicle3"
                            name="vehicle3"
                            value="Boat"
                          />
                          <label htmlFor="vehicle3">WIFI</label>
                          <br />
                        </form>
                      </div>
                      <div className="col-md-4 p-0">
                        <form className="form-amnt" action="/action_page.php">
                          <input
                            type="checkbox"
                            id="vehicle1"
                            name="vehicle1"
                            value="Bike"
                          />
                          <label htmlFor="vehicle1">Air Conditioning</label>
                          <br />
                          <input
                            type="checkbox"
                            id="vehicle2"
                            name="vehicle2"
                            value="Car"
                          />
                          <label htmlFor="vehicle2">Gym</label>
                          <br />
                          <input
                            type="checkbox"
                            id="vehicle3"
                            name="vehicle3"
                            value="Boat"
                          />
                          <label htmlFor="vehicle3">Microwave</label>
                          <br />
                          <input
                            type="checkbox"
                            id="vehicle3"
                            name="vehicle3"
                            value="Boat"
                          />
                          <label htmlFor="vehicle3">Swimming Pool</label>
                          <br />
                          <input
                            type="checkbox"
                            id="vehicle3"
                            name="vehicle3"
                            value="Boat"
                          />
                          <label htmlFor="vehicle3">WIFI</label>
                          <br />
                        </form>
                      </div>
                      <div className="col-md-4 p-0">
                        <form className="form-amnt" action="/action_page.php">
                          <input
                            type="checkbox"
                            id="vehicle1"
                            name="vehicle1"
                            value="Bike"
                          />
                          <label htmlFor="vehicle1">Air Conditioning</label>
                          <br />
                          <input
                            type="checkbox"
                            id="vehicle2"
                            name="vehicle2"
                            value="Car"
                          />
                          <label htmlFor="vehicle2">Gym</label>
                          <br />
                          <input
                            type="checkbox"
                            id="vehicle3"
                            name="vehicle3"
                            value="Boat"
                          />
                          <label htmlFor="vehicle3">Microwave</label>
                          <br />
                          <input
                            type="checkbox"
                            id="vehicle3"
                            name="vehicle3"
                            value="Boat"
                          />
                          <label htmlFor="vehicle3">Swimming Pool</label>
                          <br />
                          <input
                            type="checkbox"
                            id="vehicle3"
                            name="vehicle3"
                            value="Boat"
                          />
                          <label htmlFor="vehicle3">WIFI</label>
                          <br />
                        </form>
                      </div>
                    </div>
                  </div>
                  <div className="Floor-Plans mt-5">
                    <h5>Floor Plans</h5>
                    <div className="container">
                      <div className="row">
                        <div className="col-md-6">
                          <img src="/Floor-Plans.png" alt="foolr-img" />
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
                        <img src="/total-sub.png" alt="" />
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
                        <img src="/price-trend.png" alt="" />
                      </div>
                    </div>
                    <div className="Related">
                      <h5>Related Properties</h5>
                      <div className="container">
                        <div className="row mt-4">
                          <div className="col-md-6 col-lg-3">
                            <div className="Related-box">
                              <img src="/pexels-photo.jpeg" alt="" />
                              <div className="related-head">
                                <h5>AED 800, 000</h5>
                                <h6>New Aparment Nice View</h6>
                                <p>Business Bay, Dubai</p>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6 col-lg-3">
                            <div className="Related-box">
                              <img src="/pexels-photo.jpeg" alt="" />
                              <div className="related-head">
                                <h5>AED 800, 000</h5>
                                <h6>New Aparment Nice View</h6>
                                <p>Business Bay, Dubai</p>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6 col-lg-3">
                            <div className="Related-box">
                              <img src="/pexels-photo.jpeg" alt="" />
                              <div className="related-head">
                                <h5>AED 800, 000</h5>
                                <h6>New Aparment Nice View</h6>
                                <p>Business Bay, Dubai</p>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6 col-lg-3">
                            <div className="Related-box">
                              <img src="/pexels-photo.jpeg" alt="" />
                              <div className="related-head">
                                <h5>AED 800, 000</h5>
                                <h6>New Aparment Nice View</h6>
                                <p>Business Bay, Dubai</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
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
                  <a href="#">Request a Tour</a>
                  <a href="#">Start a Application</a>
                </div>
                <div className="contact-form-wrapper d-flex justify-content-center">
                  <form action="#" className="contact-form">
                    <h5 className="title">Contact Agent</h5>
                    <div>
                      <input
                        type="text"
                        className="form-control rounded border-white mb-3 form-input"
                        id="name"
                        placeholder="Your Name*"
                        required
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        className="form-control rounded border-white mb-3 form-input"
                        placeholder="Your Phone*"
                        required
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        className="form-control rounded border-white mb-3 form-input"
                        placeholder="Your Email*"
                        required
                      />
                    </div>
                    <div>
                      <textarea
                        id="message"
                        className="form-control rounded border-white mb-3 form-text-area"
                        rows={5}
                        cols={30}
                        placeholder="Message"
                        required
                      ></textarea>
                    </div>
                    <div className="submit-button-wrapper">
                      <input type="submit" value="Send Message" />
                    </div>
                  </form>
                </div>
                <div className="popular">
                  <h4>Popular Properties</h4>
                  <img src="/005.jpg" alt="img" />
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
                    <div className="real-img">
                      <img src="/002.jpg" alt="" />
                    </div>
                    <div className="real-heading">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit.
                      </p>
                    </div>
                  </div>
                  <div className="Rela-box">
                    <div className="real-img">
                      <img src="/002.jpg" alt="" />
                    </div>
                    <div className="real-heading">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit.
                      </p>
                    </div>
                  </div>
                  <div className="Rela-box">
                    <div className="real-img">
                      <img src="/002.jpg" alt="" />
                    </div>
                    <div className="real-heading">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit.
                      </p>
                    </div>
                  </div>
                  <div className="Rela-box">
                    <div className="real-img">
                      <img src="/002.jpg" alt="" />
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
