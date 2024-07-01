import { Container, InputBase, Link, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useEditPasswordAPI } from "../hooks/useUser";
import { useState } from "react";

export default function passwordChange() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const navigate = useNavigate();

  const { mutate } = useEditPasswordAPI();

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    mutate({ currentPassword, newPassword });
  };

  return (
    <Container
      maxWidth={"xs"}
      sx={{ m: "20px 0px 0px 40px" }}
      component={"form"}
      onSubmit={submitHandler}
    >
      {/* Title */}
      <Stack>
        <Typography
          sx={{
            fontSize: "1.5em",
            fontFamily: "sans-serif",
            fontWeight: "bold",
            color: "rgba(255, 99, 71, 1)",
          }}
        >
          Change your password
        </Typography>
        <Typography sx={{ fontSize: "0.9em", mt: "10px" }}>
          A strong password helps prevent unauthorized access to your email
          account.
        </Typography>
      </Stack>

      {/* Current Password */}
      <Stack sx={{ mt: "25px" }}>
        <Typography
          sx={{ fontSize: ".9em", color: "rgba(0,0,0,.8)", fontWeight: "bold" }}
        >
          Current password
        </Typography>
        <InputBase
          fullWidth
          sx={{
            border: "1px solid rgba(0,0,0,.6)",
            borderRadius: "3px",
            fontSize: "0.8em",
            padding: "3px 12px",
          }}
          placeholder="Current password"
          type="password"
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
        />
        <Link
          underline="none"
          sx={{
            fontSize: ".9em",
            "&:hover": {
              textDecoration: "underline",
              cursor: "pointer",
            },
          }}
        >
          Forgot your password?
        </Link>
      </Stack>

      {/* New Password */}
      <Stack sx={{ mt: "15px" }}>
        <Typography
          sx={{ fontSize: ".9em", color: "rgba(0,0,0,.8)", fontWeight: "bold" }}
        >
          New password
        </Typography>
        <InputBase
          fullWidth
          sx={{
            border: "1px solid rgba(0,0,0,.6)",
            borderRadius: "3px",
            fontSize: "0.8em",
            padding: "3px 12px",
          }}
          type="password"
          placeholder="New password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <Typography sx={{ fontSize: ".8em", color: "rgba(0,0,0,.8)" }}>
          8-characters minimum
        </Typography>
      </Stack>

      {/* Buttons */}
      <Stack
        sx={{ mt: "25px" }}
        direction="row"
        spacing={2}
        justifyContent="flex-start"
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
          type="submit"
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
          onClick={() => navigate("/profile")}
        >
          Cancel
        </Stack>
      </Stack>
    </Container>
  );
}
