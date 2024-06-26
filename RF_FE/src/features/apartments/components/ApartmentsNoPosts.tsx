import { Container, Stack, Typography } from "@mui/material";
import img from "../../../assets/apartmentPage/UserApartmentDelete.jpg";

export default function ApartmentsNoPosts({ result }: { result: string }) {
  return (
    <Container
      maxWidth={"xs"}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "200px",
        mt: "30px",
        flexDirection: "column",
      }}
    >
      <Stack component={"img"} src={img} sx={{ height: "100%" }} />
      <Typography
        sx={{ fontWeight: "bold", fontSize: "1.2em", textAlign: "center" }}
      >
        "Sorry, No apartments found in{" "}
        <Typography
          sx={{
            color: "rgba(255, 99, 71, 1)",
            fontSize: "1.3em",
            fontWeight: "bold",
          }}
          component={"span"}
        >
          {result}
        </Typography>{" "}
        at the moment"
      </Typography>
    </Container>
  );
}
