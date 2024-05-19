import { Router } from "express";
import {
  addApartment,
  getAllApartments,
} from "../controllers/apartmentsController.js";
import { authUser } from "../middlewares/authMiddleware.js";

const router = Router();

router.route("/").get(getAllApartments).post(authUser, addApartment);

export default router;
