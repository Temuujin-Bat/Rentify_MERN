import { useQuery } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

import { ApartmentsController } from "../services/apartments.api";
import { setApartments } from "../store/apartments/slice";

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
