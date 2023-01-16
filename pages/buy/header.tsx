import React, { useState, useEffect } from "react";
import {
  Layout,
  Menu,
  theme,
  Space,
  Button,
  Select,
  Popover,
  Pagination,
} from "antd";
import propertyService from "../../services/propertyService";
import Image from "next/image";
const { Header, Content, Footer, Sider } = Layout;
const { Option } = Select;

const BuyHeader = () => {

  const [propertyPurpose, setPropertyPurpose] = useState("Rent");
  const [propertyCategory, setPropertyCategory] = useState();
  const [bedsBtn1, setBedsBtn1] = useState(false);
  const [bedsBtn2, setBedsBtn2] = useState(false);
  const [bathsBtn1, setBathsBtn1] = useState(false);
  const [bathsBtn2, setBathsBtn2] = useState(false);

  const [totalPage, setTotalPage] = useState(0);
  const [currentPage,setCurrentPage] = useState(1)           //page


  const [data, setData] = useState<any>();               
  const [tempData, setTempData] = useState<any>();
  const[pArray,setPArray] = useState([2,4,6]) 
  const[pageSize,setPageSize] = useState(2);                //perPage


  const[propertyPurposeArray,setproPertyPurposeArray] =useState<any>()
  const[propertyCategoryAyyar,setpropertyCategoryAyyar] =useState<any>()


  useEffect(() => {
    getAllListings();
  }, []);

  const getAllListings = async () => {
    await propertyService.getAllProperty().then((data: any) => {
      const a = data?.data.slice(0,2)
      setTotalPage(data?.data.length)
      setData(a);
      setTempData(data?.data)
    });
  };

  const handlePageChange = (page: any,perPage:any) => {
    if(!propertyPurposeArray && !propertyCategoryAyyar){
      const projects = tempData.slice((page- 1) * perPage,page * perPage)
      setData(projects)
      setPageSize(perPage)
      setCurrentPage(page)
    }
    if(propertyPurposeArray){
      const projects = propertyPurposeArray.slice((page- 1) * perPage,page * perPage)
      setData(projects)
      setPageSize(perPage)
      setCurrentPage(page)
    }
    if(propertyCategoryAyyar){
      const projects = propertyCategoryAyyar.slice((page- 1) * perPage,page * perPage)
      setData(projects)
      setPageSize(perPage)
      setCurrentPage(page)
    }
   
  };

  const propertyPurposeFn = (e: any) => {
    setPropertyPurpose(e);
    const f = tempData.filter((ppt:any)=>{
      if(ppt.propertyPurpose === e)
      return ppt
    })
    setproPertyPurposeArray(f)
    console.log('data ',f,'currentpage =',currentPage,"perpage ",pageSize ,);
    const projects = f.slice((currentPage- 1) * pageSize,currentPage * pageSize)
   console.log("projects ",projects)
    setData(projects)
    setTotalPage(f?.length)
    setPageSize(pageSize)
    setCurrentPage(currentPage)
 
  };
 
  const handlePropertyCategoryFn = (e: any) => {
    setPropertyCategory(e);
    const f = tempData.filter((ppt:any)=>{
      if(ppt.propertyCategory === e)
      return ppt
    })
    setpropertyCategoryAyyar(f)
    console.log('data ',f,'currentpage =',currentPage,"perpage ",pageSize ,);
    const projects = f.slice((currentPage- 1) * pageSize,currentPage * pageSize)
   console.log("projects ",projects)
    setData(projects)
    setTotalPage(f?.length)
    setPageSize(pageSize)
    setCurrentPage(currentPage)
  };

  const handleToggle1 = () => {
    setBedsBtn1(!bedsBtn1);
  };

  const handleToggle2 = () => {
    setBedsBtn2(!bedsBtn2);
  };

  const handleToggleBath1 = () => {
    setBathsBtn1(!bathsBtn1);
  };

  const handleToggleBath2 = () => {
    setBathsBtn2(!bathsBtn2);
  };

  const content = (
    <div style={{ display: "flex", width: "200px" }}>
      <span style={{ marginTop: "4px" }}>min</span>{" "}
      <input type="text" style={{ width: 60, margin: "5px" }} />
      &nbsp;<span style={{ marginTop: "4px" }}> - </span>&nbsp;
      <span style={{ marginTop: "4px" }}>max</span>{" "}
      <input type="text" style={{ width: 60, margin: "5px" }} />
    </div>
  );

  const BedsBathsContent = (
    <div style={{ width: "200px" }}>
      <h6 style={{ fontSize: "10px", fontWeight: "bold" }}>Beds</h6>
      <div style={{ display: "flex" }}>
        <Space>
          {" "}
          <Button type="primary" defaultChecked>
            Any
          </Button>
          <Button
            type="default"
            onClick={handleToggle1}
            className={bedsBtn1 ? "truCls" : "falseCls"}
          >
            1
          </Button>
          <Button
            type="default"
            onClick={handleToggle2}
            className={bedsBtn2 ? "truCls" : "falseCls"}
          >
            2
          </Button>
        </Space>
      </div>

      <h6 style={{ fontSize: "10px", fontWeight: "bold", marginTop: "15px" }}>
        Baths
      </h6>
      <div style={{ display: "flex" }}>
        <Space>
          {" "}
          <Button type="primary" defaultChecked>
            Any
          </Button>
          <Button
            type="default"
            onClick={handleToggleBath1}
            className={bathsBtn1 ? "truCls" : "falseCls"}
          >
            1
          </Button>
          <Button
            type="default"
            onClick={handleToggleBath2}
            className={bathsBtn2 ? "truCls" : "falseCls"}
          >
            2
          </Button>
        </Space>
      </div>

      <div style={{ display: "flex", marginTop: "15px" }}>
        <Space>
          {" "}
          <Button type="default" defaultChecked>
            Reset
          </Button>
          <Button type="primary" defaultChecked>
            Done
          </Button>
        </Space>
      </div>
    </div>
  );

  return (
    <div className="wrapper-area">

      <Layout style={{ backgroundClip: "white" }} className="userLayoutCls">
        <Header style={{ backgroundClip: "white" }} className="userHeaderCls">
          <div className="logo" />
          <Menu
            style={{ backgroundClip: "white" }}
            theme="light"
            mode="horizontal"
            defaultSelectedKeys={["2"]}
            className="FilterMenuCls"
          >
            <Space wrap>
              <Menu.Item style={{ marginLeft: "10px" }}>
                {" "}
                <Select
                  style={{ width: 120 }}
                  defaultValue={propertyPurpose}
                  onChange={propertyPurposeFn}
                >
                  <Option value={"Rent"}>
                    For Rent{" "}
                    <input
                      type="radio"
                      id="ForRent"
                      name="radio"
                      value="For Rent"
                    />
                  </Option>
                  <Option value={"Sale"}>
                    For Buy{" "}
                    <input
                      type="radio"
                      id="ForBuy"
                      name="radio"
                      value="Sale"
                    />
                  </Option>
                </Select>
              </Menu.Item>

              <Menu.Item>
                <Popover placement="bottom" content={content} trigger="click">
                  <Button>Price</Button>
                </Popover>
              </Menu.Item>

              <Menu.Item style={{ marginLeft: "10px" }}>
                {" "}
                <Select
                  style={{ width: 140,color:'black',fontWeight:'800' }}
                  defaultValue={propertyCategory}
                  onChange={handlePropertyCategoryFn}
                  placeholder={'Property Type'}
                >
                  <Option value={"Apartment"}>Apartment</Option>
                  <Option value={"Villa"}>Villa</Option>
                </Select>
              </Menu.Item>

              <Menu.Item>
                <Popover
                  placement="bottom"
                  content={BedsBathsContent}
                  trigger="click"
                >
                  <Button>Beds/Baths</Button>
                </Popover>
              </Menu.Item>

              <Menu.Item>
                <Popover
                  placement="bottom"
                  content={BedsBathsContent}
                  trigger="click"
                >
                  <Button>More Filters</Button>
                </Popover>
              </Menu.Item>
            </Space>
          </Menu>
        </Header>
      </Layout>

      <section className="buy-rentals">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="buy-heading">
                <h5>Business Bay Rentals</h5>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
              <div className="shot-by"></div>
            </div>
          </div>

          <div className="row cart-b">
            <div className="col-md-6 cart-bin">
              <ul>
                {data?.map((e: any) => {
                  return (
                    <li key={e.propertyName} >
                      <div className="Business-cart">
                        <div className="busi-img">
                          <Image width={300} height={180} src={e.uploadFile} alt="NewHouse" />
                        </div>
                        <div className="busi-contant">
                          {e.saleValue ? (
                            <h6>
                              AED {e.saleValue}
                              <span>
                                <i
                                  className="fa fa-heart-o"
                                  aria-hidden="true"
                                ></i>
                              </span>
                            </h6>
                          ) : (
                            <h6>
                              AED {e.rentPerYear}
                              <span>
                                <i
                                  className="fa fa-heart-o"
                                  aria-hidden="true"
                                ></i>
                              </span>
                            </h6>
                          )}

                          <p>{e.propertyName}</p>
                          <address>{e.addressLine2}</address>
                          <span className="btn-sm">{e.beds} Beds</span>
                          <span className="btn-sm">{e.baths} Baths</span>
                          <span className="btn-sm">{e.sqft} Sq Ft</span>
                          <div className="btn-Business">
                            <a href="#">Request a Tour</a>
                            <a href="#">Contact Agent</a>
                          </div>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>

              {/* <div className="Business-page-number">
                                <div className="pagination">
                                    <a href="#"><i className="fa fa-long-arrow-left" aria-hidden="true"></i>
                                    </a>
                                    <a href="#">1</a>
                                    <a href="#" className="active">2</a>
                                    <a href="#">3</a>
                                    <a href="#">4</a>
                                    <a href="#">5</a>
                                    <a href="#">6</a>
                                    <a href="#"><i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                                    </a>
                                  </div>
                            </div> */}

              <Pagination
                pageSize={pageSize}
                current={currentPage}
                total={totalPage}
                onChange={handlePageChange}
                style={{ bottom: "0px" }}
                showSizeChanger
                pageSizeOptions={pArray}
                defaultCurrent={currentPage}
              />
            </div>
            <div className="col-md-6 cart-bin">
              <div className="map-img">
                <Image width={650} height={400} src="/2091c1.png" alt="map-img" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BuyHeader;
