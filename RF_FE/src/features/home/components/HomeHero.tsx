import { Box } from "@mui/material";

import homeHeroImage from "../../../assets/homePage/homePageHero.webp";

export default function HomeHero() {
  return (
    <Box
      sx={{
        mt: "62px",
        backgroundImage: `url(${homeHeroImage})`,
        height: "300px",
        backgroundPosition: "55% 50%",
      }}
    />
  );
}
