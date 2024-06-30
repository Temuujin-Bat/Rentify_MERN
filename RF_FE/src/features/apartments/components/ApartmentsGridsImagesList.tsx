import Slider from "react-slick";
import { ArrowBackIosNew, ArrowForwardIos } from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";

import img from "../../../assets/homePage/homePageHero.webp";
import { MapBox } from "../../../components";
import { TMaps } from "../../../types/maps.type";

export default function ApartmentsGridsImagesList({
  city,
  street,
  country,
  streetNumber,
  postalCode,
  width,
  height,
}: TMaps) {
  const images = [
    <MapBox
      city={city}
      street={street}
      country={country}
      streetNumber={streetNumber}
      postalCode={postalCode}
      width={width}
      height={height}
    />,
    img,
  ];

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow onClick={() => {}} />,
    prevArrow: <PrevArrow onClick={() => {}} />,
  };

  return (
    <Slider {...settings}>
      {images.map((img, index) => (
        <Box
          key={index}
          sx={{
            position: "relative",
            height: "340px",
          }}
        >
          {typeof img === "string" ? (
            <Box
              component={"img"}
              src={img}
              style={{
                height: "65%",
                width: "100%",
                objectFit: "cover",
              }}
            />
          ) : (
            <Box>{img}</Box>
          )}
        </Box>
      ))}
    </Slider>
  );
}

function NextArrow(props: { onClick: () => void }) {
  return (
    <IconButton
      onClick={props.onClick}
      sx={{
        position: "absolute",
        top: "25%",
        right: "12px",
        zIndex: 1,
        color: "white",
        "&:hover": {
          backgroundColor: "rgba(26, 188, 156, 1)",
        },
      }}
    >
      <ArrowForwardIos
        sx={{
          fontSize: "1.2em",
          backgroundColor: "rgba(26, 188, 156, 0.5)",
          borderRadius: "50%",
          padding: "5px",
        }}
      />
    </IconButton>
  );
}

function PrevArrow(props: { onClick: () => void }) {
  return (
    <IconButton
      onClick={props.onClick}
      sx={{
        position: "absolute",
        top: "25%",
        left: "12px",
        zIndex: 1,
        color: "white",
        "&:hover": {
          backgroundColor: "rgba(26, 188, 156, 1)",
        },
      }}
    >
      <ArrowBackIosNew
        sx={{
          fontSize: "1.2em",
          backgroundColor: "rgba(26, 188, 156, 0.5)",
          borderRadius: "50%",
          padding: "5px",
        }}
      />
    </IconButton>
  );
}
