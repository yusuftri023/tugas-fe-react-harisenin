import { useDispatch, useSelector } from "react-redux";
import { getPost } from "../store/actions/postAction";
import { useEffect, useState } from "react";

const useSearchPost = (searchTitle) => {
  const dispatch = useDispatch();

  const [searchTitleResult, setSearchTitleResult] = useState([]);
  const isLoading = useSelector((state) => state.postSearch.isLoading);
  const error = useSelector((state) => state.postSearch.error);
  useEffect(() => {
    dispatch(getPost()).then((res) => {
      setSearchTitleResult(() =>
        res.payload.data.filter((post) => {
          return post?.title?.toLowerCase().includes(searchTitle.toLowerCase());
        })
      );
    });
  }, [searchTitle]);
  return [searchTitleResult, isLoading, error];
};

export default useSearchPost;
