import Grid from "@mui/material/Unstable_Grid2/Grid2";
import {
  GitHub,
  Home,
  Language,
  LinkedIn,
  Mail,
  Phone,
} from "@mui/icons-material";
import {
  Typography,
  Container,
  Link,
  Stack,
  Tooltip,
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Box,
} from "@mui/material";

export default function Footer() {
  return (
    <Container maxWidth={"lg"} sx={{ mt: "15px", mb: "20px" }}>
      <Grid container spacing={5}>
        {/* ABOUT COMPANY */}
        <Grid xs={12} sm={12} md={12} lg={4}>
          <Box sx={{ textAlign: "center" }}>
            <Typography
              sx={{
                fontSize: "1.2em",
                fontWeight: "bold",
                mb: "10px",
                textTransform: "uppercase",
              }}
            >
              About company
            </Typography>
            <Typography>
              Our platform aims to simplify the process of finding and renting
              apartments. Whether you're a tenant looking for your next home or
              a landlord listing properties, we provide a seamless experience
              with comprehensive search options and user-friendly tools.
              Discover your ideal rental solution with us today.
            </Typography>
          </Box>
        </Grid>

        {/* INFORMATION */}
        <Grid xs={12} sm={6} md={6} lg={4}>
          <Box sx={{ textAlign: "center" }}>
            <Typography
              sx={{
                fontSize: "1.2em",
                fontWeight: "bold",
                mb: "10px",
                textTransform: "uppercase",
              }}
            >
              Information
            </Typography>
            <Stack
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                mb: "10px",
              }}
            >
              <Phone sx={{ mr: ".5em" }} />
              <Typography>+972 054-3892359</Typography>
            </Stack>

            <Stack
              sx={{
                display: "flex",
                flexDirection: "row",
                mb: "10px",
                justifyContent: "center",
              }}
            >
              <Mail sx={{ mr: ".5em" }} />
              <Typography>temujinba@gmail.com</Typography>
            </Stack>

            <Stack
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <Home sx={{ mr: ".5em" }} />
              <Typography>Tel Aviv, TA 6329302, Israel</Typography>
            </Stack>

            <Stack
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                mt: "15px",
              }}
            >
              <Link href="#" sx={{ mr: "10px" }}>
                <LinkedIn
                  sx={{ color: "rgba(0, 119, 181, 1)", fontSize: "2em" }}
                />
              </Link>
              <Link href="#" sx={{ mr: "10px" }}>
                <GitHub
                  sx={{ color: "rgba(36, 41, 46, 1)", fontSize: "2em" }}
                />
              </Link>
              <Link href="#">
                <Tooltip title="Portfolio">
                  <Language
                    sx={{ color: "rgba(0, 0, 0, 0.8)", fontSize: "2em" }}
                  />
                </Tooltip>
              </Link>
            </Stack>
          </Box>
        </Grid>

        {/* OPERATING HOURS */}
        <Grid xs={12} sm={6} md={6} lg={4}>
          <Box sx={{ textAlign: "center" }}>
            <Typography
              sx={{
                fontSize: "1.2em",
                fontWeight: "bold",
                mb: "10px",
                textTransform: "uppercase",
              }}
            >
              Operating hours
            </Typography>

            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ fontWeight: "bold" }}>Days</TableCell>
                    <TableCell sx={{ fontWeight: "bold" }}>Hours</TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  <TableRow>
                    <TableCell>Sun - Thu</TableCell>
                    <TableCell>8am - 6pm</TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell>Fri</TableCell>
                    <TableCell>8am - 2pm</TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell>Saturday</TableCell>
                    <TableCell>Closed</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
