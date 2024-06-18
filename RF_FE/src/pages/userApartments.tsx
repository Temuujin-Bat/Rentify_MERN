import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Container } from "@mui/material";

import { useUserApartmentsAPI } from "../hooks/useApartments";
import { UserApartmentsGrids } from "../features/apartments";

export default function userApartments() {
  useUserApartmentsAPI();

  return (
    <>
      <Container maxWidth={"lg"}>
        <Grid xs={12} sm={12} md={12} lg={12}>
          <UserApartmentsGrids />
        </Grid>
      </Container>
    </>
  );
}
