import { Visibility } from "@mui/icons-material";
import { Link, Typography } from "@mui/material";
import { TUserApartments } from "../../../types";

export default function UserApartmentGridCardShowAD({
  apartment,
}: {
  apartment: TUserApartments;
}) {
  return (
    <Link
      sx={{
        border: "2px solid rgba(50, 205, 50, 1)",
        borderRadius: "100px",
        height: "70px",
        width: "70px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        "&:hover": {
          border: "2px solid rgba(50, 205, 50, .5)",
          boxShadow: "1",
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
      <Typography sx={{ fontSize: ".8em", fontWeight: "bold" }}>
        See AD
      </Typography>
    </Link>
  );
}
