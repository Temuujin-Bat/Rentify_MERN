import { useQuery } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

import { UserInfoController } from "../services/user.api";
import { setUserInfo } from "../store/user/slice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export function useGetProfileAPI() {
  const dispatch = useDispatch();

  const { data, isSuccess } = useQuery({
    queryKey: ["user"],
    queryFn: () => UserInfoController(),
  });

  useEffect(() => {
    if (isSuccess && data) {
      const userData = data?.data;

      dispatch(setUserInfo(userData));
    }
  }, [isSuccess, data]);

  return { data };
}
