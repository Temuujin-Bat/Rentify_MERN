import { Stack } from "@mui/material";
import { LinearProgress } from "@mui/material";

export default function LoadingMUI() {
  return (
    <Stack sx={{ width: "100%" }}>
      <LinearProgress
        sx={{
          backgroundColor: "rgba(255, 99, 71, .1)",
          "& .MuiLinearProgress-bar": {
            backgroundColor: "rgba(255, 99, 71, 1)",
          },
        }}
      />
    </Stack>
  );
}
