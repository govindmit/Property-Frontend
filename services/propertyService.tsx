import http from "./http-common";


class PropertyService {
  // getAllProperty() {
  //   return http.get(`api/listing/`);
  // }
  getAllProperty( token: any) {
    return http.get(`api/listing/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
}

export default new PropertyService();
