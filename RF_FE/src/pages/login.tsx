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
import { useState } from "react";
import { useLoginAPI } from "../hooks/useLogin";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { mutate } = useLoginAPI();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    mutate({ email, password });
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
        <Avatar sx={{ bgcolor: "rgba(26, 188, 156, 1)", m: "10px" }}>
          <LockOutlined />
        </Avatar>

        <Typography sx={{ fontWeight: "bold", fontSize: "1.2em" }}>
          Sign in
        </Typography>

        <Box
          component={"form"}
          onSubmit={handleSubmit}
          sx={{ mt: "10px", width: "100%" }}
        >
          <Stack>
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
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="********"
              sx={{ mb: "10px" }}
            />
          </Stack>

          <Link
            href="#"
            underline="none"
            sx={{ fontWeight: "bold", color: "rgba(26, 188, 156, 1)" }}
          >
            Forgot password?
          </Link>

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
            Sign In
          </Button>
        </Box>
      </Box>

      <Link
        href="/register"
        underline="none"
        sx={{ textAlign: "left", color: "black", display: "flex" }}
      >
        <Typography>Don't have an account?</Typography>
        <Typography
          sx={{ ml: "5px", color: "rgba(26, 188, 156, 1)", fontWeight: "bold" }}
        >
          Sign Up
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
