import React from "react";
import { Layout } from "antd";
import { Col, Row, List, Typography, Space, Button, Image, Input } from "antd";
import logo from "../../../public/assets/logo.png";
import { EnvironmentOutlined } from "@ant-design/icons";
import Router from "next/router";
const { Title } = Typography;

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
  const handleClick = () => {
    Router.push("/");
  };
  return (
    <div>
    
      <footer>
        <div className="container-fluid side-space">
          <div className="row">
            <div className="col-md-8">
              <div className="footer-box">
                <div className="about-contant">
                  <h6>About us.</h6>
                  <p>
                    We built Propter to help to buy or sell your property
                    quickly and efficiently by utilizing the latest technology.
                    We wanted to bridge the gap between sellers, agents and
                    buyers to make buying and selling experience seamless.
                  </p>
                  <div className="social-icon">
                    <i className="fa fa-facebook" aria-hidden="true"></i>
                    <i className="fa fa-instagram" aria-hidden="true"></i>
                    <i className="fa fa-youtube" aria-hidden="true"></i>
                    <i className="fa fa-twitter" aria-hidden="true"></i>
                  </div>
                </div>
                <div className="down-contant">
                  <h6>Company</h6>
                  <ul>
                    <li>
                      <a className="org-col-footer" href="#">
                        About Us
                      </a>
                    </li>
                    <li>
                      <a className="org-col-footer" href="#">
                        Leadership
                      </a>
                    </li>
                    <li>
                      <a className="org-col-footer" href="#">
                        Careers
                      </a>
                    </li>
                    <li>
                      <a className="org-col-footer" href="#">
                        Blog
                      </a>
                    </li>
                    <li>
                      <a className="org-col-footer" href="#">
                        Propter Partners
                      </a>
                    </li>
                    <li>
                      <a className="org-col-footer" href="#">
                        Contacts
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="down-contant">
                  <h6>Solutions</h6>
                  <ul>
                    <li>
                      <a className="org-col-footer" href="#">
                        For Landlords
                      </a>
                    </li>
                    <li>
                      <a className="org-col-footer" href="#">
                        For Brokers
                      </a>
                    </li>
                    <li>
                      <a className="org-col-footer" href="#">
                        Careers
                      </a>
                    </li>
                    <li>
                      <a className="oorg-col-footer" href="#">
                        Blog
                      </a>
                    </li>
                    <li>
                      <a className="org-col-footer" href="#">
                        Contacts
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="down-contant">
                  <h6>Help?</h6>
                  <ul>
                    <li>
                      <a className="org-col-footer" href="#">
                        FAQ
                      </a>
                    </li>
                    <li>
                      <a className="org-col-footer" href="#">
                        Term & conditions
                      </a>
                    </li>
                    <li>
                      <a className="org-col-footer" href="#">
                        Reporting
                      </a>
                    </li>
                    <li>
                      <a className="org-col-footer" href="#">
                        Documentation
                      </a>
                    </li>
                    <li>
                      <a className="org-col-footer" href="#">
                        Support Policy
                      </a>
                    </li>
                    <li>
                      <a className="org-col-footer" href="#">
                        Privacy
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="footer-addresh">
                <Image src="images/footer-logo-img.png" alt="" preview={false}/>
                <p>
                  Real Estate transactions made simple, efficient and quicker.
                </p>
                <address>℗ Dubai</address>
                <div className="footer-input">
                  <div className="signup">
                    <form target="#">
                      <input
                        type="email"
                        id="email-signup"
                        placeholder="Enter your email here...."
                        required
                      />
                      <input type="submit" value="Send Code!" id="btn" />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="copyrights">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="copyrights-word">
                <p>@Propter 2022 All rights reserved.</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="copyrights-word">
                <p>Terms of Use | Privacy Policy</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterComp;
