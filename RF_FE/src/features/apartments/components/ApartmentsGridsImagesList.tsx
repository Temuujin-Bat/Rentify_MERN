import Slider from "react-slick";
import { ArrowBackIosNew, ArrowForwardIos } from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";

import img1 from "../../../assets/homePage/homePageHero.webp";
import img2 from "../../../assets/homePage/homePageHero.webp";
import img3 from "../../../assets/homePage/homePageHero.webp";
import img4 from "../../../assets/homePage/homePageHero.webp";

const images = [img1, img2, img3, img4];

export default function ApartmentsGridsImagesList() {
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
          <Box
            component={"img"}
            src={img}
            style={{
              height: "65%",
              width: "100%",
              objectFit: "cover",
            }}
          />
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
          backgroundColor: "rgba(12, 175, 255, 1)",
        },
      }}
    >
      <ArrowForwardIos
        sx={{
          fontSize: "1.5rem",
          backgroundColor: "rgba(12, 175, 255, .1)",
          borderRadius: "50%",
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
          fontSize: "1.5rem",
          backgroundColor: "rgba(26, 188, 156, 0.1)",
          borderRadius: "50%",
        }}
      />
    </IconButton>
  );
}
