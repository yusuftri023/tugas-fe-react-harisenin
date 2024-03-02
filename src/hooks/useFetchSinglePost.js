import { useEffect, useState } from "react";
import { axiosInterceptors } from "../utils/axiosInteceptors";
import { getSinglePost } from "../store/actions/postAction";
import { useDispatch, useSelector } from "react-redux";

const useFetchSinglePost = (id) => {
  axiosInterceptors();
  const dispatch = useDispatch();
  const [post, setPost] = useState({});
  const isLoading = useSelector((state) => state.singlePost.isLoading);
  const error = useSelector((state) => state.singlePost.error);
  useEffect(() => {
    dispatch(getSinglePost(id)).then((res) => setPost(res.payload.data));
  }, []);
  return [post, isLoading, error];
};
export default useFetchSinglePost;
