import { Router } from "express";
import {
  addApartment,
  getAllApartments,
  getSingleApartment,
} from "../controllers/apartmentsController.js";
import { authUser } from "../middlewares/authMiddleware.js";

const router = Router();

router.route("/").get(getAllApartments).post(authUser, addApartment);
router.route("/:id").get(authUser, getSingleApartment);

export default router;
