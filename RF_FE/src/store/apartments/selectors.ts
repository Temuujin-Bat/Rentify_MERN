import { useSelector } from "react-redux";
import { RootState } from "./type";

export function getApartmentsData() {
  const { apartments, singleApartment, userApartments } = useSelector(
    (state: RootState) => state.apartmentsReducer
  );

  return {
    apartments,
    singleApartment,
    userApartments,
  };
}
