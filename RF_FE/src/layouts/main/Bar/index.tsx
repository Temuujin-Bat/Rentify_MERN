import { Toolbar, AppBar } from "@mui/material";
import Navbar from "./Navbar";

const ApplicationBar = () => (
  <AppBar
    elevation={1}
    sx={{
      height: "60px",
      display: "flex",
      justifyContent: "center",
      backgroundColor: "white",
    }}
  >
    <Toolbar
      sx={{
        position: "sticky",
      }}
    >
      <Navbar />
    </Toolbar>
  </AppBar>
);

export { ApplicationBar };
