import { useQuery } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

import { UserInfoController } from "../services/user.api";

export function useGetUserInfoAPI() {
  const dispatch = useDispatch();

  const { data, isSuccess } = useQuery({
    queryKey: ["user"],
    queryFn: () => UserInfoController(),
  });

  useEffect(() => {
    if (isSuccess && data) {
    }
  }, [isSuccess, data]);
}
