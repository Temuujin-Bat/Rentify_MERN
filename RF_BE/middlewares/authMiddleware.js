const { verifyJWT } = require("../utils/tokenUtils");

const authUser = (req, res, next) => {
  try {
    const { token } = req.cookies;

    if (!token) {
      return res.status(401).json({ msg: "Authentication invalid middleware" });
    }

    const { userID } = verifyJWT(token);

    req.user = { userID };

    next();
  } catch (error) {
    return res.status(403).json({ msg: "Authentication invalid" });
  }
};

module.exports = authUser;
