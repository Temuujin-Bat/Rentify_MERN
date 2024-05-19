import { Box, Button, Container, Link, Typography } from "@mui/material";
import ApartmentIcon from "@mui/icons-material/Apartment";
import { useNavigate } from "react-router-dom";
import { getAuthData } from "../../../store/auth/selectors";

export default function Navbar() {
  const navigate = useNavigate();
  const { authDetails } = getAuthData();

  return (
    <Container
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      {/* ICON */}
      <Link
        sx={{
          display: "flex",
          textDecoration: "none",
          alignItems: "center",
        }}
        href="/"
      >
        <ApartmentIcon
          sx={{
            color: "rgba(12, 175, 255, 1)",
            fontSize: "2em",
          }}
        />
        <Typography
          sx={{
            fontWeight: "bold",
            color: "rgba(12, 175, 255, 1)",
            fontSize: "1.5em",
          }}
        >
          Rentify
        </Typography>
      </Link>

      {/* LISTS */}
      <Box sx={{ display: "flex" }}>
        {pages.map((page) => (
          <Button key={page.name} onClick={() => navigate(`${page.url}`)}>
            <Typography
              sx={{
                color: "rgba(12, 175, 255, 1)",
                fontSize: ".8em",
                fontWeight: "bold",
              }}
            >
              {page.name}
            </Typography>
          </Button>
        ))}
      </Box>

      {/* LOGIN BUTTON */}
      <Box sx={{ display: "flex", alignItems: "center" }}>
        {authDetails != null ? (
          <Button
            sx={{
              borderRadius: "20px",
              color: "rgba(12, 175, 255, 1)",
              fontWeight: "bold",
              border: "2px solid rgba(12, 175, 255, 1)",
              fontSize: ".6em",
            }}
          >
            {authDetails.firstName}
          </Button>
        ) : (
          <Button
            variant="outlined"
            sx={{
              borderRadius: "20px",
              color: "rgba(12, 175, 255, 1)",
              fontWeight: "bold",
              border: "2px solid rgba(12, 175, 255, 1)",
              fontSize: ".6em",
            }}
            onClick={() => navigate("/login")}
          >
            Login
          </Button>
        )}

        <Button
          variant="outlined"
          sx={{
            borderRadius: "20px",
            color: "rgba(12, 175, 255, 1)",
            fontWeight: "bold",
            border: "2px solid rgba(12, 175, 255, 1)",
            fontSize: ".6em",
          }}
          onClick={() => navigate("/addAds")}
        >
          Create AD
        </Button>
      </Box>
    </Container>
  );
}

const pages = [
  { url: "apartments", name: "Apartments" },
  { url: "blog", name: "Blog" },
];
