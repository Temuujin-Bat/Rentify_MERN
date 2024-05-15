import { useQuery } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { ApartmentsController } from "../services/apartments.api";
import { setApartments } from "../store/apartments/slice";

export function useGetApartmentsAPI() {
  const dispatch = useDispatch();

  const { data, isSuccess } = useQuery({
    queryKey: ["apartments"],
    queryFn: ApartmentsController,
  });

  useEffect(() => {
    if (isSuccess && data) {
      dispatch(setApartments(data));
    }
  }, [isSuccess, data]);
}
