import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser, getUserProfile } from "../store/actions/userAction";

export const useFetchUserData = function () {
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
export const useFetchUserDataProfile = function (id) {
  const dispatch = useDispatch();
  const [userProfile, setUserProfile] = useState([]);
  const isLoading = useSelector((state) => state.userProfile.isLoading);
  const error = useSelector((state) => state.userProfile.error);
  useEffect(() => {
    dispatch(getUserProfile(id)).then((res) => {
      setUserProfile(() => res.payload.data);
    });
  }, []);
  return [userProfile, isLoading, error];
};
