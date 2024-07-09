import { Outlet, useLocation } from "react-router-dom";

// MUI
import { styled } from "@mui/system";
import { Box, Typography } from "@mui/material";
import { ApplicationBar } from "./Bar";
import { ApplicationFooter } from "./Footer";
import { Copyright } from "@mui/icons-material";

const MainStyled = styled("main")(() => ({
  width: "100%",
  flexGrow: 1,
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0,
}));

const MainLayout = () => {
  const location = useLocation();
  const hideFooterPaths = [
    "/login",
    "/register",
    "/profile",
    "/profile/edit-name",
    "/profile/edit-profile",
    "/profile/edit-account",
    "/profile/edit-photo",
    "/password-change",
  ];
  const shouldHideFooter = hideFooterPaths.includes(location.pathname);

  return (
    <Box sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <ApplicationBar />
      <MainStyled>
        <Outlet />
      </MainStyled>
      {!shouldHideFooter && <ApplicationFooter />}
      {!shouldHideFooter && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            backgroundColor: "rgba(255, 99, 71, .5)",
            width: "100%",
            padding: "20px",
          }}
        >
          <Copyright />
          <Typography sx={{ fontWeight: "bold" }}>
            2024 Copyright: Rentify.com
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export { MainLayout };
