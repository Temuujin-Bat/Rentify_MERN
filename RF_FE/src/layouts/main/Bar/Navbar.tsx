import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Link,
  Tooltip,
  MenuItem,
  Avatar,
  Container,
  Menu,
  Typography,
  Box,
  IconButton,
} from "@mui/material";

import { getAuthData } from "../../../store/auth/selectors";
import { useDispatch } from "react-redux";
import { logout } from "../../../store/auth/slice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import img from "../../../assets/navbar/r-high-resolution-logo.png";

export default function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { userDetails } = getAuthData();

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogout = () => {
    dispatch(logout());

    toast.success("Logout successful", {
      autoClose: 1000,
      closeButton: false,
      pauseOnHover: false,
      hideProgressBar: true,
    });

    navigate("/login");
  };

  return (
    <Container
      maxWidth={"lg"}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      {/* PAGES */}
      <Box sx={{ display: { xs: "flex", sm: "flex", md: "flex", lg: "none" } }}>
        <IconButton
          onClick={handleOpenNavMenu}
          sx={{ color: "rgba(255, 99, 71, 1)" }}
        >
          <MenuIcon sx={{ fontSize: "1.5em" }} />
        </IconButton>
        <Menu
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
          sx={{ color: "rgba(255, 99, 71, 1)" }}
        >
          {pages.map((page) => (
            <Link key={page.name} underline="none" href={`/${page.url}`}>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography
                  sx={{
                    color: "rgba(255, 99, 71, 1)",
                    width: "100%",
                  }}
                >
                  {page.name}
                </Typography>
              </MenuItem>
            </Link>
          ))}
        </Menu>
      </Box>

      {/* LOGO */}
      <Box>
        <Link
          href="/"
          underline="none"
          sx={{ display: "flex", alignItems: "center" }}
        >
          <Box sx={{ height: "1.5em", mr: "5px" }}>
            <Typography component={"img"} src={img} sx={{ height: "100%" }} />
          </Box>
          <Typography
            sx={{
              display: { xs: "none", sm: "flex", md: "flex", lg: "flex" },
              fontWeight: "bold",
              fontSize: "1.5em",
              color: "rgba(255, 164, 88, 1)",
              letterSpacing: ".2em",
            }}
          >
            entify
          </Typography>
        </Link>
      </Box>

      {/* PAGES WHEN LARGE */}
      <Box sx={{ display: { xs: "none", sm: "none", md: "none", lg: "flex" } }}>
        {pages.map((page) => (
          <Link key={page.name} underline="none" href={`/${page.url}`}>
            <MenuItem onClick={handleCloseNavMenu}>
              <Typography
                sx={{ color: "rgba(255, 99, 71, 1)", fontSize: "1.2em" }}
              >
                {page.name}
              </Typography>
            </MenuItem>
          </Link>
        ))}
      </Box>

      {/* LOGIN AND USER */}
      {userDetails?.userID ? (
        <Box>
          <IconButton onClick={handleOpenUserMenu}>
            <Avatar sx={{ backgroundColor: "rgba(255, 99, 71, 1)" }}>T</Avatar>
          </IconButton>

          <Menu
            sx={{ mt: "45px" }}
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            <Link underline="none" href="/profile">
              <MenuItem onClick={handleCloseUserMenu}>
                <Typography
                  sx={{
                    color: "rgba(255, 99, 71, 1)",
                    width: "100%",
                  }}
                >
                  Profile
                </Typography>
              </MenuItem>
            </Link>
            <Link underline="none" href="/user/apartments">
              <MenuItem onClick={handleCloseUserMenu}>
                <Typography
                  sx={{
                    color: "rgba(255, 99, 71, 1)",
                    width: "100%",
                  }}
                >
                  My Apartments
                </Typography>
              </MenuItem>
            </Link>
            <MenuItem onClick={handleLogout}>
              <Typography
                sx={{
                  color: "rgba(255, 99, 71, 1)",
                  width: "100%",
                }}
              >
                Logout
              </Typography>
            </MenuItem>
          </Menu>
        </Box>
      ) : (
        <Box>
          <Link underline="none" href="login">
            <IconButton>
              <Tooltip title="login">
                <Avatar />
              </Tooltip>
            </IconButton>
          </Link>
        </Box>
      )}
    </Container>
  );
}

const pages = [
  { url: "apartments", name: "Apartments" },
  { url: "blog", name: "Blog" },
  { url: "addApartment", name: "Add Apartment" },
];
