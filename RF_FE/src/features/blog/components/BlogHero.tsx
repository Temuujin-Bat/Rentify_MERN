import { Box, Stack } from "@mui/material";

import blogHeroImage from "../../../assets/blogPage/blogPageHero.jpeg";

export default function BlogHero() {
  return (
    <Box
      sx={{
        height: { xs: "200px", sm: "250px", md: "300px", lg: "300px" },
      }}
    >
      <Stack
        component={"img"}
        src={blogHeroImage}
        sx={{ height: "100%", objectFit: "cover", width: "100%" }}
      />
    </Box>
  );
}
