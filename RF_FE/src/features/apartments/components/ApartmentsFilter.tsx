import {
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ApartmentsFilter() {
  const [city, setCity] = useState("");

  const navigate = useNavigate();

  const handleSearch = () => {
    const params = new URLSearchParams();

    if (city) {
      params.append("city", city);
    }

    navigate({
      pathname: "/apartments",
      search: params.toString(),
    });
  };

  return (
    <Grid
      container
      spacing={2}
      sx={{ display: "flex", alignItems: "center", mt: "62px" }}
    >
      <Grid xs={12} sm={12} md={12}>
        <FormControl variant="outlined" fullWidth>
          <InputLabel>Country</InputLabel>
          <Select
            value={city}
            onChange={(e) => setCity(e.target.value)}
            label="City"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="Chicago">Chicago</MenuItem>
            <MenuItem value="Canada">Canada</MenuItem>
            <MenuItem value="Israel">Israel</MenuItem>
          </Select>
        </FormControl>
      </Grid>

      <Grid xs={12} sm={12} md={12}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleSearch}
          fullWidth
        >
          Search
        </Button>
      </Grid>
    </Grid>
  );
}
