import { BottomNavigation } from "@mui/material";
import Footer from "./Footer";

const ApplicationFooter = () => (
  <BottomNavigation
    sx={{
      display: "flex",
      justifyContent: "center",
      backgroundColor: "rgba(255, 99, 71, .1)",
      height: "100%",
      mt: "50px",
    }}
  >
    <Footer />
  </BottomNavigation>
);

export { ApplicationFooter };
