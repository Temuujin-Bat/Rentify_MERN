import Grid from "@mui/material/Unstable_Grid2/Grid2";
import {
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ApartmentsFilter() {
  const [city, setCity] = useState("");
  const [rooms, setRooms] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const cityFromUrl = params.get("city");
    const roomsFromUrl = params.get("rooms");

    if (cityFromUrl) {
      setCity(cityFromUrl);
    } else {
      setCity("");
    }

    if (roomsFromUrl) {
      setRooms(roomsFromUrl);
    } else {
      setRooms("");
    }
  }, [location.search]);

  const handleSearch = () => {
    const params = new URLSearchParams();

    if (city) {
      params.append("city", city);
    }

    if (rooms) {
      params.append("rooms", rooms);
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
      <Grid xs={10} sm={10} md={10} lg={10}>
        <FormControl fullWidth error>
          <InputLabel
            sx={{
              fontWeight: "bold",
              color: "yellow",
            }}
          >
            City
          </InputLabel>
          <Select
            MenuProps={{
              sx: {
                "&& .Mui-selected": {
                  backgroundColor: "rgba(255, 99, 71, .5)",
                },
              },
            }}
            value={city}
            onChange={(e) => setCity(e.target.value)}
            label="City"
            sx={{
              "&.MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "rgba(26, 188, 156, 1)",
                },
                "&:hover fieldset": {
                  borderColor: "rgba(26, 188, 156, 1) ",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "rgba(26, 188, 156, 1) ",
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

      <Grid xs={2} sm={2} md={2} lg={2}>
        <FormControl fullWidth error>
          <InputLabel
            sx={{
              fontWeight: "bold",
              color: "yellow",
            }}
          >
            Rooms
          </InputLabel>
          <Select
            MenuProps={{
              sx: {
                "&& .Mui-selected": {
                  backgroundColor: "rgba(255, 99, 71, .5)",
                },
              },
            }}
            value={rooms}
            onChange={(e) => setRooms(e.target.value)}
            label="Rooms"
            sx={{
              "&.MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "rgba(26, 188, 156, 1)",
                },
                "&:hover fieldset": {
                  borderColor: "rgba(26, 188, 156, 1) ",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "rgba(26, 188, 156, 1) ",
                },
              },
            }}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>

            <MenuItem value="1">1</MenuItem>
            <MenuItem value="2">2</MenuItem>
            <MenuItem value="3">3</MenuItem>
            <MenuItem value="4">4</MenuItem>
            <MenuItem value="5+">5</MenuItem>
          </Select>
        </FormControl>
      </Grid>

      <Grid xs={12} sm={12} md={12}>
        <Button
          onClick={handleSearch}
          type="submit"
          sx={{
            height: "40px",
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
