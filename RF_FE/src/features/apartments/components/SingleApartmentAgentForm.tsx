import emailjs from "@emailjs/browser";
import { Paper, TextField, Typography } from "@mui/material";
import { useState } from "react";

export default function SingleApartmentAgentForm() {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [userMessage, setUserMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [isSubmitted, setIsSubmitted] = useState(false);
  const onSubmit = (e) => {
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
              fontSize: "2rem",
              textAlign: "center",
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
            padding: "10px",
          }}
          component={"form"}
          onSubmit={onSubmit}
        >
          <Typography
            sx={{
              color: "rgba(255, 99, 71, 1)",
              fontWeight: "bold",
            }}
          >
            Contact Agent:
          </Typography>
          <TextField
            sx={{
              marginBottom: "10px",
              "& fieldset": {
                borderColor: "rgba(255, 99, 71, 1)",
              },
            }}
            required
            type="text"
            label="Name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <TextField
            sx={{
              marginBottom: "10px",
              "& fieldset": {
                borderColor: "rgba(255, 99, 71, 1)",
              },
            }}
            required
            type="email"
            label="Email Address"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
          />
          <TextField
            sx={{
              marginBottom: "10px",
              "& fieldset": {
                borderColor: "rgba(255, 99, 71, 1)",
              },
            }}
            required
            type="text"
            label="Mobile Number"
            value={userPhone}
            onChange={(e) => setUserPhone(e.target.value)}
          />
          <TextField
            sx={{
              marginBottom: "10px",
              "& fieldset": {
                borderColor: "rgba(255, 99, 71, 1)",
              },
            }}
            required
            multiline
            rows={3}
            label="Message"
            placeholder="Please contact me regarding: `Listing Number SPR19`"
            variant="outlined"
            value={userMessage}
            onChange={(e) => setUserMessage(e.target.value)}
          />
          {/* <LoadingButton
            loading={isSubmitting}
            type="submit"
            sx={{
              width: "100%",
              height: "3.8vh",
              background: "rgba(255, 99, 71, .8)",
              color: "#fff",
              "&:hover": {
                background: "rgba(255, 99, 71, 1)",
              },
              "& .MuiLoadingButton-loadingIndicator": {
                color: "white",
              },
            }}
          >
            Send Message
          </LoadingButton> */}
        </Paper>
      )}
    </Paper>
  );
}
