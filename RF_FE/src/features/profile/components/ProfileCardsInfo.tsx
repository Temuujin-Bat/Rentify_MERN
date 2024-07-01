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

import { TUserInfo } from "../../../types";
import { FormEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEditProfileAPI } from "../../../hooks/useUser";

export default function ProfileCardsInfo({
  userInfo,
}: {
  userInfo: TUserInfo;
}) {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [initialDay, setInitialDay] = useState("");
  const [initialMonth, setInitialMonth] = useState("");
  const [initialYear, setInitialYear] = useState("");
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { mutate } = useEditProfileAPI();

  useEffect(() => {
    if (userInfo) {
      setDay(
        userInfo.birthday
          ? new Date(userInfo.birthday).getDate().toString()
          : ""
      );
      setMonth(
        userInfo.birthday
          ? (new Date(userInfo.birthday).getMonth() + 1).toString()
          : ""
      );
      setYear(
        userInfo.birthday
          ? new Date(userInfo.birthday).getFullYear().toString()
          : ""
      );
      setInitialDay(
        userInfo.birthday
          ? new Date(userInfo.birthday).getDate().toString()
          : ""
      );
      setInitialMonth(
        userInfo.birthday
          ? (new Date(userInfo.birthday).getMonth() + 1).toString()
          : ""
      );
      setInitialYear(
        userInfo.birthday
          ? new Date(userInfo.birthday).getFullYear().toString()
          : ""
      );
    }
  }, [userInfo]);

  const handleOpen = () => {
    setOpen(true);
    navigate("/profile/edit-profile");
  };

  const handleClose = () => {
    setOpen(false);
    navigate("/profile");
  };

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    mutate({ day, month, year });

    setTimeout(() => {
      setOpen(false);
    }, 1000);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(undefined, {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const isButtonDisabled =
    day === initialDay && month === initialMonth && year === initialYear;

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
              {userInfo?.birthday ? formatDate(userInfo.birthday) : "None"}
            </Typography>
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
                  value={day}
                  onChange={(e) => setDay(e.target.value)}
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
                  value={month}
                  onChange={(e) => setMonth(e.target.value)}
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
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
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
                type="button"
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
