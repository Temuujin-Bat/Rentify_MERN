import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Box, Button, Container, Link, Modal, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import {
  useUserDeleteApartmentAPI,
  useUserSingleApartmentAPI,
} from "../../hooks/useApartments";
import { getApartmentsData } from "../../store/apartments/selectors";
import img from "../../assets/homePage/homePageHero.webp";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";

export default function userSingleApartment() {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  const navigate = useNavigate();

  const { id } = useParams();

  useUserSingleApartmentAPI(id);

  const { userSingleApartment } = getApartmentsData();

  const { mutate: deleteApartment } = useUserDeleteApartmentAPI(id);

  return (
    <Container maxWidth={"sm"}>
      <Grid container>
        <Grid xs={12} sm={12} md={12} lg={12}>
          <Box
            component={"img"}
            src={img}
            sx={{ width: "100%", height: "200px" }}
          />

          <Box>
            <Typography>{userSingleApartment?.price} $</Typography>
            <Typography>
              {userSingleApartment?.address?.street}{" "}
              {userSingleApartment?.address?.buildingNumber},{" "}
              {userSingleApartment?.address?.city}
            </Typography>
            <Typography>
              {userSingleApartment?.apartment?.rooms} rooms · floor{" "}
              {userSingleApartment?.apartment?.floor} ·{" "}
              {userSingleApartment?.apartment?.size}
            </Typography>
          </Box>

          <Box sx={{ display: "flex" }}>
            <Button
              sx={{ display: "flex", flexDirection: "column" }}
              onClick={() =>
                navigate(`/user/apartment/edit/${userSingleApartment._id}`)
              }
            >
              <EditIcon
                sx={{
                  border: "2px solid rgba(50, 205, 50, 1)",
                  borderRadius: "100px",
                  fontSize: "2.5em",
                  padding: "10px",
                  color: "rgba(255, 99, 71, 1)",
                }}
              />
              <Typography sx={{ fontWeight: "bold" }}>Edit</Typography>
            </Button>

            <Button
              onClick={handleOpen}
              sx={{ display: "flex", flexDirection: "column" }}
            >
              <DeleteIcon
                sx={{
                  border: "2px solid rgba(50, 205, 50, 1)",
                  borderRadius: "100px",
                  fontSize: "2.5em",
                  padding: "10px",
                  color: "rgba(255, 99, 71, 1)",
                }}
              />
              <Typography sx={{ fontWeight: "bold" }}>Delete</Typography>
            </Button>
            <Modal open={isOpen} onClose={handleClose}>
              <Box
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: 400,
                  bgcolor: "background.paper",
                  boxShadow: 10,
                  padding: "30px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography>Deleting The AD</Typography>
                <Typography>This will delete the AD permanently</Typography>
                <Box>
                  <Button
                    sx={{
                      borderRadius: "20px",
                      color: "rgba(255, 99, 71, 1)",
                      fontWeight: "bold",
                      border: "2px solid rgba(50, 205, 50, 1)",
                      fontSize: ".6em",
                    }}
                    onClick={() => deleteApartment(userSingleApartment?._id)}
                  >
                    Yes
                  </Button>
                  <Button
                    sx={{
                      borderRadius: "20px",
                      color: "rgba(255, 99, 71, 1)",
                      fontWeight: "bold",
                      border: "2px solid rgba(0,0,0,.3)",
                      fontSize: ".6em",
                    }}
                    onClick={handleClose}
                  >
                    No
                  </Button>
                </Box>
              </Box>
            </Modal>
          </Box>
        </Grid>

        <Grid xs={12} sm={12} md={12} lg={12}>
          <Link
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            underline="none"
            href={`/apartments/${userSingleApartment?._id}`}
          >
            <Button
              sx={{
                borderRadius: "20px",
                color: "rgba(255, 99, 71, 1)",
                fontWeight: "bold",
                border: "2px solid rgba(50, 205, 50, 1)",
                fontSize: ".6em",
                "&:hover": {
                  border: "2px solid rgba(50, 205, 50, .5)",
                  color: "rgba(255, 99, 71, .5)",
                },
              }}
            >
              Watch Ad
            </Button>
          </Link>
        </Grid>
      </Grid>
    </Container>
  );
}
