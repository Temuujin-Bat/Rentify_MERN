import { useSelector } from "react-redux";

export function getApartmentsData() {
  const { apartments, singleApartment, userApartments, userSingleApartment } =
    useSelector((state) => state.apartmentsReducer);

  return {
    apartments,
    singleApartment,
    userApartments,
    userSingleApartment,
  };
}
