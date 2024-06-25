import { Box, Button, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";

import img from "../../../assets/userApartments/userApartmentNotFound.jpeg";

export default function UserApartmentsGridNoPosts() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        mt: "100px",
      }}
    >
      <Box sx={{ height: "200px", width: "200px", mb: "1em" }}>
        <Stack
          component={"img"}
          src={img}
          sx={{
            width: "100%",
            objectFit: "cover",
            borderRadius: "200px",
            height: "100%",
          }}
        />
      </Box>

      <Button
        sx={{
          borderRadius: "20px",
          color: "rgba(255, 99, 71, 1)",
          fontWeight: "bold",
          border: "2px solid rgba(50, 205, 50, 1)",
          "&:hover": {
            border: "2px solid rgba(50, 205, 50, .5)",
            color: "rgba(255, 99, 71, .5)",
          },
        }}
        onClick={() => navigate("/addApartment")}
      >
        Would you like to post???
      </Button>
    </Box>
  );
}
