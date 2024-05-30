import { Router } from "express";
import {
  deleteApartment,
  editApartment,
  editUserInfo,
  getUserInfo,
  userApartments,
  userSingleApartment,
} from "../controllers/userController.js";
import { authUser } from "../middlewares/authMiddleware.js";

const router = Router();

router.get("/info", authUser, getUserInfo);
router.put("/edit", authUser, editUserInfo);

router.get("/apartments", authUser, userApartments);
router
  .get("/apartment/:id", authUser, userSingleApartment)
  .delete("/apartment/:id", authUser, deleteApartment)
  .put("/apartment/:id", authUser, editApartment);

export default router;
