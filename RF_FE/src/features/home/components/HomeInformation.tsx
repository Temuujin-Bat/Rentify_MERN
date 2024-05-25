import { Box, Button, Typography, Container } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import HomeIcon from "@mui/icons-material/Home";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import PermPhoneMsgIcon from "@mui/icons-material/PermPhoneMsg";
import { useNavigate } from "react-router-dom";

export default function HomeInformation() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        backgroundColor: "rgba(50, 205, 50, .1)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography
        sx={{
          fontWeight: "bold",
          fontSize: "1.5em",
          color: "rgba(0, 0, 0, 1)",
          textAlign: "center",
        }}
      >
        Are you looking for a rental home?
      </Typography>

      <Container maxWidth={"lg"}>
        <Grid container spacing={2}>
          {gridData.map((item, index) => (
            <Grid
              xs={12}
              sm={12}
              md={4}
              lg={4}
              key={index}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              {item.icon}
              <Typography sx={{ fontWeight: "bold", fontSize: "1.2em" }}>
                {item.title}
              </Typography>
              <Typography sx={{ textAlign: "center" }}>
                {item.description}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Button
        onClick={() => navigate("/apartments")}
        sx={{
          background: "rgba(255, 99, 71, 1)",
          color: "#fff",
          borderRadius: "20px",
          padding: "5px 30px",
          fontWeight: "bold",
          "&:hover": {
            backgroundColor: "rgba(12, 175, 255, .5)",
          },
          fontSize: ".7em",
        }}
      >
        Find rental - free
      </Button>
    </Box>
  );
}

const gridData = [
  {
    icon: <HomeIcon sx={{ color: "rgba(255, 99, 71, 1)", fontSize: "3em" }} />,
    title: "All properties in one place",
    description:
      "We are a rental home search engine. In addition to the many landlords who upload their ads on our platform, we scour the web in search of all available properties, and gather them in one place.",
  },
  {
    icon: (
      <MonetizationOnIcon
        sx={{ color: "rgba(255, 99, 71, 1)", fontSize: "3em" }}
      />
    ),
    title: "Compare and save money",
    description:
      "Filter your search by city, rent, home type etc. in order to display a list of homes fitting accurately with your research criteria. You can also create a Search Agent, which will send you an email when a new property that corresponds to your criteria is uploaded on our site.",
  },
  {
    icon: (
      <PermPhoneMsgIcon
        sx={{ color: "rgba(255, 99, 71, 1)", fontSize: "3em" }}
      />
    ),
    title: "Quick contact",
    description:
      "When you find the rental of your dreams, you will be able to get in touch with the landlord in order to set up a visit, and then get the keys to your new home. Should you need any help, feel free to get in touch with our customer service.",
  },
];
