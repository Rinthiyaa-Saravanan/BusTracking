const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    // ✅ Extract token from 'Authorization' header (format: "Bearer TOKEN_HERE")
    const token = req.header("Authorization")?.split(" ")[1];

    if (!token) {
      return res.status(401).json({ msg: "No token, authorization denied" });
    }

    // ✅ Verify JWT token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // ✅ Add user data to request object

    next(); // ✅ Continue to the next middleware/route
  } catch (error) {
    console.error("❌ JWT Verification Error:", error.message);
    return res.status(401).json({ msg: "Invalid token" });
  }
};
