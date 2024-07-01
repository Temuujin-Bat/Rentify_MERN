import { Router } from "express";
import {
  deleteApartment,
  editApartment,
  editPassword,
  getProfile,
  userApartments,
  userSingleApartment,
} from "../controllers/userController.js";
import { authUser } from "../middlewares/authMiddleware.js";

const router = Router();

router.get("/profile", authUser, getProfile);
router.put("/profile/edit-name", authUser, getProfile);
router.put("/password-change", authUser, editPassword);

router.get("/apartments", authUser, userApartments);
router
  .get("/apartment/:id", authUser, userSingleApartment)
  .delete("/apartment/:id", authUser, deleteApartment)
  .put("/apartment/:id", authUser, editApartment);

export default router;
