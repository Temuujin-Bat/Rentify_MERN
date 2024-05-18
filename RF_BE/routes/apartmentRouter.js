import { Router } from "express";
import {
  addApartment,
  getAllApartments,
} from "../controllers/apartmentsController.js";

const router = Router();

router.route("/").get(getAllApartments).post(addApartment);

export default router;
