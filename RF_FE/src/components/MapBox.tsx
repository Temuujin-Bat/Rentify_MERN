import "mapbox-gl/dist/mapbox-gl.css";
import Map, { Marker } from "react-map-gl";
import { useEffect, useState } from "react";
import { useMapsAPI } from "../hooks/useMaps";
import { TMaps } from "../types/maps.type";

const tokenMap =
  "pk.eyJ1IjoidGVtdWppbjEyMyIsImEiOiJjbHh5aXE1enQwMTFoMmtyNjZvZXJsb2MwIn0.31p5S_XfJDEzmMKzL3bJGA";

export default function MapBox({
  city,
  street,
  country,
  streetNumber,
  postalCode,
  width,
  height,
}: TMaps) {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const { data } = useMapsAPI({
    city,
    street,
    country,
    streetNumber,
    postalCode,
  });

  useEffect(() => {
    if (data?.coordinates) {
      const [lng, lat] = data?.coordinates;

      setLatitude(lat);
      setLongitude(lng);
    }
  }, [data]);

  return (
    <>
      {latitude !== null && longitude !== null && (
        <Map
          mapboxAccessToken={tokenMap}
          initialViewState={{
            latitude: latitude,
            longitude: longitude,
            zoom: 14,
          }}
          style={{ width: width || 400, height: height || 220 }}
          mapStyle="mapbox://styles/mapbox/streets-v9"
        >
          <Marker
            latitude={latitude}
            longitude={longitude}
            color="rgba(255, 99, 71, 1)"
            scale={0.8}
          />
        </Map>
      )}
    </>
  );
}
