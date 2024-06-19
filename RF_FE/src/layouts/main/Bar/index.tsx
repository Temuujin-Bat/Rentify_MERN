import { Toolbar, AppBar } from "@mui/material";
import Navbar from "./Navbar";

const ApplicationBar = () => (
  <AppBar
    elevation={1}
    sx={{
      height: "60px",
      display: "flex",
      justifyContent: "center",
      backgroundColor: "rgba(255, 99, 71, .1)",
      position: "static",
    }}
  >
    <Toolbar disableGutters>
      <Navbar />
    </Toolbar>
  </AppBar>
);

export { ApplicationBar };
