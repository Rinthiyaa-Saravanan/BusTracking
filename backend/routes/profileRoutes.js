const express = require("express");
const bcrypt = require("bcryptjs");
const User = require("../models/User");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// ✅ GET User Profile (Fetch user details)
router.get("/", authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password"); // ✅ Exclude password
    if (!user) return res.status(404).json({ msg: "User not found" });

    res.json(user);
  } catch (error) {
    console.error("Error fetching profile:", error);
    res.status(500).json({ msg: "Server error" });
  }
});

// ✅ UPDATE User Profile (Save user data)
router.put("/", authMiddleware, async (req, res) => {
  const { name, mobile, gender, oldPassword, newPassword } = req.body;
  
  try {
    let user = await User.findById(req.user.id);
    if (!user) return res.status(404).json({ msg: "User not found" });

    console.log("🔹 Incoming Update Request:", req.body); // ✅ Debug log
    console.log("🔹 Before Update:", user); // ✅ Debug log before changes

    // ✅ Update basic profile fields
    user.name = name?.trim() || user.name;
    user.mobile = mobile?.trim() || user.mobile;
    user.gender = gender || user.gender;

    // ✅ Handle password change (if provided)
    if (oldPassword && newPassword) {
      if (newPassword.length < 6) {
        return res.status(400).json({ msg: "New password must be at least 6 characters long" });
      }

      const isMatch = await bcrypt.compare(oldPassword, user.password);
      if (!isMatch) return res.status(400).json({ msg: "Old password is incorrect" });

      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(newPassword, salt);
    }

    await user.save({ validateBeforeSave: false });

    console.log("🔹 After Update:", user); // ✅ Debug log after changes

    // ✅ Return updated user data (excluding password)
    res.json({
      msg: "Profile updated successfully",
      user: {
        name: user.name,
        email: user.email,
        mobile: user.mobile,
        gender: user.gender
      }
    });
  } catch (error) {
    console.error("❌ Error updating profile:", error);
    res.status(500).json({ msg: "Server error" });
  }
});

module.exports = router;
