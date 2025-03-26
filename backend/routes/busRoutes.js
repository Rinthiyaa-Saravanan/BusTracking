const express = require("express");
const router = express.Router();

const busData = {
  busNumbers: ["101", "102", "103", "S9", "S10"],
  locations: ["Gandhipuram", "Ukkadam", "Singanallur", "Railway Station", "Maruthamalai"],
  routes: {
    "101": { route: "Gandhipuram → Ukkadam → Singanallur", estimatedTime: 10, nextStop: "Ukkadam" },
    "102": { route: "Gandhipuram → Railway Station → Ukkadam", estimatedTime: 15, nextStop: "Railway Station" },
    "S9": { route: "Gandhipuram → Maruthamalai", estimatedTime: 12, nextStop: "Maruthamalai" },
  },
};

// ✅ Fetch Bus Numbers & Locations
router.get("/routes", (req, res) => {
  res.json({ busNumbers: busData.busNumbers, locations: busData.locations });
});

// ✅ Search Bus Data
router.post("/search", (req, res) => {
  const { busNumber, pickup, dropoff } = req.body;

  if (!busData.routes[busNumber]) {
    return res.status(404).json({ msg: "Bus number not found" });
  }

  const { route, estimatedTime, nextStop } = busData.routes[busNumber];
  res.json({ route, estimatedTime, nextStop });
});

module.exports = router;
