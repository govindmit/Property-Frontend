import http from "./http-common";

interface values{
    id:number,
    token:String,
    data:any
}

class userService  {

  getUserProfile(id:number) {
    return http.get(`api/user/${id}`)
  }


  updateprofile(id:number, data:any ) {
    return http.put(`api/user/${id}`, data)
  }
  // addUser(userData, onUploadProgress) {
  //   return http.post("/register", userData, {
  //     headers: {
  //       "Content-Type": "multipart/form-data"
  //     },
  //     onUploadProgress
  //   });
  // }


}

export default new userService();

