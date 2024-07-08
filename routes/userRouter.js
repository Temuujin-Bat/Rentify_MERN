import { Router } from "express";
import {
  editAccount,
  editApartment,
  editName,
  editPassword,
  editProfile,
  getProfile,
  deleteApartment,
  userApartments,
  userSingleApartment,
} from "../controllers/userController.js";
import { authUser } from "../middlewares/authMiddleware.js";

const router = Router();

router.get("/profile", authUser, getProfile);
router.put("/profile/edit-photo", authUser);
router.put("/profile/edit-name", authUser, editName);
router.put("/profile/edit-profile", authUser, editProfile);
router.put("/profile/edit-account", authUser, editAccount);
router.put("/password-change", authUser, editPassword);

router.get("/apartments", authUser, userApartments);
router
  .get("/apartment/:id", authUser, userSingleApartment)
  .delete("/apartment/:id", authUser, deleteApartment)
  .put("/apartment/:id", authUser, editApartment);

export default router;
