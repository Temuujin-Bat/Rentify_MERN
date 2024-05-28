import Grid from "@mui/material/Unstable_Grid2";
import {
  Autocomplete,
  TextField,
  Typography,
  InputAdornment,
} from "@mui/material";

export default function AddAdsAddress({ formData, setFormData }) {
  return (
    <>
      <Typography>Apartment Information</Typography>

      <Grid xs={12} sm={12} md={12} lg={12} container spacing={2}>
        {/* CITY */}
        <Grid xs={12} sm={6} md={12} lg={12}>
          <Autocomplete
            disablePortal
            options={cities}
            renderInput={(params) => <TextField {...params} label="City" />}
            value={formData.address.city}
            onChange={(_, newValue) => {
              setFormData((prevData) => ({
                ...prevData,
                address: {
                  ...prevData.address,
                  city: newValue,
                },
              }));
            }}
          />
        </Grid>

        {/* STREET */}
        <Grid xs={12} sm={6} md={12} lg={12}>
          <TextField
            fullWidth
            required
            label="Street Name"
            autoComplete="off"
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
        <Grid xs={12} sm={4} md={12} lg={12}>
          <TextField
            fullWidth
            required
            label="Building number"
            autoComplete="off"
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
        <Grid xs={12} sm={4} md={12} lg={12}>
          <TextField
            fullWidth
            required
            label="Floor number"
            autoComplete="off"
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
        <Grid xs={12} sm={4} md={12} lg={12}>
          <TextField
            fullWidth
            required
            label="Number of rooms"
            autoComplete="off"
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

        {/* MONTHLY PAYMENT */}
        <Grid xs={12} sm={4} md={12} lg={12}>
          <TextField
            fullWidth
            required
            label="Monthly payment"
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

        {/* SIZE OF APARTMENT */}
        <Grid xs={12} sm={4} md={12} lg={12}>
          <TextField
            fullWidth
            required
            label="Size of asset"
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

        {/* POSTAL CODE */}
        <Grid xs={12} sm={4} md={12} lg={12}>
          <TextField
            fullWidth
            required
            label="Postal code"
            InputProps={{
              autoComplete: "new-password",
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
    </>
  );
}

const cities = ["Tel Aviv", "Haifa", "Jerusalem", "Netanya", "Eilat"];
