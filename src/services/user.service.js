import axios from "axios";
import { axiosInterceptors } from "../utils/axiosInteceptors";

export const fetchUser = function () {
  const data = new Promise((res) =>
    setTimeout(
      () => res(axios.get("https://jsonplaceholder.typicode.com/users")),
      1000
    )
  );
  return data;
};
export const fetchUserProfile = function (id) {
  axiosInterceptors();
  const data = new Promise((res) =>
    setTimeout(
      () => res(axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)),
      1000
    )
  );
  return data;
};
