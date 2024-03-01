import axios from "axios";

export const fetchComment = function () {
  const data = axios.get("https://jsonplaceholder.typicode.com/comments");
  return data;
};
