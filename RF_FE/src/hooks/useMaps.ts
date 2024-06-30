import { useQuery } from "@tanstack/react-query";
import MapsController from "../services/maps.api";

export function useMapsAPI({
  city,
  street,
  country,
  streetNumber,
  postalCode,
}: {
  city: string;
  street: string;
  country: string;
  streetNumber: string;
  postalCode: number;
}) {
  const queryKey = ["maps", city, street, country, streetNumber, postalCode];

  const { data } = useQuery({
    queryKey: queryKey,
    queryFn: () =>
      MapsController({ city, street, country, streetNumber, postalCode }),
  });

  return { data };
}
