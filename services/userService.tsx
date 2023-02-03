import http from "./http-common";

interface values {
  id: number;
  token: String;
  data: any;
}

class userService {
  getUserProfile(id: number, token: any) {
    return http.get(`api/user/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  updateprofile(id: number, data: any, token: any) {
    return http.put(`api/user/${id}`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    });
  }
  addUser(data: any, token: any) {
    return http.post(`api/user/createuser`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    });
  }
  deleteUser(data: any, token: any) {
    return http.delete(`api/user/deleteuser/${data}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
  getUser(token: any) {
    return http.get(`api/user/getusers`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
  authToken() {
    return http.post("/genrateToken");
  }
}

export default new userService();
