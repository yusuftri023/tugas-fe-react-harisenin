import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserProfile } from "../store/actions/userAction";

const useFetchUserDataProfile = function (id) {
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
export default useFetchUserDataProfile;
