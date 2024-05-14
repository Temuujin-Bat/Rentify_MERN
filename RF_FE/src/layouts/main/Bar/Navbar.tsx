import { Box, Button, Container, Link, Typography } from "@mui/material";
import ApartmentIcon from "@mui/icons-material/Apartment";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

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
        login
      </Button>
    </Container>
  );
}

const pages = [
  { url: "apartments", name: "Search rentals" },
  { url: "addList", name: "Add listing" },
  { url: "blog", name: "Blog" },
];
