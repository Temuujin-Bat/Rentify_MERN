import Grid from "@mui/material/Unstable_Grid2/Grid2";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Link,
  Box,
} from "@mui/material";

import image1 from "../../../assets/blogPage/blogMove1.jpeg";
import image2 from "../../../assets/blogPage/blogMove2.jpeg";
import image3 from "../../../assets/blogPage/blogMove3.jpeg";

export default function BlogGrids() {
  return (
    <Grid container spacing={4} sx={{ mt: "40px" }}>
      <Grid
        xs={12}
        sm={6}
        md={6}
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
            <CardMedia image={image1} sx={{ height: "180px" }} />
            <CardContent
              sx={{
                height: "110px",
                position: "relative",
                backgroundColor: "rgba(255, 99, 71, .1)",
              }}
            >
              <Typography sx={{ fontWeight: "bold", fontSize: "1.1em" }}>
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
                <Typography sx={{ ml: "20px", mr: "5px", fontWeight: "bold " }}>
                  Author:
                </Typography>
                <Typography>Temuujin Bat Erdene</Typography>
              </Box>
            </CardContent>
          </Card>
        </Link>
      </Grid>

      <Grid
        xs={12}
        sm={6}
        md={6}
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
            <CardMedia image={image2} sx={{ height: "180px" }} />
            <CardContent
              sx={{
                height: "110px",
                position: "relative",
                backgroundColor: "rgba(255, 99, 71, .1)",
              }}
            >
              <Typography sx={{ fontWeight: "bold" }}>
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
                <Typography sx={{ ml: "20px", mr: "5px", fontWeight: "bold " }}>
                  Author:
                </Typography>
                <Typography>Temuujin Bat Erdene</Typography>
              </Box>
            </CardContent>
          </Card>
        </Link>
      </Grid>

      <Grid
        xs={12}
        sm={6}
        md={6}
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
            <CardMedia image={image3} sx={{ height: "180px" }} />
            <CardContent
              sx={{
                height: "110px",
                position: "relative",
                backgroundColor: "rgba(255, 99, 71, .1)",
              }}
            >
              <Typography sx={{ fontWeight: "bold" }}>
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
                <Typography sx={{ ml: "20px", mr: "5px", fontWeight: "bold " }}>
                  Author:
                </Typography>
                <Typography>Temuujin Bat Erdene</Typography>
              </Box>
            </CardContent>
          </Card>
        </Link>
      </Grid>
    </Grid>
  );
}
