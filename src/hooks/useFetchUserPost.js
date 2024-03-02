import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getUserPost } from "../store/actions/postAction";

const useFetchUserPost = function (id) {
  const dispatch = useDispatch();
  const [userPost, setUserPost] = useState([]);
  const isLoading = useSelector((state) => state.post.isLoading);
  const error = useSelector((state) => state.post.error);
  useEffect(() => {
    dispatch(getUserPost(id)).then((res) =>
      setUserPost(() => res.payload?.data)
    );
  }, []);

  return [userPost, isLoading, error];
};
export default useFetchUserPost;
