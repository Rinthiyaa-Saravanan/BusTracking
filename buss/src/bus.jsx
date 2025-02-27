import { useState } from "react";
import { MapPin, Clock, Route } from "lucide-react";
import "./bus.css";

export default function Bus() {
  const [busNumber, setBusNumber] = useState("");
  const [pickup, setPickup] = useState("");
  const [dropoff, setDropoff] = useState("");
  const [error, setError] = useState("");
  const [arrivalTime, setArrivalTime] = useState("");
  const [nextStop, setNextStop] = useState("");
  const [route, setRoute] = useState("");

  const handleSearch = () => {
    if (!busNumber.trim() || !pickup.trim() || !dropoff.trim()) {
      setError("All fields are required");
      setArrivalTime(""); 
      setNextStop("");
      setRoute("");
    } else {
      setError("");
      
      // Mocked estimated arrival time (5-15 min)
      const estimatedTime = `Arrives in ${Math.floor(Math.random() * 10) + 5} min`;
      setArrivalTime(estimatedTime);

      // Mocked next stop (For demonstration)
      const stops = ["Station A", "Station B", "Station C", "Station D"];
      const nextStopIndex = Math.floor(Math.random() * stops.length);
      setNextStop(stops[nextStopIndex]);

      // Mocked bus route
      setRoute(`Route: ${pickup} → ${stops[nextStopIndex]} → ${dropoff}`);
    }
  };

  return (
    <div className="bus-container">
      {/* Left Side - Search Form */}
      <div className="bus-content">
        <h1 className="title">Find Your Bus</h1>
        <p className="description">
          Enter the bus number, pick-up, and drop-off locations to track your journey.
        </p>
        <div className="input-group">
          <input
            type="text"
            placeholder="Enter Bus Number"
            value={busNumber}
            onChange={(e) => setBusNumber(e.target.value)}
            className="bus-input"
          />
          <input
            type="text"
            placeholder="Enter Pick-up Point"
            value={pickup}
            onChange={(e) => setPickup(e.target.value)}
            className="bus-input"
          />
          <input
            type="text"
            placeholder="Enter Drop-off Point"
            value={dropoff}
            onChange={(e) => setDropoff(e.target.value)}
            className="bus-input"
          />
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
            <p>Next Stop: {nextStop}</p>
          </div>
        )}
      </div>

      {/* Right Side - Map */}
      <div className="map-container">
        <iframe
          title="Bus Map"
          className="bus-map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093746!2d144.95373531531576!3d-37.81627974202153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d5df1f07a9f%3A0x5045675218cee17!2sMelbourne%20CBD!5e0!3m2!1sen!2sau!4v1601940990325!5m2!1sen!2sau"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
