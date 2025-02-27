import { Link } from "react-router-dom";
import { Bus as BusIcon } from "lucide-react";
import "./navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <BusIcon className="bus-icon" />
        <span className="nav-title">Bus Tracker</span>
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/bus">Bus Routes</Link></li>
        <li><Link to="/remainder">Remainder</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </nav>
  );
}
