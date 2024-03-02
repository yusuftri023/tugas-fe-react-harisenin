import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../store/actions/userAction";

const useSearchMember = (searchMember) => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.user.isLoading);
  const error = useSelector((state) => state.user.error);
  const [searchMemberResult, setSearchMemberResult] = useState([]);

  useEffect(() => {
    dispatch(getUser()).then((res) => {
      setSearchMemberResult(() =>
        res.payload.data.filter((post) => {
          return post?.username
            ?.toLowerCase()
            .includes(searchMember.toLowerCase());
        })
      );
    });
  }, [searchMember]);
  return [searchMemberResult, isLoading, error];
};
export default useSearchMember;
