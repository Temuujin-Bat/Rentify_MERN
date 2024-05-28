import { Router } from "express";
import {
  deleteApartment,
  editApartment,
  userApartments,
  userSingleApartment,
} from "../controllers/userController.js";
import { authUser } from "../middlewares/authMiddleware.js";

const router = Router();

router.get("/apartments", authUser, userApartments);
router
  .get("/apartment/:id", authUser, userSingleApartment)
  .delete("/apartment/:id", authUser, deleteApartment)
  .put("/apartment/:id", authUser, editApartment);

export default router;
