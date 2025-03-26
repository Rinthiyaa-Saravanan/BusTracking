import React from "react";
import { Link } from "react-router-dom";
import "./Tourism.css";

const Tourism = () => {
  return (
    <div className="tourism-container">
      <div className="tourism-content">
        <header className="tourism-header">Coimbatore Tourism Information</header>
        <p className="abc">
          Coimbatore, popularly called as “THE MANCHESTER OF SOUTH INDIA” is one of the top 
          Tier-II cities in India. It has a great reputation for its pleasant climate and warm nature.
          It is one of the top industrial cities of India. Coimbatore is also famous for its "Siruvani",
          which is the second sweetest water in the world. The western side of 
          the city is bounded by the Western Ghats, home to many tourism destinations.
        </p>

        {/* Sections */}
        <div className="tourism-section">
          <Link to="/nearby" className="tourism-box">
            <h2>Nearby Destinations</h2>
            <p>
              With the presence of Western Ghats, numerous wildlife reserves and hill stations 
              make Coimbatore a favorite tourism destination.
            </p>
          </Link>

          <Link to="/shopping" className="tourism-box">
            <h2>Shopping in Coimbatore</h2>
            <p>
              Textile, jewelry, and Mysore Pak are must-buy items when visiting Coimbatore. 
              The city has multiple shopping hotspots for every price range.
            </p>
          </Link>

          <Link to="/entertainment" className="tourism-box">
            <h2>Entertainment Spots</h2>
            <p>
              With new malls coming up, Coimbatore has plenty of 
              options to spend your leisure time.
            </p>
          </Link>

          <Link to="/religious" className="tourism-box">
            <h2>Religious Places</h2>
            <p>
              To take a break from your routine life and explore spirituality, 
              Coimbatore is home to many religious places.
            </p>
          </Link>
        </div>
      </div>

      {/* Sidebar */}
      <aside className="sidebar">
        <h3>RELATED LINKS</h3>
        <ul>
          <li><Link to="/tourism">Tourism Home</Link></li>
          <li><Link to="/nearby">Nearby Destinations</Link></li>
          <li><Link to="/shopping">Shopping</Link></li>
          <li><Link to="/entertainment">Entertainment</Link></li>
          <li><Link to="/religious">Religious Places</Link></li>
        </ul>
      </aside>
    </div>
  );
};

export default Tourism;
