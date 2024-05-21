import {
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ApartmentsFilter() {
  const [city, setCity] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const cityFromUrl = params.get("city");

    if (cityFromUrl) {
      setCity(cityFromUrl);
    } else {
      setCity("");
    }
  }, [location.search]);

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
          <InputLabel>City</InputLabel>
          <Select
            value={city}
            onChange={(e) => setCity(e.target.value)}
            label="City"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>

            <MenuItem value="Jerusalem">Jerusalem</MenuItem>
            <MenuItem value="Tel Aviv">Tel Aviv</MenuItem>
            <MenuItem value="Haifa">Haifa</MenuItem>
            <MenuItem value="Rishon LeZion">Rishon LeZion</MenuItem>
            <MenuItem value="Petah Tikva">Petah Tikva</MenuItem>
            <MenuItem value="Ashdod">Ashdod</MenuItem>
            <MenuItem value="Netanya">Netanya</MenuItem>
            <MenuItem value="Beer Sheva">Beer Sheva</MenuItem>
            <MenuItem value="Bnei Brak">Bnei Brak</MenuItem>
            <MenuItem value="Holon">Holon</MenuItem>
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
