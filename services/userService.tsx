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

  authToken() {
    return http.post("/genrateToken");
  }
}

export default new userService();
