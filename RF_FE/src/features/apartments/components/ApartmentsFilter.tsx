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
      sx={{ display: "flex", alignItems: "center", marginTop: "20px" }}
    >
      <Grid xs={12} sm={12} md={12}>
        <FormControl fullWidth>
          <InputLabel
            sx={{ fontWeight: "bold", color: "rgba(255, 99, 71, 1)" }}
          >
            City
          </InputLabel>
          <Select
            value={city}
            onChange={(e) => setCity(e.target.value)}
            label="City"
            sx={{
              "&.MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "rgba(50, 205, 50, 1)",
                },
                "&:hover fieldset": {
                  borderColor: "rgba(50, 205, 50, 1)",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "rgba(50, 205, 50, 1)",
                },
              },
            }}
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
          onClick={handleSearch}
          type="submit"
          sx={{
            background: "rgba(255, 99, 71, 1)",
            "&:hover": { background: "rgba(255, 99, 71, .6)" },
          }}
          variant="contained"
          fullWidth
        >
          Search
        </Button>
      </Grid>
    </Grid>
  );
}
