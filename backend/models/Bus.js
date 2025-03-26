import { useState, useEffect } from "react";
import { MapPin, Clock, Route } from "lucide-react";
import "./bus.css";

const API_URL = "http://localhost:5002/api/bus"; // ✅ Backend API URL

export default function Bus() {
  const [busNumber, setBusNumber] = useState("");
  const [pickup, setPickup] = useState("");
  const [dropoff, setDropoff] = useState("");
  const [arrivalTime, setArrivalTime] = useState("");
  const [nextStop, setNextStop] = useState("");
  const [route, setRoute] = useState("");
  const [error, setError] = useState("");

  const [busNumbers, setBusNumbers] = useState([]);
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/routes`)
      .then((res) => res.json())
      .then((data) => {
        setBusNumbers(data.busNumbers);
        setLocations(data.locations);
      })
      .catch((err) => console.error("Error fetching routes:", err));
  }, []);

  const handleSearch = async () => {
    if (!busNumber || !pickup || !dropoff) {
      setError("All fields are required");
      return;
    }
    setError("");

    try {
      const response = await fetch(`${API_URL}/search`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ busNumber, pickup, dropoff }),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.msg || "Error fetching bus data");

      setArrivalTime(`Arrives in ${data.estimatedTime} min`);
      setNextStop(`Next Stop: ${data.nextStop}`);
      setRoute(`Route: ${data.route}`);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="bus-container">
      <div className="bus-content">
        <h1 className="title">Find Your Bus</h1>
        <p className="description">Enter the bus number, pick-up, and drop-off locations to track your journey.</p>
        <div className="input-group">
          <select value={busNumber} onChange={(e) => setBusNumber(e.target.value)} className="bus-input">
            <option value="">Select Bus Number</option>
            {busNumbers.map((bus, index) => (
              <option key={index} value={bus}>{bus}</option>
            ))}
          </select>

          <select value={pickup} onChange={(e) => setPickup(e.target.value)} className="bus-input">
            <option value="">Select Pickup Point</option>
            {locations.map((loc, index) => (
              <option key={index} value={loc}>{loc}</option>
            ))}
          </select>

          <select value={dropoff} onChange={(e) => setDropoff(e.target.value)} className="bus-input">
            <option value="">Select Drop-off Point</option>
            {locations.map((loc, index) => (
              <option key={index} value={loc}>{loc}</option>
            ))}
          </select>

          <button className="search-button" onClick={handleSearch}>
            <MapPin className="button-icon" /> Search
          </button>
        </div>
        {error && <p className="error-message">{error}</p>}
        {arrivalTime && (
          <div className="info-box">
            <Clock className="info-icon" />
            <p>{arrivalTime}</p>
          </div>
        )}
        {route && (
          <div className="info-box">
            <Route className="info-icon" />
            <p>{route}</p>
          </div>
        )}
        {nextStop && (
          <div className="info-box">
            <MapPin className="info-icon" />
            <p>{nextStop}</p>
          </div>
        )}
      </div>

      <div className="map-container">
        <iframe
          title="Coimbatore Bus Map"
          className="bus-map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.006674440223!2d76.95467577507191!3d11.01684488912252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859ba1938260d%3A0x5c5317e53b487f0!2sCoimbatore%2C%20Tamil%20Nadu%2C%20India!5e0!3m2!1sen!2sin!4v1711467088925!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0, borderRadius: "10px" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
}
