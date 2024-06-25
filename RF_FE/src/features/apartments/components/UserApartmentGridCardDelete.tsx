import { Delete } from "@mui/icons-material";
import { Button, Typography, Modal, Box } from "@mui/material";
import { useState } from "react";

import {
  useUserDeleteApartmentAPI,
  useUserSingleApartmentAPI,
} from "../../../hooks/useApartments";
import { TUserApartments } from "../../../types";

export default function UserApartmentGridCardDelete({
  apartment,
}: {
  apartment: TUserApartments;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  if (apartment?._id) {
    console.log(apartment?._id);

    useUserSingleApartmentAPI(apartment?._id);
  }

  const { mutate } = useUserDeleteApartmentAPI(apartment?._id || "");

  return (
    <Button
      onClick={handleOpen}
      sx={{
        border: "2px solid rgba(50, 205, 50, 1)",
        borderRadius: "100px",
        height: "70px",
        width: "70px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        "&:hover": {
          border: "2px solid rgba(50, 205, 50, .5)",
          boxShadow: "1",
        },
      }}
    >
      <Delete
        sx={{
          color: "rgba(255, 99, 71, 1)",
        }}
      />
      <Typography sx={{ fontSize: ".8em", fontWeight: "bold" }}>
        Delete
      </Typography>

      <Modal open={isOpen} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            boxShadow: 10,
            padding: "30px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography>Deleting The AD</Typography>
          <Typography>This will delete the AD permanently</Typography>
          <Box>
            <Button
              sx={{
                borderRadius: "20px",
                color: "rgba(255, 99, 71, 1)",
                fontWeight: "bold",
                border: "2px solid rgba(50, 205, 50, 1)",
                fontSize: ".6em",
              }}
              onClick={() => mutate(apartment?._id)}
            >
              Yes
            </Button>
            <Button
              sx={{
                borderRadius: "20px",
                color: "rgba(255, 99, 71, 1)",
                fontWeight: "bold",
                border: "2px solid rgba(0,0,0,.3)",
                fontSize: ".6em",
              }}
              onClick={handleClose}
            >
              No
            </Button>
          </Box>
        </Box>
      </Modal>
    </Button>
  );
}
