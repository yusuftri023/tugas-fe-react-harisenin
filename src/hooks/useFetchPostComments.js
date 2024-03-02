import { useEffect, useState } from "react";
import { axiosInterceptors } from "../utils/axiosInteceptors";
import { useDispatch, useSelector } from "react-redux";
import { getComment } from "../store/actions/commentAction";

const useFetchPostComments = (id) => {
  axiosInterceptors();
  const dispatch = useDispatch();
  const [comment, setComment] = useState([]);
  const isLoading = useSelector((state) => state.comment.isLoading);
  const error = useSelector((state) => state.comment.error);
  useEffect(() => {
    dispatch(getComment(id)).then((res) => setComment(res.payload.data));
  }, []);
  return [comment, isLoading, error];
};
export default useFetchPostComments;
