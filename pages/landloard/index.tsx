import React from "react";
import RealState from "../welcome/realState";
import VideoContent from "../welcome/VideoContent";
import TopMainComp from "./doorStep";
import HomeWorkComp from "./howWorks";
import PrimiumTool from "./premiumTool";
import { Image } from "antd";
const LandloardComp = () => {
  return (

    <div className="wrapper-area">
      <section className="top-banner">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="banner-heading">
                <h3>Leads delivered to your doorstep</h3>
                <p>
                  We offer you an immersive marketing platform complete with
                  tools, analytics, transaction management, etc, to put your
                  properties across quality audience and generate high quality
                  leads - The best part is you don&apos;t need to pay us any fee for
                  listing!
                </p>
                <a href="#">Become a partner</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="main-contant">
        <div className="container-fluid side-space">
          <div className="row">
            <div className="col-md-12">
              <div className="main-contant-heading">
                <h2>How it works</h2>
                <p>
                  We connect you with the best leads to help convert your
                  property stock into a successful transaction
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-3">
              <div className="cart-box">
                <Image src="/design-styles-feature.jpg" alt="box-img" preview={false}/>
                <h6>Listing Creation</h6>
                <p>
                  We offer you comprehensive listing creation tools to upload
                  your property to our portal and put it across to quality
                  audience.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="cart-box">
                <Image src="/6-compressor.png" alt="box-img" preview={false} />
                <h6>Pay per Lead</h6>
                <p>
                  We send across quality leads for your properties listed with
                  us, and charge you only for those leads. No extra or hidden
                  charges.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="cart-box">
                <Image src="/pexels-photo.jpeg" alt="box-img" preview={false}/>
                <h6>Updates</h6>
                <p>
                  Send updates to your leads as you progress across different
                  stages of the customer journey, towards completing a
                  transaction.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="cart-box">
                <Image src="/6-compressor.png" alt="box-img" preview={false} />
                <h6>Applications</h6>
                <p>
                  Receiving applications for your listings and negotiate with
                  interested buyers or tenants, the best price for your
                  property.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <VideoContent />

      <section className="Our-premium">
        <div className="container-fluid side-space">
          <div className="row">
            <div className="col-md-12">
              <div className="Our-premium-heading">
                <h2>Our premium management tools</h2>
                <p>
                  We help you finalize the deals quickly and keep track of
                  everything that happens in between
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-3">
              <div className="cart-box02">
                <Image src="/agreement.png" alt="box-img" width={80} preview={false}/>
                <h6>Digital marketing</h6>
                <p>
                  We&apos;ll promote your property across our digital channels and
                  get you the best quality leads.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="cart-box02">
                <Image src="/agreement.png" alt="box-img" width={80} preview={false} />
                <h6>Listing Management</h6>
                <p>Manage your listing and monitor its performance.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="cart-box02">
                <Image src="/house.png" alt="box-img" width={80} preview={false}/>
                <h6>Detailed Analytics</h6>
                <p>
                  Get insights on your leads and listings, and how they are
                  performing in real-time to analyze what&apos;s driving demand.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="cart-box02">
                <Image src="/loan.png" alt="box-img" width={80} preview={false} />
                <h6>Transaction management</h6>
                <p>
                  Keep track of the deal as it progresses from listing to
                  completion.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <RealState />
    </div>
  );
};

export default LandloardComp;
