const mongoose = require("mongoose");

const ReminderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  pickup: { type: String, required: true },
  drop: { type: String, required: true },
  time: { type: String, required: true },
});

module.exports = mongoose.model("Reminder", ReminderSchema);
