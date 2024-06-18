import Grid from "@mui/material/Unstable_Grid2/Grid2";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Link,
  Box,
} from "@mui/material";

import movingOutImg from "../../../assets/homePage/homePageHero.webp";

export default function BlogGrids() {
  return (
    <Grid container spacing={3}>
      <Grid
        xs={12}
        sm={6}
        md={12}
        lg={4}
        sx={{
          transition: "box-shadow 0.3s ease-in-out",
          "&:hover": { boxShadow: 10 },
        }}
      >
        <Link href="#" underline="none">
          <Card
            sx={{
              height: "290px",
            }}
          >
            <CardMedia image={movingOutImg} sx={{ height: "180px" }} />
            <CardContent
              sx={{
                height: "110px",
                position: "relative",
                backgroundColor: "rgba(255, 99, 71, .1)",
              }}
            >
              <Typography sx={{ fontWeight: "bold", fontSize: "1.2em" }}>
                Moving out for the first time? Then come get tips here!
              </Typography>
              <Box
                sx={{
                  position: "absolute",
                  bottom: "0",
                  left: "0",
                  backgroundColor: "rgba(255, 99, 71, .7)",
                  width: "100%",
                  display: "flex",
                }}
              >
                <Typography sx={{ ml: "20px" }}>Author:</Typography>
                <Typography>Temuujin Bat Erdene</Typography>
              </Box>
            </CardContent>
          </Card>
        </Link>
      </Grid>

      <Grid
        xs={12}
        sm={6}
        md={12}
        lg={4}
        sx={{
          transition: "box-shadow 0.3s ease-in-out",
          "&:hover": { boxShadow: 10 },
        }}
      >
        <Link href="#" underline="none">
          <Card
            sx={{
              height: "290px",
            }}
          >
            <CardMedia image={movingOutImg} sx={{ height: "180px" }} />
            <CardContent
              sx={{
                height: "110px",
                position: "relative",
                backgroundColor: "rgba(255, 99, 71, .1)",
              }}
            >
              <Typography sx={{ fontWeight: "bold", fontSize: "1.2em" }}>
                Moving out for the first time? Then come get tips here!
              </Typography>
              <Box
                sx={{
                  position: "absolute",
                  bottom: "0",
                  left: "0",
                  backgroundColor: "rgba(255, 99, 71, .7)",
                  width: "100%",
                  display: "flex",
                }}
              >
                <Typography sx={{ ml: "20px" }}>Author:</Typography>
                <Typography>Temuujin Bat Erdene</Typography>
              </Box>
            </CardContent>
          </Card>
        </Link>
      </Grid>

      <Grid
        xs={12}
        sm={6}
        md={12}
        lg={4}
        sx={{
          transition: "box-shadow 0.3s ease-in-out",
          "&:hover": { boxShadow: 10 },
        }}
      >
        <Link href="#" underline="none">
          <Card
            sx={{
              height: "290px",
            }}
          >
            <CardMedia image={movingOutImg} sx={{ height: "180px" }} />
            <CardContent
              sx={{
                height: "110px",
                position: "relative",
                backgroundColor: "rgba(255, 99, 71, .1)",
              }}
            >
              <Typography sx={{ fontWeight: "bold", fontSize: "1.2em" }}>
                Moving out for the first time? Then come get tips here!
              </Typography>
              <Box
                sx={{
                  position: "absolute",
                  bottom: "0",
                  left: "0",
                  backgroundColor: "rgba(255, 99, 71, .7)",
                  width: "100%",
                  display: "flex",
                }}
              >
                <Typography sx={{ ml: "20px" }}>Author:</Typography>
                <Typography>Temuujin Bat Erdene</Typography>
              </Box>
            </CardContent>
          </Card>
        </Link>
      </Grid>
    </Grid>
  );
}
