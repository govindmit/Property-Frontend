import React from "react";
import { Col, Card, Row, Space, Button, Typography, Image } from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";
const style: React.CSSProperties = { background: "#0092ff", padding: "8px 0" };
const RealState = () => {
  return (
    <div className="wrapper-area">
      <section className="Market-Updates">
        <div className="container-fluid side-space">
          <h2>Real Estate Market Updates</h2>
          <div className="row">
            <div className="col-md-12 col-lg-4">
              <div className="row cart-market">
                <div className="col-md-6 col pr-md-0 cart-01">
                  <div className="market-cart02">
                    <p className="real-text">
                      {" "}
                      Buyer Guide <span>21 Jul 2022</span>
                    </p>
                    <p>
                      What you should be prepared with before buying? Best
                      investments
                    </p>
                  </div>
                </div>
                <div className="col-md-6 col pr-md-0 cart-01">
                  <div className="market-cart02">
                    <p className="real-text">
                      {" "}
                      Buyer Guide <span>21 Jul 2022</span>
                    </p>
                    <p>Where you can invest in UAE?</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-lg-8">
              <div className="row">
                <div className="col-md-6 pr-0 m-cart">
                  <div className="market-cart">
                    <Image
                      src="/6-compressor.png"
                      alt="real-img"
                      preview={false}
                    />
                    <p className="real-text">
                      {" "}
                      Real Estate <span>21 Jul 2022</span>
                    </p>
                    <p>Have an ear to the groundon what real estate invest</p>
                    <a className="org-col" href="#">
                      Read More
                    </a>
                  </div>
                </div>
                <div className="col-md-6 pr-0 m-cart">
                  <div className="market-cart">
                    <Image
                      src="/6-compressor.png"
                      alt="real-img"
                      preview={false}
                    />
                    <p className="real-text">
                      {" "}
                      Real Estate <span>21 Jul 2022</span>
                    </p>
                    <p>Have an ear to the groundon what real estate invest</p>
                    <a className="org-col" href="#">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RealState;
