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

import { FormEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEditAccountAPI } from "../../../hooks/useUser";

export default function ProfileCardsAccountInfo({
  userInfo,
}: {
  userInfo: TUserInfo;
}) {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [initialEmail, setInitialEmail] = useState("");
  const [initialPhone, setInitialPhone] = useState("");
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { mutate } = useEditAccountAPI();

  useEffect(() => {
    if (userInfo) {
      setEmail(userInfo.email || "");
      setPhone(userInfo.phone || "");
      setInitialEmail(userInfo.email || "");
      setInitialPhone(userInfo.phone || "");
    }
  }, [userInfo]);

  const handleOpen = () => {
    setOpen(true);
    navigate("/profile/edit-account");
  };

  const handleClose = () => {
    setOpen(false);
    navigate("/profile");
  };

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    mutate({ email, phone });

    setTimeout(() => {
      setOpen(false);
    }, 1000);
  };

  const isButtonDisabled = email === initialEmail && phone === initialPhone;

  return (
    <>
      <Paper elevation={4}>
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
            borderBottom: "1px solid rgba(0, 0, 0, .1)",
          }}
        >
          <Stack>
            <Typography>Email address</Typography>
            <Typography sx={{ fontWeight: "bold", fontSize: ".9em" }}>
              {userInfo?.email}
            </Typography>
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
        </Link>
      </Paper>

      <Modal open={open} onClose={handleClose}>
        <Container
          maxWidth={"sm"}
          sx={{ outline: "none" }}
          component={"form"}
          onSubmit={submitHandler}
        >
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
              Edit Account Info
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                placeholder="05*-1234567"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                inputProps={{
                  maxLength: 10,
                }}
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
                  backgroundColor: isButtonDisabled
                    ? "rgba(128, 128, 128, 0.4)"
                    : "rgba(255, 99, 71, .9)",
                  border: isButtonDisabled
                    ? "1px solid rgba(128, 128, 128, 0)"
                    : "1px solid rgba(255, 99, 71, .9)",
                  borderRadius: "3px",
                  fontWeight: "bold",
                  color: "white",
                  "&:hover": {
                    cursor: isButtonDisabled ? "regular" : "pointer",
                    backgroundColor: isButtonDisabled
                      ? "rgba(128, 128, 128, 0.4)"
                      : "rgba(255, 99, 71, 1)",
                    border: isButtonDisabled
                      ? "1px solid rgba(128, 128, 128, 0)"
                      : "1px solid rgba(255, 99, 71, 1)",
                  },
                }}
                component={"button"}
                type="submit"
                disabled={isButtonDisabled}
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
