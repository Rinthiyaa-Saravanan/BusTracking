const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
require("dotenv").config();

const authRoutes = require("./routes/auth");
const profileRoutes = require("./routes/profileRoutes");
const busRoutes = require("./routes/busRoutes");
const reminderRoutes = require("./routes/reminderRoutes");

const app = express();

// ✅ Secure HTTP Headers
app.use(helmet());

// ✅ Logging Requests (for debugging)
app.use(morgan("dev"));

// ✅ Middleware
app.use(express.json());
app.use(cors());

// ✅ Connect to Database
connectDB().catch((err) => {
  console.error("❌ Database connection failed:", err.message);
  process.exit(1); // Stop the server if DB fails
});

// ✅ API Routes
app.use("/api/auth", authRoutes);
app.use("/api/profile", profileRoutes);
app.use("/api/bus", busRoutes);
app.use("/api/reminders", reminderRoutes);

// ✅ Global Error Handling
app.use((err, req, res, next) => {
  console.error("🔥 Server Error:", err);
  res.status(500).json({ msg: "Internal Server Error" });
});

// ✅ Handle Uncaught Errors
process.on("uncaughtException", (err) => {
  console.error("❌ Uncaught Exception:", err);
  process.exit(1);
});

process.on("unhandledRejection", (err) => {
  console.error("❌ Unhandled Rejection:", err);
  process.exit(1);
});

// ✅ Start Server
const PORT = process.env.PORT || 5002;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
