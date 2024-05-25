import Grid from "@mui/material/Unstable_Grid2";
import { Box, Typography, Paper } from "@mui/material";
import {
  DoorFront,
  Stairs,
  ViewInAr,
  Elevator,
  Accessible,
  AcUnit,
  Balcony,
  Pets,
  Inventory,
  Bed,
  LocalParking,
} from "@mui/icons-material";

import { getApartmentsData } from "../../../store/apartments/selectors";

export default function SingleApartmentLeft() {
  const { singleApartment } = getApartmentsData();

  const apartmentAttributes = [
    {
      icon: <DoorFront />,
      value: singleApartment?.apartment?.rooms,
      labels: "rooms",
    },

    {
      icon: <ViewInAr />,
      value: singleApartment?.apartment?.size,
    },
    {
      icon: <Stairs />,
      value: singleApartment?.apartment?.floor,
      labels: "floor",
    },
  ];

  return (
    <Grid container spacing={2}>
      <Grid xs={12} sm={12} md={12} lg={12}>
        <Typography
          sx={{
            fontWeight: "bold",
            fontSize: "1.5rem",
            color: "rgba(255, 99, 71, 1)",
          }}
        >
          {singleApartment?.price}$ Per Month In{" "}
          {singleApartment?.address?.city}
        </Typography>
        <Typography sx={{ fontWeight: "bold" }}>
          {singleApartment?.apartment?.rooms}{" "}
          {singleApartment?.apartment?.rooms === 1 ? "Room" : "Rooms"} Apartment
          for Rent in {singleApartment?.address?.street}{" "}
          {singleApartment?.address?.buildingNumber}
        </Typography>

        <Box sx={{ display: "flex" }}>
          {apartmentAttributes.map((data, index) => (
            <Box key={index} sx={{ display: "flex", mr: "20px" }}>
              {data.icon}
              <Box sx={{ display: "flex" }}>
                <Typography>{data.value}</Typography>
                <Typography>{data.labels}</Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Grid>

      <Grid xs={12} sm={12} md={12} lg={12}>
        <Typography
          sx={{
            fontWeight: "bold",
            fontSize: "1.2rem",
            color: "rgba(255, 99, 71, 1)",
          }}
        >
          Apartment Description
        </Typography>
        <Typography>{singleApartment?.apartment?.description}</Typography>
      </Grid>

      <Grid xs={12} sm={12} md={12} lg={12}>
        <Paper sx={{ padding: "10px" }}>
          <Grid container spacing={3}>
            {features.map((feature) => {
              const isActive =
                singleApartment?.tags?.[
                  feature.key as keyof typeof singleApartment.tags
                ];

              return (
                <Grid xs={4} sm={3} md={3} lg={3} key={feature.key}>
                  <Typography
                    sx={{
                      color: isActive
                        ? "rgba(26, 188, 156, 1)"
                        : "rgba(26, 188, 156, .4)",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <feature.icon sx={{ mr: "10px" }} />
                    {feature.label}
                  </Typography>
                </Grid>
              );
            })}
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
}

const features = [
  { icon: Elevator, label: "Elevator", key: "elevator" },
  { icon: Accessible, label: "Accessible", key: "accessibleToDisabled" },
  { icon: AcUnit, label: "AC Unit", key: "airConditioning" },
  { icon: Inventory, label: "Storage", key: "storage" },
  { icon: Balcony, label: "Balcony", key: "balcony" },
  { icon: Bed, label: "Equipped", key: "equipped" },
  { icon: Pets, label: "Pets Allowed", key: "petFriendly" },
  { icon: LocalParking, label: "Free Parking", key: "parkingLot" },
];
