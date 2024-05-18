import jwt from "jsonwebtoken";

export const createJWT = ({ userID, firstName }) => {
  const token = jwt.sign({ userID, firstName }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });

  return token;
};
