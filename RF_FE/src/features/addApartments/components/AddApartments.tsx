import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Button, FormControl } from "@mui/material";
import { useState } from "react";
import AddAdsAddress from "./AddAdsAddress";
import AddAdsDescription from "./AddAdsDescription";
import AddAdsContact from "./AddAdsContact";
import { useAddApartmentAPI } from "../../../hooks/useApartments";

export default function AddApartments() {
  const [formData, setFormData] = useState({
    name: "Temuujin Bat Erdene",
    phone: "0543892359",
    price: "1200",
    apartment: {
      description:
        "A spacious and modern 3-room apartment located in the heart of Tel Aviv. Features a large living area, fully equipped kitchen, and a beautiful balcony with city views. Ideal for families or professionals.",
      floor: "5",
      size: "120",
      rooms: "3",
    },
    address: {
      city: "Tel Aviv",
      street: "Rothschild Boulevard",
      buildingNumber: "20",
      zipCode: "6688107",
    },
    tags: {
      elevator: true,
      parkingLot: true,
      airConditioning: true,
      balcony: true,
      accessibleToDisabled: false,
      equipped: true,
      petFriendly: true,
      storage: true,
    },
  });

  const { mutate: addApartment } = useAddApartmentAPI();

  const handleSubmit = async (e) => {
    e.preventDefault();

    addApartment({ formData });
  };

  return (
    <FormControl component="form" onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid xs={12} sm={12} md={12} lg={12}>
          <AddAdsAddress formData={formData} setFormData={setFormData} />
        </Grid>
        <Grid xs={12} sm={12} md={12} lg={12}>
          <AddAdsDescription formData={formData} setFormData={setFormData} />
        </Grid>
        <Grid xs={12} sm={12} md={12} lg={12}>
          <AddAdsContact formData={formData} setFormData={setFormData} />
        </Grid>
        <Grid xs={12} sm={12} md={12} lg={12}>
          <Button
            type="submit"
            sx={{
              background: "rgba(255, 99, 71, 1)",
              "&:hover": { background: "rgba(255, 99, 71, .6)" },
              color: "white",
            }}
            fullWidth
          >
            Submit
          </Button>
        </Grid>
      </Grid>
    </FormControl>
  );
}
