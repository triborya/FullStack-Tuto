const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const verifyToken = (req, res, next) => {
  tokenHeader = req.headers.authorization;
  if (!tokenHeader) {
    return res
      .status(401)
      .json({ message: "accès non authoriser(token manquant)" });
  }
  const token = tokenHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    req.user = decoded.user;
    next();
  } catch (error) {
    console.error("JWT verification failed", error);
    res.status(401).json({ message: "token invalid ! " });
  }
};

module.exports = verifyToken;
