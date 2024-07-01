import { Typography, Stack, Link } from "@mui/material";
import { Key } from "@mui/icons-material";

export default function ProfileCardsPasswordChange() {
  return (
    <Link
      underline="none"
      sx={{
        display: "flex",
        alignItems: "center",
        mb: "20px",
        "&:hover": {
          cursor: "pointer",
          "& .key-icon": {
            color: "white",
            backgroundColor: "rgba(255, 99, 71, 1)",
          },
          "& .typography-background": {
            color: "rgba(255, 99, 71, 1)",
          },
        },
      }}
      href="/password-change"
    >
      <Key
        className="key-icon"
        sx={{
          color: "rgba(255, 99, 71, 1)",
          backgroundColor: "rgba(255, 99, 71, .2)",
          borderRadius: "20px",
          padding: "5px",
          fontSize: "2.3em",
          mr: "10px",
        }}
      />

      <Stack
        sx={{
          display: "flex",
        }}
      >
        <Typography
          className="typography-background"
          sx={{
            fontWeight: "bold",
            fontSize: ".8em",
          }}
        >
          Change password
        </Typography>
        <Typography
          className="typography-background"
          sx={{
            fontSize: ".8em",
          }}
        >
          Security
        </Typography>
      </Stack>
    </Link>
  );
}
