import { Visibility } from "@mui/icons-material";
import { Link, Typography, Box } from "@mui/material";
import { TApartments } from "../../../types";

export default function UserApartmentGridCardShowAD({
  apartment,
}: {
  apartment: TApartments;
}) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Link
        sx={{
          border: "2px solid rgba(50, 205, 50, 1)",
          borderRadius: "100px",
          height: "45px",
          width: "45px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          "&:hover": {
            border: "2px solid rgba(50, 205, 50, .5)",
            boxShadow: "1",
            cursor: "pointer",
          },
        }}
        underline="none"
        href={`/apartments/${apartment?._id}`}
      >
        <Visibility
          sx={{
            color: "rgba(255, 99, 71, 1)",
          }}
        />
      </Link>
      <Typography sx={{ fontSize: ".8em", fontWeight: "bold" }}>
        See AD
      </Typography>
    </Box>
  );
}
