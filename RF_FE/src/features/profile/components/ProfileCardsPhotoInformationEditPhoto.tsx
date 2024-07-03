import Grid from "@mui/material/Unstable_Grid2/Grid2";
import {
  Avatar,
  Stack,
  Typography,
  Link,
  Modal,
  Container,
  Box,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Backup, DeleteOutline } from "@mui/icons-material";
import { TUserInfo } from "../../../types";

export default function ProfileCardsPhotoInformationEditPhoto({
  userInfo,
}: {
  userInfo: TUserInfo;
}) {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleOpen = () => {
    setOpen(true);
    navigate("/profile/edit-photo");
  };

  const handleClose = () => {
    setOpen(false);
    navigate("/profile");
  };

  return (
    <>
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
          <Box
            sx={{
              height: "150px",
              width: "150px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Avatar
              sx={{
                height: "100%",
                width: "100%",
                fontSize: "90px",
                backgroundColor: "rgba(255, 99, 71, 1)",
                border: "2px solid white",
              }}
            >
              {userInfo?.firstName?.charAt(0) || ""}
              {userInfo?.lastName?.charAt(0) || ""}
            </Avatar>
          </Box>
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
              onClick={handleOpen}
            >
              Add a photo
            </Link>
          </Stack>
        </Grid>
      </Grid>

      <Modal open={open} onClose={handleClose}>
        <Container maxWidth={"xs"} sx={{ outline: "none" }}>
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
              Change photo
            </Typography>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mt: "30px",
                mb: "30px",
              }}
            >
              {userInfo?.photo ? (
                userInfo?.photo
              ) : (
                <Box
                  sx={{
                    backgroundColor: "rgba(255, 99, 71, .5)",
                    width: "280px",
                    height: "280px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Avatar
                    sx={{
                      height: "90%",
                      width: "90%",
                      fontSize: "90px",
                      backgroundColor: "rgba(255, 99, 71, 1)",
                      border: "2px solid white",
                    }}
                  >
                    {userInfo?.firstName?.charAt(0) || ""}
                    {userInfo?.lastName?.charAt(0) || ""}
                  </Avatar>
                </Box>
              )}
            </Box>

            <Link
              underline="none"
              href="#"
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                m: "10px",
                "&:hover": {
                  "& .upload-icon": {
                    color: "rgba(255, 99, 71, 1)",
                  },
                  "& .upload-typography": {
                    color: "rgba(255, 99, 71, 1)",
                  },
                },
              }}
            >
              <Backup
                className="upload-icon"
                sx={{
                  mr: "5px",
                  fontSize: ".9em",
                  color: "rgba(255, 99, 71, .8)",
                }}
              />

              <Typography
                className="upload-typography"
                sx={{ fontSize: ".9em", color: "rgba(255, 99, 71, .8)" }}
              >
                Add a photo
              </Typography>
            </Link>

            <Link
              underline="none"
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                m: "10px",
                color: "rgba(0,0,0,.4)",
                "&:hover": {
                  cursor: "default",
                },
              }}
            >
              <DeleteOutline sx={{ mr: "5px", fontSize: ".9em" }} />

              <Typography sx={{ fontSize: ".9em", color: "rgba(0,0,0,.4)" }}>
                Remove photo
              </Typography>
            </Link>

            <Stack
              sx={{ mt: "25px" }}
              direction="row"
              spacing={2}
              justifyContent="flex-end"
            >
              <Stack
                sx={{
                  padding: "5px 15px",
                  backgroundColor: "rgba(128, 128, 128, 0.4)",
                  border: "1px solid rgba(128, 128, 128, 0)",
                  borderRadius: "3px",
                  fontWeight: "bold",
                  color: "white",
                  "&:hover": {
                    cursor: "regular",
                    backgroundColor: "rgba(128, 128, 128, 0.4)",
                    border: "1px solid rgba(128, 128, 128, 0)",
                  },
                }}
                component={"button"}
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
                type="button"
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
