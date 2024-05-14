import { Outlet } from "react-router-dom";

// MUI
import { styled } from "@mui/system";
import { Box } from "@mui/material";
import { ApplicationBar } from "./Bar";

const MainStyled = styled("main")(() => ({
  width: "100%",
  minHeight: "calc(100vh - 88px)",
  flexGrow: 1,
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0,
}));

const MainLayout = () => {
  return (
    <Box>
      <ApplicationBar />
      <MainStyled>
        <Outlet />
      </MainStyled>
    </Box>
  );
};

export { MainLayout };
