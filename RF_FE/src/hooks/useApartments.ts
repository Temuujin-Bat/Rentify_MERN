import { useQuery } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

import {
  ApartmentsController,
  SingleApartmentController,
} from "../services/apartments.api";
import { setApartments, setSingleApartment } from "../store/apartments/slice";

export function useGetApartmentsAPI(city: string | null) {
  const dispatch = useDispatch();

  const { data, isSuccess } = useQuery({
    queryKey: ["apartments", city],
    queryFn: () => ApartmentsController(city),
  });

  useEffect(() => {
    if (isSuccess && data) {
      dispatch(setApartments(data));
    }
  }, [isSuccess, data]);
}

export function useGetSingleApartmentAPI(id: string) {
  const dispatch = useDispatch();

  const { data, isSuccess } = useQuery({
    queryKey: ["apartment", id],
    queryFn: () => SingleApartmentController(id),
  });

  useEffect(() => {
    if (isSuccess && data) {
      dispatch(setSingleApartment(data));
    }
  }, [isSuccess, data]);
}
