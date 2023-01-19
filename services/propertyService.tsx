import http from "./http-common";


class PropertyService {
  getAllProperty() {
    return http.get(`api/listing/`);
  }

}

export default new PropertyService();
