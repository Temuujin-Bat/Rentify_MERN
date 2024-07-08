const { Router } = require("express");
const {
  addApartment,
  getAllApartments,
  getSingleApartment,
} = require("../controllers/apartmentsController");
const { authUser } = require("../middlewares/authMiddleware");

const router = Router();

router.route("/").get(getAllApartments).post(authUser, addApartment);
router.route("/:id").get(getSingleApartment);

export default router;
