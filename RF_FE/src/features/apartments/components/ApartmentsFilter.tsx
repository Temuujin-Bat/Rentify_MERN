import { Autocomplete, TextField } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

export default function ApartmentsFilter() {
  return (
    <Grid
      container
      spacing={2}
      sx={{ display: "flex", alignItems: "center", mt: "62px" }}
    >
      <Grid xs={12} sm={12} md={12} lg={12}>
        <Autocomplete
          freeSolo
          renderInput={(params) => (
            <TextField {...params} placeholder="City or Neighborhood" />
          )}
          options={[]}
        />
      </Grid>
    </Grid>
  );
}
