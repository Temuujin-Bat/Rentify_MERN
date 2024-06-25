import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Paper, TextField, Typography } from "@mui/material";
import { TApartments } from "../../../types";

export default function AddAdsContact({
  formData,
  setFormData,
}: {
  formData: TApartments;
  setFormData: React.Dispatch<React.SetStateAction<TApartments>>;
}) {
  const handleChange = (field: string, value: string) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [field]: value,
    }));
  };

  return (
    <Paper
      elevation={10}
      sx={{ padding: { xs: "5px", sm: "20px", md: "20px", lg: "20px" } }}
    >
      <Typography
        sx={{
          fontSize: "1.5em",
          fontWeight: "bold",
          color: "rgba(255, 99, 71, 1)",
          my: ".5em",
        }}
      >
        Contact Information
      </Typography>

      <Grid container spacing={2}>
        <Grid xs={12} sm={6} md={6} lg={6}>
          <Typography
            sx={{
              ml: "5px",
              fontWeight: "bold",
            }}
          >
            Full Name*
          </Typography>
          <TextField
            required
            fullWidth
            value={formData.name}
            onChange={(e) => handleChange("name", e.target.value)}
          />
        </Grid>

        <Grid xs={12} sm={6} md={6} lg={6}>
          <Typography
            sx={{
              ml: "5px",
              fontWeight: "bold",
            }}
          >
            Phone Number*
          </Typography>
          <TextField
            required
            fullWidth
            value={formData.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
          />
        </Grid>
      </Grid>
    </Paper>
  );
}
