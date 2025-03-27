import { useState } from "react";
import { MapPin, Clock, Route } from "lucide-react";
import "./bus.css";

export default function Bus() {
  const [busNumber, setBusNumber] = useState("");
  const [pickup, setPickup] = useState("");
  const [dropoff, setDropoff] = useState("");
  const [error, setError] = useState({ busNumber: "", pickup: "", dropoff: "" });
  const [arrivalTime, setArrivalTime] = useState("");
  const [nextStop, setNextStop] = useState("");
  const [route, setRoute] = useState("");

  // ✅ Sample Data for Dropdowns
  const busNumbers = ["101", "102", "103", "104", "105"];
  const locations = ["Gandhipuram", "Singanallur", "Ukkadam", "Peelamedu", "RS Puram"];

  const handleSearch = async () => {
    let newError = { busNumber: "", pickup: "", dropoff: "" };

    if (!busNumber) newError.busNumber = "Bus number is required!";
    if (!pickup) newError.pickup = "Pickup location is required!";
    if (!dropoff) newError.dropoff = "Drop-off location is required!";
    if (pickup && dropoff && pickup === dropoff) {
      newError.dropoff = "Pickup and drop-off locations cannot be the same!";
    }

    setError(newError);

    // ✅ If any validation fails, stop the search
    if (newError.busNumber || newError.pickup || newError.dropoff) return;

    try {
      // ✅ Mocked API Response
      const estimatedTime = `${Math.floor(Math.random() * 10) + 5} min`;
      const possibleStops = locations.filter((loc) => loc !== pickup && loc !== dropoff);
      const stopIndex = Math.floor(Math.random() * possibleStops.length);
      const nextStop = possibleStops[stopIndex];

      setArrivalTime(`Arrives in ${estimatedTime}`);
      setNextStop(nextStop);
      setRoute(`Route: ${pickup} → ${nextStop} → ${dropoff}`);
    } catch (error) {
      setError({ ...newError, general: "Failed to fetch bus details." });
    }
  };

  return (
    <div className="bus-container">
      {/* Left Side - Search Form */}
      <div className="bus-content">
        <h1 className="title">Find Your Bus</h1>
        <p className="description">
          Select the bus number, pick-up, and drop-off locations to track your journey.
        </p>
        <div className="input-group">
          <div>
            <select value={busNumber} onChange={(e) => setBusNumber(e.target.value)} className="bus-input">
              <option value="">Select Bus Number</option>
              {busNumbers.map((bus) => (
                <option key={bus} value={bus}>{bus}</option>
              ))}
            </select>
            {error.busNumber && <p className="error-text">{error.busNumber}</p>}
          </div>

          <div>
            <select value={pickup} onChange={(e) => setPickup(e.target.value)} className="bus-input">
              <option value="">Select Pickup Location</option>
              {locations.map((loc) => (
                <option key={loc} value={loc}>{loc}</option>
              ))}
            </select>
            {error.pickup && <p className="error-text">{error.pickup}</p>}
          </div>

          <div>
            <select value={dropoff} onChange={(e) => setDropoff(e.target.value)} className="bus-input">
              <option value="">Select Drop-off Location</option>
              {locations.map((loc) => (
                <option key={loc} value={loc}>{loc}</option>
              ))}
            </select>
            {error.dropoff && <p className="error-text">{error.dropoff}</p>}
          </div>

          <button className="search-button" onClick={handleSearch}>
            <MapPin className="button-icon" /> Search
          </button>
        </div>

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

      {/* ✅ Right Side - Google Map (Now Shows Coimbatore, Tamil Nadu) */}
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
