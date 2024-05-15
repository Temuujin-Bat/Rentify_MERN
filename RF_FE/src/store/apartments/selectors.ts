import { useSelector } from "react-redux";

export function getApartmentsData() {
  const { apartments } = useSelector((state) => state.apartmentsReducer);

  return {
    apartments,
  };
}
