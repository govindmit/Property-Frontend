import React, { useState } from "react";
import PropterHelp from "./PropterHelp";
import VideoContent from "./VideoContent";
import Aminities from "./aminities";
import RealState from "./realState";

import { Image } from "antd";
import Link from "next/link";


const Welcome = () => {
  const [text, setTextValue] = useState("buy");

  const buyFn = () => {
    setTextValue("buy");
  };

  const rentFn = () => {
    setTextValue("rent");
  };
  return (
    <div>

      <div className="wrapper-area">
        <section className="top-banner">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="banner-heading">
                  {text === "buy" ? (
                    <h3>Find your dream home</h3>
                  ) : (
                    <h3>Explore Local Rentals</h3>
                  )}
                  <ul>
                    <li>
                      <h5
                        onClick={buyFn}
                        style={{background:'none',cursor:'pointer'}}
                        className={text === "buy" ? "abc active" : ""}
                      >
                        Buy
                      </h5>
                    </li>
                    <li>
                      <h5
                        style={{background:'none',cursor:'pointer'}}
                        onClick={rentFn}
                        className={text === "rent" ? "abc active" : ""}
                      >
                        Rent
                      </h5>
                    </li>
                  </ul>
                  <div className="footer-input-top">
                    <div className="signup-baneer">
                      <form target="#" className="top-banner-btn">
                        <input
                          type="text"
                          id="email-signup"
                          placeholder="City, place, town.."
                          required
                        />
                        <input type="submit" value="f002" id="btn01" />
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <PropterHelp />
        <VideoContent />
        <Aminities />
        <RealState />
      </div>
    </div>
  );
};

export default Welcome;
