import { verifyJWT } from "../utils/tokenUtils.js";

export const authUser = (req, res, next) => {
  try {
    const { token } = req.cookies;

    if (!token) {
      return res.status(401).json({ msg: "Authentication invalid middleware" });
    }

    const { firstName } = verifyJWT(token);

    req.user = { firstName };

    next();
  } catch (error) {
    return res.status(403).json({ msg: "Authentication invalid" });
  }
};
