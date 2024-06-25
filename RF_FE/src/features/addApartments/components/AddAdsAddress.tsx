import Grid from "@mui/material/Unstable_Grid2/Grid2";
import {
  Autocomplete,
  TextField,
  Typography,
  InputAdornment,
  Stack,
  Link,
  Tooltip,
  Paper,
} from "@mui/material";
import { TApartments } from "../../../types";

export default function AddAdsAddress({
  formData,
  setFormData,
}: {
  formData: TApartments;
  setFormData: React.Dispatch<React.SetStateAction<TApartments>>;
}) {
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
          mb: ".5em",
        }}
      >
        Apartment Information
      </Typography>

      <Grid container spacing={2}>
        {/* CITY */}
        <Grid xs={12} sm={6} md={6} lg={6}>
          <Autocomplete
            disablePortal
            options={cities}
            renderInput={(params) => (
              <Stack>
                <Typography
                  sx={{
                    ml: "5px",
                    fontWeight: "bold",
                  }}
                >
                  City*
                </Typography>
                <TextField {...params} />
              </Stack>
            )}
            value={formData.address.city}
            onChange={(_, newValue) => {
              setFormData((prevData) => ({
                ...prevData,
                address: {
                  ...prevData.address,
                  city: newValue || "",
                },
              }));
            }}
          />
        </Grid>

        {/* STREET */}
        <Grid xs={12} sm={6} md={6} lg={6}>
          <Typography
            sx={{
              ml: "5px",
              fontWeight: "bold",
            }}
          >
            Street Name*
          </Typography>
          <TextField
            fullWidth
            required
            value={formData.address.street}
            onChange={(event) => {
              const value = event.target.value;
              setFormData((prevData) => ({
                ...prevData,
                address: {
                  ...prevData.address,
                  street: value,
                },
              }));
            }}
          />
        </Grid>

        {/* HOUSE NUMBER */}
        <Grid xs={12} sm={4} md={4} lg={3}>
          <Typography
            sx={{
              ml: "5px",
              fontWeight: "bold",
            }}
          >
            Building Number*
          </Typography>
          <TextField
            fullWidth
            required
            value={formData.address.buildingNumber}
            onChange={(event) => {
              const value = event.target.value;
              setFormData((prevData) => ({
                ...prevData,
                address: {
                  ...prevData.address,
                  buildingNumber: value,
                },
              }));
            }}
          />
        </Grid>

        {/* FLOOR NUMBER */}
        <Grid xs={12} sm={4} md={4} lg={3}>
          <Typography
            sx={{
              ml: "5px",
              fontWeight: "bold",
            }}
          >
            Floor Number*
          </Typography>
          <TextField
            fullWidth
            required
            value={formData.apartment.floor}
            onChange={(event) => {
              const value = event.target.value;
              setFormData((prevData) => ({
                ...prevData,
                apartment: {
                  ...prevData.apartment,
                  floor: value,
                },
              }));
            }}
          />
        </Grid>

        {/* NUMBER OF ROOMS */}
        <Grid xs={12} sm={4} md={4} lg={3}>
          <Typography
            sx={{
              ml: "5px",
              fontWeight: "bold",
            }}
          >
            Number Of Rooms*
          </Typography>
          <TextField
            fullWidth
            required
            value={formData.apartment.rooms}
            onChange={(event) => {
              const value = event.target.value;
              setFormData((prevData) => ({
                ...prevData,
                apartment: {
                  ...prevData.apartment,
                  rooms: value,
                },
              }));
            }}
          />
        </Grid>

        {/* SIZE OF APARTMENT */}
        <Grid xs={12} sm={4} md={4} lg={3}>
          <Typography
            sx={{
              ml: "5px",
              fontWeight: "bold",
            }}
          >
            Size Of Asset
          </Typography>
          <TextField
            fullWidth
            required
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">m2</InputAdornment>
              ),
            }}
            value={formData.apartment.size}
            onChange={(event) => {
              const value = event.target.value;
              setFormData((prevData) => ({
                ...prevData,
                apartment: {
                  ...prevData.apartment,
                  size: value,
                },
              }));
            }}
          />
        </Grid>

        {/* MONTHLY PAYMENT */}
        <Grid xs={12} sm={4} md={4} lg={6}>
          <Typography
            sx={{
              ml: "5px",
              fontWeight: "bold",
            }}
          >
            Monthly Payment*
          </Typography>
          <TextField
            fullWidth
            required
            InputProps={{
              endAdornment: <InputAdornment position="start">$</InputAdornment>,
            }}
            value={formData.price}
            onChange={(event) => {
              const value = event.target.value;
              setFormData((prevData) => ({
                ...prevData,
                price: value,
              }));
            }}
          />
        </Grid>

        {/* POSTAL CODE */}
        <Grid xs={12} sm={4} md={4} lg={6}>
          <Typography
            sx={{
              ml: "5px",
              fontWeight: "bold",
            }}
          >
            Postal Code*
          </Typography>
          <TextField
            fullWidth
            required
            InputProps={{
              autoComplete: "new-password",
              endAdornment: (
                <InputAdornment position="start">
                  <Tooltip title="Zip Code/Postal Code Help">
                    <Link
                      target="_blank"
                      href="https://israelpost.co.il/%D7%A9%D7%99%D7%A8%D7%95%D7%AA%D7%99%D7%9D/%D7%90%D7%99%D7%AA%D7%95%D7%A8-%D7%9E%D7%99%D7%A7%D7%95%D7%93/"
                      sx={{
                        color: "blue",

                        "&:hover": {
                          textDecoration: "underline",
                        },
                        fontWeight: "bold",
                        fontSize: "14px",
                      }}
                    >
                      Find Postal Code
                    </Link>
                  </Tooltip>
                </InputAdornment>
              ),
            }}
            inputProps={{
              minLength: 7,
            }}
            error={
              formData.address.zipCode.length > 0 &&
              formData.address.zipCode.length < 7
            }
            helperText={
              formData.address.zipCode.length > 0 &&
              formData.address.zipCode.length < 7
                ? "Postal code is not correct"
                : ""
            }
            value={formData.address.zipCode}
            onChange={(event) => {
              const value = event.target.value;
              setFormData((prevData) => ({
                ...prevData,
                address: {
                  ...prevData.address,
                  zipCode: value,
                },
              }));
            }}
          />
        </Grid>
      </Grid>
    </Paper>
  );
}

const cities = ["Tel Aviv", "Haifa", "Jerusalem", "Netanya", "Eilat"];
