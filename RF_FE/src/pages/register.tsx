import {
  Avatar,
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Link,
  Stack,
} from "@mui/material";
import { LockOutlined } from "@mui/icons-material";
import React, { useState } from "react";
import { useRegisterAPI } from "../hooks/useRegister";

export default function register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { mutate } = useRegisterAPI();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    mutate({ firstName, lastName, email, password });
  };

  return (
    <Container maxWidth={"xs"}>
      <Box
        sx={{
          marginTop: { xs: "20px", sm: "60px", md: "60px", lg: "80px" },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Avatar sx={{ bgcolor: "rgba(255, 99, 71, 1)", m: "10px" }}>
          <LockOutlined />
        </Avatar>

        <Typography sx={{ fontWeight: "bold", fontSize: "1.2em" }}>
          Sign up
        </Typography>

        <Box
          component={"form"}
          onSubmit={handleSubmit}
          sx={{ mt: "10px", width: "100%" }}
        >
          <Stack>
            <Typography sx={{ ml: "5px" }}>First Name*</Typography>
            <TextField
              required
              fullWidth
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="First Name"
            />
          </Stack>
          <Stack sx={{ mt: "10px" }}>
            <Typography sx={{ ml: "5px" }}>Last Name*</Typography>
            <TextField
              required
              fullWidth
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Last Name"
            />
          </Stack>
          <Stack sx={{ mt: "10px" }}>
            <Typography sx={{ ml: "5px" }}>Email*</Typography>
            <TextField
              required
              fullWidth
              type="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="yourmail@email.com"
            />
          </Stack>
          <Stack sx={{ mt: "10px" }}>
            <Typography sx={{ ml: "5px" }}>Password*</Typography>
            <TextField
              required
              fullWidth
              value={password}
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="********"
            />
          </Stack>

          <Button
            type="submit"
            fullWidth
            sx={{
              backgroundColor: "rgba(255, 99, 71, 1)",
              color: "white",
              fontWeight: "bold",
              my: "20px",
              "&:hover": { backgroundColor: "rgba(255, 99, 71, .5)" },
            }}
          >
            Sign Up
          </Button>
        </Box>
      </Box>

      <Link
        underline="none"
        sx={{ textAlign: "left", color: "black", display: "flex" }}
        href="/login"
      >
        <Typography>Already have an account?</Typography>
        <Typography
          sx={{ ml: "5px", color: "rgba(26, 188, 156, 1)", fontWeight: "bold" }}
        >
          Sign in
        </Typography>
      </Link>

      <Copyright sx={{ mt: "40px" }} />
    </Container>
  );
}

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
