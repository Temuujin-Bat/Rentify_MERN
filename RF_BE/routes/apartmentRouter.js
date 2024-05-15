import { Router } from "express";
import { getAllApartments } from "../controllers/apartmentsController.js";

const router = Router();

router.route("/").get(getAllApartments);

export default router;
