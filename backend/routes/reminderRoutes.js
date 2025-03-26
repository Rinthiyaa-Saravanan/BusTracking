const express = require("express");
const Reminder = require("../models/Reminder"); // ✅ Reminder Model
const authMiddleware = require("../middleware/authMiddleware"); // ✅ Authentication Middleware

const router = express.Router();

// ✅ GET All Reminders (Public Access)
router.get("/", async (req, res) => {
  try {
    let reminders;

    if (req.user) {
      // ✅ If logged in, show only user's reminders
      reminders = await Reminder.find({ userId: req.user.id });
    } else {
      // ✅ If NOT logged in, show all public reminders
      reminders = await Reminder.find({});
    }

    res.json(reminders);
  } catch (error) {
    console.error("Error fetching reminders:", error);
    res.status(500).json({ msg: "Server error" });
  }
});

// ✅ POST - Add a Reminder (Login Required)
router.post("/", authMiddleware, async (req, res) => {
  const { pickup, drop, time } = req.body;

  if (!pickup || !drop || !time) {
    return res.status(400).json({ msg: "All fields are required" });
  }

  try {
    const newReminder = new Reminder({
      userId: req.user.id, // ✅ Link reminder to the logged-in user
      pickup,
      drop,
      time,
    });

    await newReminder.save();
    res.json({ msg: "Reminder set successfully", reminder: newReminder });
  } catch (error) {
    console.error("Error saving reminder:", error);
    res.status(500).json({ msg: "Server error" });
  }
});

// ✅ DELETE - Remove a Reminder (Login Required)
router.delete("/:id", authMiddleware, async (req, res) => {
  try {
    const reminder = await Reminder.findById(req.params.id);

    if (!reminder) {
      return res.status(404).json({ msg: "Reminder not found" });
    }

    // ✅ Ensure the user owns this reminder before deleting
    if (reminder.userId.toString() !== req.user.id) {
      return res.status(403).json({ msg: "Not authorized to delete this reminder" });
    }

    await reminder.deleteOne();
    res.json({ msg: "Reminder deleted successfully" });
  } catch (error) {
    console.error("Error deleting reminder:", error);
    res.status(500).json({ msg: "Server error" });
  }
});

module.exports = router;
