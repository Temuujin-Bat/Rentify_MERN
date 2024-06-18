import { Paper, TextField, Typography } from "@mui/material";
import { LoadingButton } from "@mui/lab";

import emailjs from "@emailjs/browser";

import React, { useState } from "react";

export default function SingleApartmentAgentForm() {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [userMessage, setUserMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [isSubmitted, setIsSubmitted] = useState(false);
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const templateParams = {
      from_name: userName,
      from_email: userEmail,
      from_phone: userPhone,
      message: userMessage,
    };

    emailjs
      .send(
        "service_1uti7lr",
        "Template_ID",
        templateParams,
        "84rQft22pOHqxwwcG"
      )
      .then(
        () => {
          setUserName("");
          setUserEmail("");
          setUserPhone("");
          setUserMessage("");

          setIsSubmitted(true);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <Paper>
      {isSubmitted ? (
        <Paper>
          <Typography
            sx={{
              fontWeight: "bold",
              color: "rgba(255, 99, 71, 1)",
              textAlign: "center",
              padding: "20px",
            }}
          >
            Thank You! <br />
            Your form has been sent. <br />
            Our agent will contact you in 3-5 business days.
          </Typography>
        </Paper>
      ) : (
        <Paper
          sx={{
            display: "flex",
            flexDirection: "column",
            padding: "20px",
          }}
          component={"form"}
          onSubmit={onSubmit}
        >
          <Typography
            sx={{
              color: "rgba(255, 99, 71, 1)",
              fontWeight: "bold",
              fontSize: "1.2em",
              mb: "10px",
            }}
          >
            Contact Agent:
          </Typography>
          <TextField
            sx={{
              marginBottom: "10px",
            }}
            required
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Name*"
            type="text"
          />
          <TextField
            sx={{
              marginBottom: "10px",
            }}
            required
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
            placeholder="Email*"
            type="email"
          />
          <TextField
            sx={{
              marginBottom: "10px",
            }}
            required
            value={userPhone}
            onChange={(e) => setUserPhone(e.target.value)}
            placeholder="Phone Number*"
            type="tel"
          />
          <TextField
            sx={{
              marginBottom: "10px",
            }}
            required
            multiline
            rows={3}
            placeholder="Please contact me regarding: `Listing Number: ABCDE12345`"
            value={userMessage}
            onChange={(e) => setUserMessage(e.target.value)}
            type="text"
          />
          <LoadingButton
            loading={isSubmitting}
            type="submit"
            sx={{
              width: "100%",
              height: "40px",
              background: "rgba(255, 99, 71, .8)",
              color: "white",
              "&:hover": {
                background: "rgba(255, 99, 71, 1)",
              },
              "& .MuiLoadingButton-loadingIndicator": {
                color: "white",
              },
            }}
          >
            Send Message
          </LoadingButton>
        </Paper>
      )}
    </Paper>
  );
}
