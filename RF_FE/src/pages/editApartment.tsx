import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Button, Container, FormControl } from "@mui/material";
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

import { LoadingMUI } from "../components";
import { TApartments } from "../types";

export default function editApartment() {
  const [formData, setFormData] = useState<TApartments>({
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

  const { id } = useParams<{ id: string }>();

  if (!id) {
    return <div>Error: Apartment ID is missing</div>;
  }

  const { isLoading, isError } = useGetSingleApartmentAPI(id);

  const { singleApartment } = getApartmentsData();

  useEffect(() => {
    if (singleApartment) {
      setFormData(singleApartment);
    }
  }, [singleApartment]);

  const { mutate: editApartment } = useUserEditApartmentAPI(id, formData);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    editApartment();
  };

  if (isLoading) {
    return <LoadingMUI />;
  }

  if (isError) {
    return <div>Error loading apartments: {isError}</div>;
  }

  return (
    <Container maxWidth={"lg"}>
      <FormControl component={"form"} onSubmit={handleSubmit}>
        <Grid container spacing={2} sx={{ mt: "1em" }}>
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
                height: "3em",
                fontWeight: "bold",
              }}
              fullWidth
            >
              Update
            </Button>
          </Grid>
        </Grid>
      </FormControl>
    </Container>
  );
}
