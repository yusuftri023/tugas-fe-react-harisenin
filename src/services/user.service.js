import axios from "axios";
import { axiosInterceptors } from "../utils/axiosInteceptors";

export const fetchUser = function () {
  axiosInterceptors();
  const data = axios.get("https://jsonplaceholder.typicode.com/users");
  return data;
};
export const fetchUserProfile = function (id) {
  axiosInterceptors();
  const data = axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);

  return data;
};
