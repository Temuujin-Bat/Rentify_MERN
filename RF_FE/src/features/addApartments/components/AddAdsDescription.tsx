import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { TextField, Typography } from "@mui/material";

export default function AddAdsDescription({ formData, setFormData }) {
  const toggleTag = (tagKey: string) => {
    setFormData({
      ...formData,
      tags: {
        ...formData.tags,
        [tagKey]: !formData.tags[tagKey],
      },
    });
  };

  const propertyItems = [
    { key: "elevator", name: "Elevator" },
    { key: "parkingLot", name: "Parking Lot" },
    { key: "airConditioning", name: "AC Unit" },
    { key: "balcony", name: "Balcony" },
    { key: "accessibleToDisabled", name: "Accessible" },
    { key: "equipped", name: "Equipped" },
    { key: "petFriendly", name: "Pets" },
    { key: "storage", name: "Storage" },
  ];

  return (
    <>
      <Typography>Apartment Description</Typography>

      <Grid container spacing={2}>
        {propertyItems.map(({ key, name }) => (
          <Grid
            onClick={() => toggleTag(key)}
            key={key}
            xs={12}
            sm={3}
            md={12}
            lg={3}
            sx={{
              display: "flex",
              justifyContent: "center",
              cursor: "pointer",
              height: "56px",
            }}
          >
            <Typography
              sx={{
                borderRadius: "5px",
                border: `1px solid ${
                  formData.tags[key]
                    ? "rgba(26, 188, 156, 1)"
                    : "rgba(0,0,0,.3)"
                }`,
                background: `${
                  formData.tags[key] ? "rgba(26, 188, 156,0.2)" : ""
                }`,
                height: "100%",
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: `${formData.tags[key] ? "rgba(26, 188, 156, 1)" : ""}`,
              }}
            >
              {name}
            </Typography>
          </Grid>
        ))}

        <Grid xs={12} sm={12} md={12} lg={12}>
          <Typography>What do you want to write about the asset?</Typography>

          <TextField
            multiline
            rows={2}
            required
            fullWidth
            value={formData.apartment.description}
            onChange={(event) => {
              const value = event.target.value;
              setFormData((prevData) => ({
                ...prevData,
                apartment: {
                  ...prevData.apartment,
                  description: value,
                },
              }));
            }}
          />
        </Grid>
      </Grid>
    </>
  );
}
