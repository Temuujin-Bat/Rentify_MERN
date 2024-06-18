import Grid from "@mui/material/Unstable_Grid2/Grid2";
import Container from "@mui/material/Container";
import { UserEdit } from "../features/user";
import { useGetUserInfoAPI } from "../hooks/useUser";

export default function userInfo() {
  useGetUserInfoAPI();

  return (
    <Container maxWidth={"md"}>
      <Grid xs={12} sm={12} md={12} lg={12}>
        <UserEdit />
      </Grid>
    </Container>
  );
}
