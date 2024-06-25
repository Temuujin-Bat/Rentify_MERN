import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Button, FormControl } from "@mui/material";
import { useState, useEffect } from "react";
import {
  AddAdsAddress,
  AddAdsDescription,
  AddAdsContact,
} from "../features/addApartments";

import { useParams } from "react-router-dom";
import {
  useGetSingleApartmentAPI,
  useUserEditApartmentAPI,
} from "../hooks/useApartments";
import { getApartmentsData } from "../store/apartments/selectors";

export default function editApartment() {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    price: "",
    apartment: {
      description: "",
      floor: "",
      size: "",
      rooms: "",
    },
    address: {
      city: "",
      street: "",
      buildingNumber: "",
      zipCode: "",
    },
    tags: {
      elevator: false,
      parkingLot: false,
      airConditioning: false,
      balcony: false,
      accessibleToDisabled: false,
      equipped: false,
      petFriendly: false,
      storage: false,
    },
  });

  if (id) {
    useGetSingleApartmentAPI(id);
  }

  const { userSingleApartment } = getApartmentsData();

  useEffect(() => {
    if (userSingleApartment) {
      setFormData(userSingleApartment);
    }
  }, [userSingleApartment]);

  const { mutate: editApartment } = useUserEditApartmentAPI(id, formData);

  const handleSubmit = async (e) => {
    e.preventDefault();

    editApartment({ id, ...formData });
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
            Update
          </Button>
        </Grid>
      </Grid>
    </FormControl>
  );
}
