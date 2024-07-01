import Grid from "@mui/material/Unstable_Grid2/Grid2";
import {
  Box,
  Typography,
  Paper,
  Stack,
  Link,
  Avatar,
  Modal,
  Container,
  InputBase,
} from "@mui/material";
import { TUserInfo } from "../../../types";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ProfileCardsPhotoInformation({
  userInfo,
}: {
  userInfo: TUserInfo;
}) {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    navigate("/profile");
  };

  const handleSave = () => {
    handleClose();
  };

  return (
    <>
      <Paper>
        {/* Photo */}
        <Grid
          container
          sx={{
            padding: "15px",
            borderBottom: "1px solid rgba(0, 0, 0, .1)",
            display: "flex",
            alignItems: "center",
          }}
        >
          {/* Avatar */}
          <Grid xs={12} sm={4} md={4} lg={4}>
            <Avatar
              sx={{
                color: "white",
                backgroundColor: "rgba(255, 99, 71, 1)",
                height: "150px",
                width: "150px",
              }}
            />
          </Grid>

          {/* Information */}
          <Grid xs={12} sm={8} md={8} lg={8}>
            <Stack>
              <Typography>
                Personalize your account with a photo. Your profile photo will
                appear on your Rentify account.
              </Typography>
              <Link
                underline="none"
                sx={{
                  border: "1px solid black",
                  padding: "5px 10px",
                  width: "fit-content",
                  color: "rgba(0,0,0,1)",
                  fontWeight: "bold",
                  borderRadius: "5px",
                  fontSize: ".9em",
                  mt: "10px",
                  "&:hover": {
                    backgroundColor: "rgba(0,0,0,.1)",
                    cursor: "pointer",
                    border: "1px solid rgba(0,0,0,.5)",
                  },
                }}
              >
                Add a photo
              </Link>
            </Stack>
          </Grid>
        </Grid>

        {/* Full Name */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",

            padding: "15px",
          }}
        >
          <Stack>
            <Typography sx={{ color: "rgba(0, 0, 0, .7)" }}>
              Full Name
            </Typography>
            <Typography sx={{ fontWeight: "bold", fontSize: ".9em" }}>
              {userInfo?.firstName} {userInfo?.lastName}
            </Typography>
          </Stack>

          <Stack>
            <Link
              sx={{
                textDecoration: "none",
                color: "rgba(26, 188, 156, .8)",
                "&:hover": {
                  cursor: "pointer",
                  color: "rgba(26, 188, 156, 1)",
                  textDecoration: "underline",
                },
              }}
              onClick={handleOpen}
            >
              Edit Name
            </Link>
          </Stack>
        </Box>
      </Paper>

      <Modal open={open} onClose={handleClose}>
        <Container maxWidth={"sm"} sx={{ outline: "none" }}>
          <Box
            sx={{
              p: "20px",
              mt: "20vh",
              backgroundColor: "white",
              borderRadius: "8px",
            }}
          >
            <Typography
              sx={{ fontWeight: "bold", letterSpacing: "1px", ml: "5px" }}
            >
              Edit name
            </Typography>

            <Box sx={{ mt: "25px" }}>
              <Typography sx={{ fontSize: ".9em", color: "rgba(0,0,0,.8)" }}>
                First name
              </Typography>

              <InputBase
                fullWidth
                sx={{
                  border: "1px solid rgba(0,0,0,.6)",
                  borderRadius: "3px",
                  fontSize: "0.8em",
                  padding: "3px 12px",
                }}
                defaultValue={userInfo?.firstName}
              />
            </Box>

            <Box sx={{ mt: "15px" }}>
              <Typography sx={{ fontSize: ".9em", color: "rgba(0,0,0,.8)" }}>
                Last name
              </Typography>

              <InputBase
                fullWidth
                sx={{
                  border: "1px solid rgba(0,0,0,.6)",
                  borderRadius: "3px",
                  fontSize: "0.8em",
                  padding: "3px 12px",
                }}
                defaultValue={userInfo?.lastName}
              />
            </Box>

            <Stack
              sx={{ mt: "25px" }}
              direction="row"
              spacing={2}
              justifyContent="flex-end"
            >
              <Stack
                sx={{
                  padding: "5px 15px",
                  backgroundColor: "rgba(255, 99, 71, .9)",
                  border: "1px solid rgba(255, 99, 71, .9)",
                  borderRadius: "3px",
                  fontWeight: "bold",
                  color: "white",
                  "&:hover": {
                    cursor: "pointer",
                    backgroundColor: "rgba(255, 99, 71, 1)",
                    border: "1px solid rgba(255, 99, 71, 1)",
                  },
                }}
                component={"button"}
                onClick={handleSave}
              >
                Save
              </Stack>
              <Stack
                sx={{
                  padding: "5px 15px",
                  backgroundColor: "white",
                  border: "1px solid black",
                  borderRadius: "3px",
                  fontWeight: "bold",
                  "&:hover": {
                    cursor: "pointer",
                    backgroundColor: "rgba(0,0,0,.1)",
                  },
                }}
                component={"button"}
                onClick={handleClose}
              >
                Cancel
              </Stack>
            </Stack>
          </Box>
        </Container>
      </Modal>
    </>
  );
}
