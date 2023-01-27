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
  Image,
  InputNumber,
} from "antd";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import propertyService from "../../services/propertyService";
import Link from "next/link";

const { Header, Content, Footer, Sider } = Layout;
const { Option } = Select;

const BuyHeader = () => {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);

  const [allFilteredArray, setAllFilteredArray] = useState<any>();

  const [propertyPurpose, setPropertyPurpose] = useState();
  const [propertyCategory, setPropertyCategory] = useState();

  const [bedsBtn1, setBedsBtn1] = useState("0");
  const [bedsBtn2, setBedsBtn2] = useState("0");
  const [bathsBtn1, setBathsBtn1] = useState("0");
  const [bathsBtn2, setBathsBtn2] = useState("0");

  const [bedsBtn1Value, setBedsBtn1Value] = useState(0);

  const [minPrice, setMinPrice] = useState<any>(0);
  const [maxPrice, setMaxPrice] = useState<any>(0);

  const [minPriceErr, setMinPriceErr] = useState(false);
  const [maxPriceErr, setMaxPriceErr] = useState(false);

  const [totalPage, setTotalPage] = useState(0);

  const [data, setData] = useState<any>();
  const [tempData, setTempData] = useState<any>();
  const [currentPage, setCurrentPage] = useState(1); // page
  const [pArray, setPArray] = useState([2, 4, 6]);
  const [pageSize, setPageSize] = useState(2); // perPage

  const [propertyPurposeArray, setproPertyPurposeArray] = useState<any>();
  const [propertyCategoryArray, setpropertyCategoryArray] = useState<any>();
  const [propertyPriceArray, setPropertyPriceArray] = useState<any>();
  const [propertyBedsAndBathsArray, setPropertyBedsAndBathsArray] =
    useState<any>();

  useEffect(() => {
    getAllListings();
  }, []);

  const hide = () => {
    setOpen(false);
    setOpen1(false);
  };

  const hide1 = () => {
    setOpen(false);
    setMinPrice(0);
    setMaxPrice(0);

    setOpen1(false);
    setBedsBtn1("0");
    setBedsBtn2("0");
    setBathsBtn1("0");
    setBathsBtn2("0");
  };
  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen);
  };

  const handleOpenChange1 = (newOpen: boolean) => {
    setOpen1(newOpen);
  };
  const handleToggle1 = (e: any) => {
    bedsBtn1 === "1" ? setBedsBtn1("0") : setBedsBtn1("1");
  };
  const handleToggle2 = (e: any) => {
    bedsBtn2 === "2" ? setBedsBtn2("0") : setBedsBtn2("2");
  };
  const handleToggleBath1 = () => {
    bathsBtn1 === "1" ? setBathsBtn1("0") : setBathsBtn1("1");
  };
  const handleToggleBath2 = () => {
    bathsBtn2 === "2" ? setBathsBtn2("0") : setBathsBtn2("2");
  };

  const getAllListings = async () => {
    const token: any = localStorage.getItem("webToken")
      ? localStorage.getItem("webToken")
      : null;
    const a = JSON.parse(token);

    await propertyService.getAllBuyProperty(a).then((data: any) => {
      const a = data?.data.slice(0, 2);
      setTotalPage(data?.data.length);
      setData(a);
      setTempData(data?.data);
    });
  };

  const handlePageChange = (page: any, perPage: any) => {
    if (
      !propertyPurposeArray &&
      !propertyCategoryArray &&
      !propertyPriceArray &&
      !allFilteredArray
    ) {
      const projects = tempData.slice((page - 1) * perPage, page * perPage);
      setData(projects);
      setPageSize(perPage);
      setCurrentPage(page);
    }
    if (propertyPurposeArray) {
      const projects = propertyPurposeArray.slice(
        (page - 1) * perPage,
        page * perPage
      );
      setData(projects);
      setPageSize(perPage);
      setCurrentPage(page);
    }
    if (propertyCategoryArray) {
      const projects = propertyCategoryArray.slice(
        (page - 1) * perPage,
        page * perPage
      );
      setData(projects);
      setPageSize(perPage);
      setCurrentPage(page);
    }
    if (propertyPriceArray) {
      const projects = propertyPriceArray.slice(
        (page - 1) * perPage,
        page * perPage
      );
      setData(projects);
      setPageSize(perPage);
      setCurrentPage(page);
    }
  };

  const propertyPurposeFn = (e: any) => {
    setPropertyPurpose(e);
    const propertyPurposeVar = tempData.filter((ppt: any) => {
      if (ppt.property_purpose === e) return ppt;
    });
    setproPertyPurposeArray(propertyPurposeVar);
    if (e && propertyCategory && minPrice && maxPrice) {
      concatFn(propertyPurposeVar, e);
    }
    const projects = propertyPurposeVar.slice(
      (currentPage - 1) * pageSize,
      currentPage * pageSize
    );
    setData(projects);
    setTotalPage(propertyPurposeVar?.length);
    setPageSize(pageSize);
    setCurrentPage(currentPage);
  };

  const handlePropertyCategoryFn = (e: any) => {
    setPropertyCategory(e);
    const handlePropertyCategoryVar = tempData.filter((ppt: any) => {
      if (ppt.property_category === e) return ppt;
    });
    setpropertyCategoryArray(handlePropertyCategoryVar);
    if (e && propertyPurpose && minPrice && maxPrice) {
      concatFn(handlePropertyCategoryVar, e);
    }
    const projects = handlePropertyCategoryVar.slice(
      (currentPage - 1) * pageSize,
      currentPage * pageSize
    );
    setData(projects);
    setTotalPage(handlePropertyCategoryVar?.length);
    setPageSize(pageSize);
    setCurrentPage(currentPage);
  };

  const handlePriceFilter = () => {
    if (!minPrice) {
      setMinPriceErr(true);
    }
    if (!maxPriceErr) {
      setMaxPriceErr(true);
    }

    if (minPriceErr || maxPriceErr) {
      toast.error("please min and max price fields correctly", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      const priceObject = {
        min: minPrice,
        max: maxPrice,
      };

      const priceFilterArray = tempData.filter((pp: any) => {
        if (
          pp.sale_value &&
          pp.sale_value >= minPrice &&
          pp.sale_value <= maxPrice
        )
          return pp;
      });
      setPropertyPriceArray(priceFilterArray);
      concatFn(priceFilterArray, priceObject);
      setOpen1(false);

      const projects = priceFilterArray.slice(
        (currentPage - 1) * pageSize,
        currentPage * pageSize
      );
      setData(projects);
      setTotalPage(priceFilterArray?.length);
      setPageSize(pageSize);
      setCurrentPage(currentPage);
    }
  };

  const handleBedsAndBathsFilters = () => {
    const propertyObject = {
      bedsBtn1: bedsBtn1,
      bedsBtn2: bedsBtn2,
      bathsBtn1: bathsBtn1,
      bathsBtn2: bathsBtn2,
    };
    const otherFilter = tempData.filter((ppt: any) => {
      if (
        ppt.beds === bedsBtn1 ||
        ppt.beds === bedsBtn2 ||
        ppt.baths === bathsBtn1 ||
        ppt.baths === bathsBtn2
      )
        return ppt;
    });
    setPropertyBedsAndBathsArray(otherFilter);
    concatFn(otherFilter, propertyObject);

    const projects = otherFilter.slice(
      (currentPage - 1) * pageSize,
      currentPage * pageSize
    );
    setData(projects);
    setTotalPage(otherFilter?.length);
    setPageSize(pageSize);
    setCurrentPage(currentPage);
  };

  function arrayUnique(array: any) {
    var a = array.concat();
    for (var i = 0; i < a.length; ++i) {
      for (var j = i + 1; j < a.length; ++j) {
        if (a[i] === a[j]) a.splice(j--, 1);
      }
    }
    return a;
  }

  const concatFn = (propertyData: any, identifier: any) => {
    var length1;
    if (identifier === "Rent" || identifier === "Sale") {
      const concatArray1 = arrayUnique(
        propertyCategoryArray.concat(propertyData, propertyPriceArray)
      );
      setAllFilteredArray(concatArray1);
      const projects = concatArray1.slice(
        (currentPage - 1) * pageSize,
        currentPage * pageSize
      );
      length1 = concatArray1?.length;

      setData(projects);
      // setTotalPage(concatArray1?.length);
      setPageSize(pageSize);
      setCurrentPage(currentPage);
    } else if (identifier === "Villa" || identifier === "Apartment") {
      const concatArray2 = arrayUnique(
        propertyData.concat(propertyPurposeArray, propertyPriceArray)
      );
      setAllFilteredArray(concatArray2);

      const projects = concatArray2.slice(
        (currentPage - 1) * pageSize,
        currentPage * pageSize
      );
      length1 = concatArray2?.length;
      setData(projects);
      // setTotalPage(concatArray2?.length);
      setPageSize(pageSize);
      setCurrentPage(currentPage);
    }
    setTotalPage(length1);
  };

  const content = (
    <div style={{ width: "250px" }}>
      <div style={{ display: "flex", width: "250px" }}>
        <span style={{ marginTop: "4px" }}>min</span>{" "}
        <input
          type="number"
          value={minPrice}
          onChange={(e: any) => {
            setMinPrice(e.target.value);
          }}
          onKeyUp={() => {
            setMinPriceErr(false);
          }}
          style={{ width: 80, margin: "5px" }}
        />
        &nbsp;<span style={{ marginTop: "4px" }}> - </span>&nbsp;
        <span style={{ marginTop: "4px" }}>max</span>{" "}
        <input
          type="number"
          value={maxPrice}
          onChange={(e: any) => {
            setMaxPrice(e.target.value);
          }}
          onKeyUp={() => {
            setMaxPriceErr(false);
          }}
          style={{ width: 80, margin: "5px" }}
        />
      </div>
      <div style={{ display: "flex", marginTop: "15px" }}>
        <Space>
          {" "}
          <Button type="default" onClick={hide1}>
            Reset
          </Button>
          <Button type="primary" onClick={handlePriceFilter}>
            Done
          </Button>
        </Space>
      </div>
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
            value={"1"}
            onClick={(e: any) => {
              handleToggle1(e.target.value);
            }}
            className={bedsBtn1 === "1" ? "truCls" : "falseCls"}
          >
            1
          </Button>
          <Button
            type="default"
            value={"2"}
            onClick={(e: any) => {
              handleToggle2(e.target.value);
            }}
            className={bedsBtn2 === "2" ? "truCls" : "falseCls"}
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
            className={bathsBtn1 === "1" ? "truCls" : "falseCls"}
          >
            1
          </Button>
          <Button
            type="default"
            onClick={handleToggleBath2}
            className={bathsBtn2 === "2" ? "truCls" : "falseCls"}
          >
            2
          </Button>
        </Space>
      </div>

      <div style={{ display: "flex", marginTop: "15px" }}>
        <Space>
          {" "}
          <Button type="default" onClick={hide1}>
            Reset
          </Button>
          <Button
            type="primary"
            defaultChecked
            onClick={() => {
              handleBedsAndBathsFilters();
              hide();
            }}
          >
            Done
          </Button>
        </Space>
      </div>
    </div>
  );

  return (
    <div className="wrapper-area">
      <ToastContainer />
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
                  onChange={(e) => {
                    propertyPurposeFn(e);
                  }}
                  placeholder={"For Rent"}
                >
                  <Option value={"Rent"}>
                    For Rent{" "}
                    <input type="radio" id="Rent" name="radio" value="Rent" />
                  </Option>
                  <Option value={"Sale"}>
                    For Buy{" "}
                    <input type="radio" id="Sale" name="radio" value="Sale" />
                  </Option>
                </Select>
              </Menu.Item>

              <Menu.Item>
                <Popover
                  open={open1}
                  placement="bottom"
                  content={content}
                  onOpenChange={handleOpenChange1}
                  trigger="click"
                >
                  <Button>Price</Button>
                </Popover>
              </Menu.Item>

              <Menu.Item style={{ marginLeft: "10px" }}>
                {" "}
                <Select
                  style={{ width: 140, color: "black", fontWeight: "800" }}
                  defaultValue={propertyCategory}
                  onChange={(e: any) => {
                    handlePropertyCategoryFn(e);
                  }}
                  placeholder={"Property Type"}
                >
                  <Option value={"Apartment"}>Apartment</Option>
                  <Option value={"Villa"}>Villa</Option>
                </Select>
              </Menu.Item>

              <Menu.Item>
                <Popover
                  open={open}
                  placement="bottom"
                  content={BedsBathsContent}
                  trigger="click"
                  onOpenChange={handleOpenChange}
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
                {allFilteredArray && allFilteredArray !== null
                  ? allFilteredArray &&
                    allFilteredArray.map((e: any, i: any) => {
                      return (
                        <li key={i}>
                          <div className="Business-cart">
                            <Link href={`/listing/${e?.slug}`}>
                              <div className="busi-img">
                                <Image
                                  src={e?.upload_file?.imagee[0]}
                                  alt="NewHouse"
                                  preview={false}
                                />
                              </div>
                              <div className="busi-contant">
                                {e?.sale_value ? (
                                  <h6>
                                    AED {e?.sale_value}
                                    <span>
                                      <i
                                        className="fa fa-heart-o"
                                        aria-hidden="true"
                                      ></i>
                                    </span>
                                  </h6>
                                ) : (
                                  <h6>
                                    AED {e?.rent_per_year}
                                    <span>
                                      <i
                                        className="fa fa-heart-o"
                                        aria-hidden="true"
                                      ></i>
                                    </span>
                                  </h6>
                                )}
                                <p>{e?.property_name}</p>
                                <address>{e?.address_line2}</address>
                                <span className="btn-sm">{e?.beds} Beds</span>
                                <span className="btn-sm">{e?.baths} Baths</span>
                                <span className="btn-sm">{e?.sqft} Sq Ft</span>
                                <div className="btn-Business">
                                  <a href="#">Request a Tour</a>
                                  <a href="#">Contact Agent</a>
                                </div>
                              </div>
                            </Link>
                          </div>
                        </li>
                      );
                    })
                  : data &&
                    data?.map((e: any, i: any) => {
                      console.log('@@@@@@@@@@',e);
                    
                      return (
                        <li key={i}>
                          <div className="Business-cart">
                          <Link href={`/listing/${e?.slug}`}>
                              <div className="busi-img">
                                <Image
                                  src={e?.upload_file?.imagee[0]}
                                  alt="NewHouse"
                                  preview={false}
                                />
                              </div>
                              <div className="busi-contant">
                                {e?.sale_value ? (
                                  <h6>
                                    AED {e?.sale_value}
                                    <span>
                                      <i
                                        className="fa fa-heart-o"
                                        aria-hidden="true"
                                      ></i>
                                    </span>
                                  </h6>
                                ) : (
                                  <h6>
                                    AED {e?.rent_per_year}
                                    <span>
                                      <i
                                        className="fa fa-heart-o"
                                        aria-hidden="true"
                                      ></i>
                                    </span>
                                  </h6>
                                )}

                                <p>{e?.property_name}</p>
                                <address>{e?.address_line2}</address>
                                <span className="btn-sm">{e?.beds} Beds</span>
                                <span className="btn-sm">{e?.baths} Baths</span>
                                <span className="btn-sm">{e?.sqft} Sq Ft</span>
                                <div className="btn-Business">
                                  <a href="#">Request a Tour</a>
                                  <a href="#">Contact Agent</a>
                                </div>
                              </div>
                            </Link>
                          </div>
                        </li>
                      );
                    })}

                {/* {data?.map((e: any) => {
                      return (
                        <li>
                          <div className="Business-cart">
                            <div className="busi-img">
                              <Image
                                src={e?.uploadFile}
                                alt="NewHouse"
                                preview={false}
                              />
                            </div>
                            <div className="busi-contant">
                              {e?.saleValue ? (
                                <h6>
                                  AED {e?.saleValue}
                                  <span>
                                    <i
                                      className="fa fa-heart-o"
                                      aria-hidden="true"
                                    ></i>
                                  </span>
                                </h6>
                              ) : (
                                <h6>
                                  AED {e?.rentPerYear}
                                  <span>
                                    <i
                                      className="fa fa-heart-o"
                                      aria-hidden="true"
                                    ></i>
                                  </span>
                                </h6>
                              )}

                              <p>{e?.propertyName}</p>
                              <address>{e?.addressLine2}</address>
                              <span className="btn-sm">{e?.beds} Beds</span>
                              <span className="btn-sm">{e?.baths} Baths</span>
                              <span className="btn-sm">{e?.sqft} Sq Ft</span>
                              <div className="btn-Business">
                                <a href="#">Request a Tour</a>
                                <a href="#">Contact Agent</a>
                              </div>
                            </div>
                          </div>
                        </li>
                      );
                    })} */}
              </ul>
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
                <Image src="/2091c1.png" alt="map-img" preview={false} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BuyHeader;
