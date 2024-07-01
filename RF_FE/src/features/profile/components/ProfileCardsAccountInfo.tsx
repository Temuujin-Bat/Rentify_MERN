import {
  Box,
  Typography,
  Paper,
  Stack,
  Link,
  Modal,
  Container,
  InputBase,
} from "@mui/material";
import { TUserInfo } from "../../../types";
import { ArrowForwardIos } from "@mui/icons-material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ProfileCardsAccountInfo({
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
        {/* Account Info */}
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
            Account info
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
            Edit account info
          </Link>
        </Box>

        {/* Email Address */}
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
            <Typography>Email address</Typography>
            <Typography sx={{ fontWeight: "bold", fontSize: ".9em" }}>
              {userInfo?.email}
            </Typography>
          </Stack>

          <Stack>
            <ArrowForwardIos sx={{ color: "rgba(0,0,0,1)" }} />
          </Stack>
        </Link>

        {/* Phone Number */}
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
            <Typography>Phone number</Typography>
            <Typography sx={{ fontWeight: "bold", fontSize: ".9em" }}>
              {userInfo?.phone ? userInfo?.phone : "None"}
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
              Edit name
            </Typography>

            <Box sx={{ mt: "25px" }}>
              <Typography sx={{ fontSize: ".9em", color: "rgba(0,0,0,.8)" }}>
                Email address
              </Typography>

              <InputBase
                fullWidth
                sx={{
                  border: "1px solid rgba(0,0,0,.6)",
                  borderRadius: "3px",
                  fontSize: "0.8em",
                  padding: "3px 12px",
                }}
                defaultValue={userInfo?.email}
              />
            </Box>

            <Box sx={{ mt: "15px" }}>
              <Typography sx={{ fontSize: ".9em", color: "rgba(0,0,0,.8)" }}>
                Phone number
              </Typography>

              <InputBase
                fullWidth
                sx={{
                  border: "1px solid rgba(0,0,0,.6)",
                  borderRadius: "3px",
                  fontSize: "0.8em",
                  padding: "3px 12px",
                }}
                defaultValue={userInfo?.phone}
                placeholder="05*-1234567"
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
