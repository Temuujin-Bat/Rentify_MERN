import { useSelector } from "react-redux";

export function getApartmentsData() {
  const { apartments, singleApartment } = useSelector(
    (state) => state.apartmentsReducer
  );

  return {
    apartments,
    singleApartment,
  };
}
