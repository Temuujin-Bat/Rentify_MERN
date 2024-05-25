import Grid from "@mui/material/Unstable_Grid2";
import { TextField, Typography } from "@mui/material";

export default function AddAdsContact({ formData, setFormData }) {
  const handleChange = (field: string, value: string) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [field]: value,
    }));
  };

  return (
    <>
      <Typography>Contact Information</Typography>

      <Grid container spacing={2}>
        <Grid xs={12} sm={6} md={12} lg={12}>
          <TextField
            required
            label="Contact Name"
            fullWidth
            value={formData.name}
            onChange={(e) => handleChange("name", e.target.value)}
          />
        </Grid>

        <Grid xs={12} sm={6} md={12} lg={12}>
          <TextField
            required
            label="Phone Number"
            fullWidth
            value={formData.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
          />
        </Grid>
      </Grid>
    </>
  );
}
