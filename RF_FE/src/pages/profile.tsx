import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Container } from "@mui/material";

import { useGetProfileAPI } from "../hooks/useUser";

import { ProfileCards } from "../features/profile";
import { LoadingMUI } from "../components";

export default function profile() {
  const { isLoading } = useGetProfileAPI();

  if (isLoading) {
    return <LoadingMUI />;
  }

  return (
    <Container maxWidth={"sm"}>
      <Grid xs={12} sm={12} md={12} lg={12}>
        <ProfileCards />
      </Grid>
    </Container>
  );
}
