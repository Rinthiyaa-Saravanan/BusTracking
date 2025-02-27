import { Link } from "react-router-dom";
import { Clock, Bus, Map, Bell } from "lucide-react";
import "./home.css";

export default function Home() {
  return (
    <div className="home-container">
      <section className="hero-section">
        <h1>Track Your Bus Journey</h1>
        <p>Get real-time updates, explore routes, and stay informed with smart updates.</p>
        <div className="buttons">
          <Link to="/bus" className="explore-button">
            <Map className="icon" /> Explore Routes
          </Link>
          <Link to="/remainder" className="schedule-button">
            <Clock className="icon" /> View Schedule
          </Link>
        </div>
      </section>
      <section className="features-section">
        <div className="feature-card">
          <Bus className="feature-icon" />
          <h3>Live Tracking</h3>
          <p>Track your bus in real-time with accurate location updates.</p>
        </div>
        <div className="feature-card">
          <Map className="feature-icon" />
          <h3>Interactive Maps</h3>
          <p>Plan your journey with easy-to-use interactive maps.</p>
        </div>
        <div className="feature-card">
          <Bell className="feature-icon" />
          <h3>Smart Updates</h3>
          <p>Receive instant notifications about delays and changes.</p>
        </div>
      </section>
    </div>
  );
}
