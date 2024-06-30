import axios from "axios";
import { TMaps } from "../types/maps.type";
const tokenMap =
  "pk.eyJ1IjoidGVtdWppbjEyMyIsImEiOiJjbHh5aXE1enQwMTFoMmtyNjZvZXJsb2MwIn0.31p5S_XfJDEzmMKzL3bJGA";

async function MapsController({
  country,
  city,
  street,
  streetNumber,
  postalCode,
}: TMaps) {
  try {
    const response = await axios.get(
      `https://api.mapbox.com/search/geocode/v6/forward?country=${country}&place=${city}&street=${street}&address_number=${streetNumber}&}&postcode=${postalCode}&access_token=${tokenMap}`
    );

    return response?.data?.features[0]?.geometry;
  } catch (error) {
    throw error;
  }
}

export default MapsController;
