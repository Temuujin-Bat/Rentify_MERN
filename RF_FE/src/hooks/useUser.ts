import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

import {
  UserAccountController,
  UserInfoController,
  UserNameController,
  UserPasswordController,
  UserProfileController,
} from "../services/user.api";
import { setUserInfo } from "../store/user/slice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export function useGetProfileAPI() {
  const dispatch = useDispatch();

  const { data, isSuccess, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: () => UserInfoController(),
  });

  useEffect(() => {
    if (isSuccess && data) {
      const userData = data?.data;

      dispatch(setUserInfo(userData));
    }
  }, [isSuccess, data]);

  return { data, isLoading };
}

export function useEditPasswordAPI() {
  const navigate = useNavigate();

  const { mutate } = useMutation({
    mutationFn: UserPasswordController,
    onSuccess: () => {
      navigate("/profile");

      toast.success("Password changed successfully!", {
        autoClose: 1000,
        closeButton: false,
        pauseOnHover: false,
        hideProgressBar: true,
      });
    },
    onError: () => {
      toast.error("Current password is incorrect", {
        autoClose: 1500,
        closeButton: false,
        pauseOnHover: false,
        hideProgressBar: true,
      });
    },
  });

  return { mutate };
}

export function useEditNameAPI() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: UserNameController,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user"] });

      toast.success("Name changed successfully!", {
        autoClose: 1000,
        closeButton: false,
        pauseOnHover: false,
        hideProgressBar: true,
      });

      setTimeout(() => {
        navigate("/profile");
      }, 1000);
    },
    onError: () => {
      toast.error("error");
    },
  });

  return { mutate };
}

export function useEditAccountAPI() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: UserAccountController,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user"] });

      toast.success("Account info changed successfully!", {
        autoClose: 1000,
        closeButton: false,
        pauseOnHover: false,
        hideProgressBar: true,
      });

      setTimeout(() => {
        navigate("/profile");
      }, 1000);
    },
    onError: () => {
      toast.error("error");
    },
  });

  return { mutate };
}

export function useEditProfileAPI() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: UserProfileController,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user"] });

      toast.success("Profile info changed successfully!", {
        autoClose: 1000,
        closeButton: false,
        pauseOnHover: false,
        hideProgressBar: true,
      });

      setTimeout(() => {
        navigate("/profile");
      }, 1000);
    },
    onError: () => {
      toast.error("error");
    },
  });

  return { mutate };
}
