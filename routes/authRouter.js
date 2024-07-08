const { Router } = require("express");
const { login, register } = require("../controllers/authController");

router.post("/register", register);
router.post("/login", login);

export default router;
