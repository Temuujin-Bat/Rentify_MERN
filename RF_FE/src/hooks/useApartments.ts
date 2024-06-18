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
  setUserSingleApartment,
} from "../store/apartments/slice";
import { useNavigate } from "react-router-dom";
import { CreateApartmentController } from "../services/addApartment.api";
import {
  UserApartmentsController,
  UserDeleteApartmentController,
  UserEditApartmentController,
  UserSingleApartmentController,
} from "../services/userApartments.api";

export function useGetApartmentsAPI(city: string | null) {
  const dispatch = useDispatch();

  const { data, isSuccess, isLoading, isError } = useQuery({
    queryKey: ["apartments", city],
    queryFn: () => ApartmentsController(city),
  });

  useEffect(() => {
    if (isSuccess && data) {
      dispatch(setApartments(data));
    }
  }, [isSuccess, data]);

  return { isLoading, isError };
}

export function useGetSingleApartmentAPI(id: string) {
  const dispatch = useDispatch();

  const { data, isSuccess, isLoading, isError } = useQuery({
    queryKey: ["apartment", id],
    queryFn: () => SingleApartmentController(id),
  });

  useEffect(() => {
    if (isSuccess && data) {
      dispatch(setSingleApartment(data));
    }
  }, [isSuccess, data]);

  return { isLoading, isError };
}

export function useAddApartmentAPI() {
  const navigate = useNavigate();

  const { mutate } = useMutation({
    mutationFn: CreateApartmentController,
    onSuccess: () => {
      navigate("/user/apartments");
    },
    onError: (err) => {
      console.error("Error in useApartments", `${err}`);
    },
  });

  return { mutate };
}

export function useUserApartmentsAPI() {
  const dispatch = useDispatch();

  const { data, isSuccess } = useQuery({
    queryKey: ["userApartments"],
    queryFn: () => UserApartmentsController(),
  });

  useEffect(() => {
    if (isSuccess && data) {
      dispatch(setUserApartments(data));
    }
  }, [isSuccess, data]);
}

export function useUserSingleApartmentAPI(id) {
  const dispatch = useDispatch();

  const { data, isSuccess } = useQuery({
    queryKey: ["userApartment", id],
    queryFn: () => UserSingleApartmentController(id),
  });

  useEffect(() => {
    if (isSuccess && data) {
      dispatch(setUserSingleApartment(data));
    }
  }, [isSuccess, data]);
}

export function useUserDeleteApartmentAPI(id) {
  const navigate = useNavigate();

  const { mutate } = useMutation({
    mutationFn: () => UserDeleteApartmentController(id),
    onSuccess: () => {
      navigate("/user/apartments");
    },
    onError: (err) => {
      console.error("Error in useApartments", `${err}`);
    },
  });

  return { mutate };
}

export function useUserEditApartmentAPI(id, updatedData) {
  const navigate = useNavigate();

  const { mutate } = useMutation({
    mutationFn: () => UserEditApartmentController(id, updatedData),
    onSuccess: () => {
      navigate(`/user/apartment/${id}`);
    },
    onError: (err) => {
      console.error("Error in useApartments", `${err}`);
    },
  });

  return { mutate };
}
