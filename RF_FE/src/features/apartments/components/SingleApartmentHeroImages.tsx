import Slider from "react-slick";
import Container from "@mui/material/Container";

import { Box, Button, IconButton, Modal } from "@mui/material";

import { ArrowBackIosNew, ArrowForwardIos, Close } from "@mui/icons-material";
import { useState } from "react";

import img1 from "../../../assets/homePage/homePageHero.webp";
import img2 from "../../../assets/homePage/homePageHero.webp";
import img3 from "../../../assets/homePage/homePageHero.webp";
import img4 from "../../../assets/homePage/homePageHero.webp";

const images = [img1, img2, img3, img4];

function NextArrow(props: { onClick: () => void }) {
  return (
    <IconButton
      onClick={props.onClick}
      sx={{
        position: "absolute",
        top: "40%",
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
          fontSize: "3rem",
          backgroundColor: "rgba(26, 188, 156, 0.1)",
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
        top: "40%",
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
          fontSize: "3rem",
          backgroundColor: "rgba(26, 188, 156, 0.1)",
          borderRadius: "50%",
        }}
      />
    </IconButton>
  );
}

export default function SingleApartmentHeroImages() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow onClick={() => {}} />,
    prevArrow: <PrevArrow onClick={() => {}} />,
  };

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container maxWidth={"xl"} sx={{ marginTop: "62px" }}>
      <Slider {...settings}>
        {images.map((img, index) => (
          <Box
            key={index}
            sx={{
              position: "relative",
              height: "300px",
            }}
          >
            <Box
              component={"img"}
              src={img}
              style={{
                height: "100%",
                width: "100%",
                objectFit: "cover",
              }}
              onClick={handleOpen}
            />
          </Box>
        ))}
      </Slider>

      <Modal open={open}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            height: "100%",
            width: "100%",
            bgcolor: "background.paper",
          }}
        >
          <Box sx={{ margin: "20px 20px 20px 20px" }}>
            <Button
              variant="contained"
              onClick={handleClose}
              sx={{
                backgroundColor: "rgba(26, 188, 156, 1)",
                fontWeight: "bold",
                borderRadius: "20px",
                "&:hover": { backgroundColor: "rgba(26, 188, 156, 0.5)" },
              }}
            >
              Close Gallery
              <Close />
            </Button>
          </Box>

          <Box sx={{ backgroundColor: "#fff", width: "100%", height: "100%" }}>
            <Slider {...settings}>
              {images.map((img, index) => (
                <Box
                  key={index}
                  sx={{
                    position: "relative",
                    height: "100%",
                  }}
                >
                  <Box
                    component={"img"}
                    src={img}
                    style={{
                      height: "100%",
                      width: "100%",
                      objectFit: "contain",
                    }}
                  />
                </Box>
              ))}
            </Slider>
          </Box>
        </Box>
      </Modal>
    </Container>
  );
}
