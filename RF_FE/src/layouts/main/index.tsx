import { Outlet } from "react-router-dom";

// MUI
import { styled } from "@mui/system";
import { Box } from "@mui/material";
import { ApplicationBar } from "./Bar";

const MainStyled = styled("main")(() => ({
  width: "100%",
  flexGrow: 1,
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0,
}));

const MainLayout = () => {
  return (
    <Box sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <ApplicationBar />
      <MainStyled>
        <Outlet />
      </MainStyled>
    </Box>
  );
};

export { MainLayout };
