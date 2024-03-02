import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPost } from "../store/actions/postAction";

const useFetchAllPost = () => {
  const dispatch = useDispatch();
  const [allPost, setAllPost] = useState([]);
  const isLoading = useSelector((state) => state.allPost.isLoading);
  const error = useSelector((state) => state.allPost.error);
  useEffect(() => {
    dispatch(getAllPost()).then((res) => setAllPost(() => res.payload?.data));
  }, []);
  return [allPost, isLoading, error];
};
export default useFetchAllPost;
