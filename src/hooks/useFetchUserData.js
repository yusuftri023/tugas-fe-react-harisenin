import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../store/actions/userAction";

const useFetchUserData = function () {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const isLoading = useSelector((state) => state.user.isLoading);
  useEffect(() => {
    dispatch(getUser()).then((res) => {
      setData(() => res.payload.data);
    });
  }, []);
  return [data, isLoading];
};
export default useFetchUserData;
