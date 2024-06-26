import { useSelector } from "react-redux";

export function getApartmentsData() {
  const { apartments, singleApartment, userApartments } = useSelector(
    (state) => state.apartmentsReducer
  );

  return {
    apartments,
    singleApartment,
    userApartments,
  };
}
