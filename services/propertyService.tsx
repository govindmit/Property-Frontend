import http from "./http-common";


class PropertyService {

  getAllProperty( token: any) {
    return http.get(`api/listing?property_purpose=Rent`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
  getAllBuyProperty( token: any) {
    return http.get(`api/listing?property_purpose=Sale`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
  getPropertyBySlug( slug:any,token: any) {
    return http.get(`api/listing?slug=${slug}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
  getSaleProperty(token: any,city:any) {
    return http.get(`api/listing?city=${city}&property_purpose=Sale`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
  getRentProperty(token: any,city:any) {
    return http.get(`api/listing?city=${city}&property_purpose=Rent`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
  popularProperty( token: any) {
    return http.get(`api/listing/property/popular`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
  
}

export default new PropertyService();
