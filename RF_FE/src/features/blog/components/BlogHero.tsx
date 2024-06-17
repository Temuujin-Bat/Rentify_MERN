import { Box, Stack } from "@mui/material";

import homeHeroImage from "../../../assets/homePage/homePageHero.webp";

export default function BlogHero() {
  return (
    <Box
      sx={{
        height: { xs: "200px", sm: "250px", md: "300px", lg: "300px" },
      }}
    >
      <Stack
        component={"img"}
        src={homeHeroImage}
        sx={{ height: "100%", objectFit: "cover", width: "100%" }}
      />
    </Box>
  );
}
