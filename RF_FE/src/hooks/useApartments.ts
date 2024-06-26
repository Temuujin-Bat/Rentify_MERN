import { useMutation, useQuery } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

import {
  ApartmentsController,
  SingleApartmentController,
} from "../services/apartments.api";
import {
  setApartments,
  setSingleApartment,
  setUserApartments,
} from "../store/apartments/slice";
import { useNavigate } from "react-router-dom";
import { CreateApartmentController } from "../services/addApartment.api";
import {
  UserApartmentsController,
  UserDeleteApartmentController,
  UserEditApartmentController,
  UserSingleApartmentController,
} from "../services/userApartments.api";
import { toast } from "react-toastify";
import { isAxiosError } from "axios";
import { TApartments } from "../types";

export function useGetApartmentsAPI(city: string | null) {
  const dispatch = useDispatch();

  const { data, isSuccess, isLoading } = useQuery({
    queryKey: ["apartments", city],
    queryFn: () => ApartmentsController(city),
  });

  useEffect(() => {
    if (isSuccess && data) {
      dispatch(setApartments(data));
    }
  }, [isSuccess, data]);

  return { isLoading, data };
}

export function useGetSingleApartmentAPI(id: string) {
  const dispatch = useDispatch();

  const { data, isSuccess, isLoading } = useQuery({
    queryKey: ["apartment", id],
    queryFn: () => SingleApartmentController(id),
  });

  useEffect(() => {
    if (isSuccess && data) {
      dispatch(setSingleApartment(data));
    }
  }, [isSuccess, data]);

  return { isLoading };
}

export function useAddApartmentAPI() {
  const navigate = useNavigate();

  const { mutate } = useMutation({
    mutationFn: CreateApartmentController,
    onSuccess: () => {
      navigate("/user/apartments");

      toast.success("Apartment Added Successfully!", {
        autoClose: 1000,
        closeButton: false,
        pauseOnHover: false,
        hideProgressBar: true,
      });
    },
    onError: (error) => {
      if (isAxiosError(error)) {
        toast.error(error.response?.data?.msg, {
          autoClose: 2000,
          closeButton: false,
          pauseOnHover: false,
          hideProgressBar: true,
        });
      } else {
        toast.error("An unknown error occurred: " + error.message, {
          autoClose: 2000,
          closeButton: false,
          pauseOnHover: false,
          hideProgressBar: true,
        });
      }
    },
  });

  return { mutate };
}

export function useUserApartmentsAPI() {
  const dispatch = useDispatch();

  const { data, isSuccess, isLoading } = useQuery({
    queryKey: ["userApartments"],
    queryFn: () => UserApartmentsController(),
  });

  useEffect(() => {
    if (isSuccess && data) {
      dispatch(setUserApartments(data));
    }
  }, [isSuccess, data]);

  return { isLoading };
}

export function useUserSingleApartmentAPI(id: string) {
  const dispatch = useDispatch();

  const { data, isSuccess } = useQuery({
    queryKey: ["userApartment", id],
    queryFn: () => UserSingleApartmentController(id),
  });

  useEffect(() => {
    if (isSuccess && data) {
      dispatch(setUserApartments(data));
    }
  }, [isSuccess, data]);
}

export function useUserDeleteApartmentAPI(id: string) {
  const navigate = useNavigate();

  const { mutate } = useMutation({
    mutationFn: () => UserDeleteApartmentController(id),
    onSuccess: () => {
      navigate("/");

      toast.success("Deleted successfully!", {
        autoClose: 1000,
        closeButton: false,
        pauseOnHover: false,
        hideProgressBar: true,
      });
    },
    onError: (err) => {
      throw err;
    },
  });

  return { mutate };
}

export function useUserEditApartmentAPI(id: string, updatedData: TApartments) {
  const navigate = useNavigate();

  const { mutate } = useMutation({
    mutationFn: () => UserEditApartmentController(id, updatedData),
    onSuccess: () => {
      navigate(`/user/apartments`);

      toast.success("Updated successfully!", {
        autoClose: 1000,
        closeButton: false,
        pauseOnHover: false,
        hideProgressBar: true,
      });
    },
    onError: (error) => {
      throw error;
    },
  });

  return { mutate };
}
