import jwt from "jsonwebtoken";
import { jwtSecret } from "../Controllers/Authentication/jwtConfig.js";

const authenticateToken = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({ message: "Access Denied" });
  }

  try {
    const verified = jwt.verify(token, jwtSecret);
    req.user = verified;
    next();
  } catch (error) {
    res.status(400).json({ message: "Invalid Token" });
  }
};

export default authenticateToken;
