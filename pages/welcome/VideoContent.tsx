import React from "react";
import { CaretRightOutlined } from "@ant-design/icons";
import { Button, Image } from "antd";

const VideoContent = () => {
  return (
    <div className="wrapper-area">
      {/* <Button shape='circle' className='videoBtnCls' style={{backgroundColor:'white',margin:'0 auto'}}>
            <CaretRightOutlined style={{color:'orangered',fontSize:"35px"}}/>
        </Button> */}

      <section className="video-block">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="video-file">
                <Image src="/video-img.png" alt="vido-img" preview={false} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VideoContent;
