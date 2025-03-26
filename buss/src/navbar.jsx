import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Bus as BusIcon, User, LogOut } from "lucide-react"; // ✅ Import Icons
import "./navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const navigate = useNavigate();
  const token = localStorage.getItem("token"); // ✅ Check if user is logged in

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // ✅ Logout Function
  const handleLogout = () => {
    localStorage.removeItem("token");
    setMenuOpen(false);
    navigate("/login"); // ✅ Redirect to login after logout
  };

  return (
    <nav className="navbar">
      <div className="nav-logo">
        <BusIcon className="bus-icon" />
        <span className="nav-title">Buzzle</span>
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/bus">Bus Routes</Link></li>
        <li><Link to="/Tourism">Tourist spot</Link></li>
        <li><Link to="/remainder">Remainder</Link></li>
        <li className="login-icon">
          <div 
            className={`user-circle ${token ? "logged-in" : ""}`} 
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <User size={22} />
          </div>
        </li>
      </ul>

      {/* ✅ Pop-up Menu */}
      {menuOpen && (
        <div className="popup-menu" ref={menuRef}>
          <div className="popup-header">
            <div className={`guest-icon ${token ? "logged-in-icon" : ""}`}>
              <User size={30} />
            </div>
            <p className="guest-text">{token ? "Profile" : "Guest"}</p>
          </div>
          
          {/* ✅ Show different options based on login state */}
          {token ? (
            <>
              <Link to="/profile" className="popup-option" onClick={() => setMenuOpen(false)}>Profile</Link>
              <button className="popup-option logout-button" onClick={handleLogout}>
                <LogOut size={18} /> Logout
              </button>
            </>
          ) : (
            <Link to="/login" className="popup-login" onClick={() => setMenuOpen(false)}>Login</Link>
          )}
        </div>
      )}
    </nav>
  );
}
