import { FormEvent, useEffect, useState } from "react";
import { useEditNameAPI } from "../../../hooks/useUser";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Stack,
  Typography,
  Link,
  InputBase,
  Modal,
  Container,
} from "@mui/material";
import { TUserInfo } from "../../../types";

export default function ProfileCardsPhotoInformationEditName({
  userInfo,
}: {
  userInfo: TUserInfo;
}) {
  const { mutate } = useEditNameAPI();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [initialFirstName, setInitialFirstName] = useState("");
  const [initialLastName, setInitialLastName] = useState("");
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (userInfo) {
      setFirstName(userInfo.firstName || "");
      setLastName(userInfo.lastName || "");
      setInitialFirstName(userInfo.firstName || "");
      setInitialLastName(userInfo.lastName || "");
    }
  }, [userInfo]);

  const handleOpen = () => {
    setOpen(true);
    navigate("/profile/edit-name");
  };

  const handleClose = () => {
    setOpen(false);
    navigate("/profile");
  };

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    mutate({ firstName, lastName });

    setTimeout(() => {
      setOpen(false);
    }, 1000);
  };

  const isButtonDisabled =
    firstName === initialFirstName && lastName === initialLastName;
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "15px",
        }}
      >
        <Stack>
          <Typography sx={{ color: "rgba(0, 0, 0, .7)" }}>Full Name</Typography>
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
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
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
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
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
