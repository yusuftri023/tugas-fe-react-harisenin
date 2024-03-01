import axios from "axios";
import { axiosInterceptors } from "../utils/axiosInteceptors";

export const fetchPost = function () {
  const data = new Promise((res) =>
    setTimeout(
      () => res(axios.get("https://jsonplaceholder.typicode.com/posts")),
      1000
    )
  );

  return data;
};
export const fetchUserPost = function (userId) {
  axiosInterceptors();
  const data = new Promise((res) =>
    setTimeout(
      () =>
        res(
          axios.get(
            `https://jsonplaceholder.typicode.com/posts/?userId=${userId}`
          )
        ),
      1000
    )
  );

  return data;
};
