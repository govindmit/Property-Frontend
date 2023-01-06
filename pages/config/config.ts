export const BASE_URL = "https://api-property.mangoitsol.com/api/";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  signin: `${BASE_URL}/user/signin`,
  resetPassword: `${BASE_URL}/user/resetPassword`,
  forgotpassword: `${BASE_URL}/user/forgotpassword`,
  getUser: `${BASE_URL}user/getusers`,
  getUserById: `${BASE_URL}user/`,
  createuser:`${BASE_URL}user/createuser`,

};
