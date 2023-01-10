import React, { useState } from "react";
import { Image, Card, Tabs, Space, Input, Button } from "antd";
import bg from "/public/assets/bg.jpg";
import { SearchOutlined } from "@ant-design/icons";
const { Search } = Input;

const onSearch = (value: string) => console.log(value);

const TopContent = () => {
  const [buyText, setBuyText] = useState(true);

  const onChange = (key: any) => {
    // console.log(key);
    if (key === "2") {
      setBuyText(false);
    } else {
      setBuyText(true);
    }
  };

  return (
    <div className="topContentCls">
     
          {buyText ? (
        <h1
          style={{
            paddingTop: "10vh",
            fontFamily: "system-ui",
            fontSize: "2.5rem",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Find Your Dream Home 
        </h1>
      ) : (
        <h1
          style={{
            paddingTop: "10vh",
            fontFamily: "system-ui",
            fontSize: "2.5rem",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Explore Local Rentals
        </h1>
      )}

      <div
        style={{
          fontFamily: "system-ui",
          fontSize: "2.5rem",
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
      
        <Tabs
          className="tab-setting"
          defaultActiveKey="1"
          onChange={onChange}
          items={[
            {
              label: `Buy`,
              key: "1",
            },
            {
              label: `Rent`,
              key: "2",
            },
          ]}
        />
     
      </div>

      <div
        style={{
          fontFamily: "system-ui",
          fontSize: "2.5rem",
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        <Input.Group compact>
          <Input
            style={{
              width: "calc(35% - 200px)",
              border: "1px solid orangered",
            }}
            placeholder="City,Address,CommunityorBuilding"
          />
          <Button
            type="primary"
            style={{ backgroundColor: "orangered", color: "white" }}
          >
            <SearchOutlined />
          </Button>
        </Input.Group>
      </div>
    </div>
  
  );
};

export default TopContent;
