import { Box } from "@mui/material";

import homeHeroImage from "../../../assets/homePage/homePageHero.webp";

export default function UserApartmentsHero() {
  return (
    <Box
      sx={{
        backgroundImage: `url(${homeHeroImage})`,
        height: "300px",
        backgroundPosition: "55% 50%",
      }}
    />
  );
}
