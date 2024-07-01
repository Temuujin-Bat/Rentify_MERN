import {
  Box,
  Typography,
  Paper,
  Stack,
  Link,
  Modal,
  Container,
  InputBase,
  Tooltip,
} from "@mui/material";
import { ArrowForwardIos } from "@mui/icons-material";
import { TUserInfo } from "../../../types";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ProfileCardsInfo({
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
        {/* Profile Info */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
            alignItems: "center",
            borderBottom: "1px solid rgba(0, 0, 0, .1)",
            padding: "10px",
          }}
        >
          <Typography
            sx={{ fontWeight: "bold", color: "rgba(255, 99, 71, 1)" }}
          >
            Profile info
          </Typography>
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
            Edit profile info
          </Link>
        </Box>

        {/* Date Of Birth */}
        <Link
          underline="none"
          sx={{
            padding: "15px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: "1px solid rgba(0, 0, 0, .1)",
            "&:hover": {
              cursor: "pointer",
              backgroundColor: "rgba(0, 0, 0, .1)",
            },
          }}
        >
          <Stack>
            <Typography>Date of birth</Typography>
            <Typography sx={{ fontWeight: "bold", fontSize: ".9em" }}>
              {userInfo?.birthday ? userInfo?.birthday : "None"}
            </Typography>
          </Stack>

          <Stack>
            <ArrowForwardIos sx={{ color: "rgba(0,0,0,1)" }} />
          </Stack>
        </Link>

        {/* Country Or Region */}
        <Link
          underline="none"
          sx={{
            padding: "15px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            "&:hover": {
              cursor: "pointer",
              backgroundColor: "rgba(0, 0, 0, .1)",
            },
          }}
        >
          <Stack>
            <Typography>Country or region</Typography>
            <Typography sx={{ fontWeight: "bold", fontSize: ".9em" }}>
              Israel
            </Typography>
          </Stack>

          <Stack>
            <ArrowForwardIos sx={{ color: "rgba(0,0,0,1)" }} />
          </Stack>
        </Link>
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
              Edit profile info
            </Typography>
            <Box sx={{ mt: "25px" }}>
              <Typography sx={{ fontSize: ".9em", color: "rgba(0,0,0,.8)" }}>
                Date of birth
              </Typography>
              <Box display="flex" gap={2}>
                <InputBase
                  placeholder="DD"
                  inputProps={{ maxLength: 2 }}
                  sx={{
                    border: "1px solid rgba(0,0,0,.6)",
                    borderRadius: "3px",
                    fontSize: "0.8em",
                    padding: "3px 12px",
                  }}
                  onInput={(e) =>
                    (e.target.value = e.target.value.replace(/\D/g, ""))
                  }
                />
                <InputBase
                  placeholder="MM"
                  inputProps={{ maxLength: 2 }}
                  sx={{
                    border: "1px solid rgba(0,0,0,.6)",
                    borderRadius: "3px",
                    fontSize: "0.8em",
                    padding: "3px 12px",
                  }}
                  onInput={(e) =>
                    (e.target.value = e.target.value.replace(/\D/g, ""))
                  }
                />
                <InputBase
                  placeholder="YYYY"
                  inputProps={{ maxLength: 4 }}
                  sx={{
                    border: "1px solid rgba(0,0,0,.6)",
                    borderRadius: "3px",
                    fontSize: "0.8em",
                    padding: "3px 12px",
                  }}
                  onInput={(e) =>
                    (e.target.value = e.target.value.replace(/\D/g, ""))
                  }
                />
              </Box>
            </Box>

            <Stack sx={{ mt: "15px" }}>
              <Typography sx={{ fontSize: ".9em", color: "rgba(0,0,0,.8)" }}>
                Country or region
              </Typography>

              <Tooltip
                title="Sorry, not available outside of Israel"
                placement="bottom-start"
              >
                <Box
                  component="input"
                  sx={{
                    height: "2.5em",
                    padding: "10px",
                    cursor: "help",
                  }}
                  defaultValue="Israel"
                  disabled
                />
              </Tooltip>
            </Stack>

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
