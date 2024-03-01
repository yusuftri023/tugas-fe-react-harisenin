import axios from "axios";
export const axiosInterceptors = function () {
  axios.interceptors.response.use(
    function (response) {
      console.log("inside interceptors.... fulfilled request");
      console.log(response);
      return response;
    },
    function (error) {
      console.log("inside interceptors.... rejected request");
      return Promise.reject(error);
    }
  );
};
