import { Delete } from "@mui/icons-material";
import { Button, Typography, Modal, Box, Link, Stack } from "@mui/material";
import { useState } from "react";

import { useUserDeleteApartmentAPI } from "../../../hooks/useApartments";
import { TUserApartments } from "../../../types";
import img from "../../../assets/userApartments/UserApartmentDelete.jpg";

export default function UserApartmentGridCardDelete({
  apartment,
}: {
  apartment: TUserApartments;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  const { mutate: deleteApartment } = useUserDeleteApartmentAPI(
    apartment?._id || ""
  );

  const handleDelete = () => {
    deleteApartment();
    handleClose();
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Link
          sx={{
            border: "2px solid rgba(50, 205, 50, 1)",
            borderRadius: "100px",
            height: "45px",
            width: "45px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            "&:hover": {
              border: "2px solid rgba(50, 205, 50, .5)",
              boxShadow: "1",
              cursor: "pointer",
            },
          }}
          underline="none"
          onClick={handleOpen}
        >
          <Delete
            sx={{
              color: "rgba(255, 99, 71, 1)",
            }}
          />
        </Link>
        <Typography
          sx={{
            fontSize: ".8em",
            fontWeight: "bold",
          }}
        >
          Delete
        </Typography>
      </Box>

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
          <Stack sx={{ width: "100px" }}>
            <Stack component={"img"} src={img} sx={{ objectFit: "cover" }} />
          </Stack>

          <Typography sx={{ fontWeight: "bold", textAlign: "center" }}>
            This will delete the apartment permanently!!!
          </Typography>
          <Box sx={{ mt: "20px" }}>
            <Button
              sx={{
                borderRadius: "100px",
                color: "rgba(255, 99, 71, 1)",
                fontWeight: "bold",
                border: "2px solid rgba(255, 99, 71, 1)",
                fontSize: ".6em",
                mr: "5px",
              }}
              onClick={handleDelete}
            >
              Yes
            </Button>
            <Button
              sx={{
                borderRadius: "20px",
                color: "rgba(50, 205, 50, 1)",
                fontWeight: "bold",
                border: "2px solid rgba(50, 205, 50, 1)",
                fontSize: ".6em",
              }}
              onClick={handleClose}
            >
              No
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
}
