import {
  Box,
  Button,
  Container,
  Link,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import ApartmentIcon from "@mui/icons-material/Apartment";
import { useNavigate } from "react-router-dom";
import { getAuthData } from "../../../store/auth/selectors";
import { useState } from "react";
import { useLogout } from "../../../hooks/useLogout";

export default function Navbar() {
  const navigate = useNavigate();
  const logout = useLogout();
  const { authDetails } = getAuthData();

  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleMenuItemClick = (url) => {
    handleCloseUserMenu();

    if (url) {
      setTimeout(() => {
        if (url === "/logout") {
          logout();
        } else {
          navigate(url);
        }
      }, 0);
    }
  };

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
            color: "rgba(255, 99, 71, 1)",
            fontSize: "2em",
          }}
        />
        <Typography
          sx={{
            fontWeight: "bold",
            color: "rgba(255, 99, 71, 1)",
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
                color: "rgba(255, 99, 71, 1)",
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
          <Box>
            <Button
              sx={{
                borderRadius: "20px",
                color: "rgba(255, 99, 71, 1)",
                fontWeight: "bold",
                border: "2px solid rgba(50, 205, 50, 1)",
                fontSize: ".6em",
              }}
              onClick={handleOpenUserMenu}
            >
              {authDetails.firstName}
            </Button>

            <Menu
              sx={{ mt: "45px" }}
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
              keepMounted
              disableScrollLock
            >
              {settings.map((setting) => (
                <MenuItem
                  key={setting.url}
                  onClick={() => handleMenuItemClick(setting.url)}
                >
                  <Typography textAlign="center">{setting.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        ) : (
          <Button
            sx={{
              borderRadius: "20px",
              color: "rgba(255, 99, 71, 1)",
              fontWeight: "bold",
              border: "2px solid rgba(50, 205, 50, 1)",
              fontSize: ".6em",
              "&:hover": {
                border: "2px solid rgba(50, 205, 50, .5)",
                color: "rgba(255, 99, 71, .5)",
              },
            }}
            onClick={() => navigate("/login")}
          >
            Login
          </Button>
        )}

        <Button
          sx={{
            borderRadius: "20px",
            color: "rgba(255, 99, 71, 1)",
            fontWeight: "bold",
            border: "2px solid rgba(50, 205, 50, 1)",
            fontSize: ".6em",
            "&:hover": {
              border: "2px solid rgba(50, 205, 50, .5)",
              color: "rgba(255, 99, 71, .5)",
            },
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

const settings = [
  { name: "Edit Profile", url: "/user/info" },
  { name: "My Apartments", url: "/user/apartments" },
  { name: "Saved Apartments", url: "/user/savedApartments" },
  { name: "Logout", url: "/logout" },
];
