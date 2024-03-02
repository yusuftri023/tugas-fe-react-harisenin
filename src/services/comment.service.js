import axios from "axios";
import { axiosInterceptors } from "../utils/axiosInteceptors";

export const fetchComment = function (id) {
  axiosInterceptors();
  const data = axios.get(
    `https://jsonplaceholder.typicode.com/posts/${id}/comments`
  );
  return data;
};
