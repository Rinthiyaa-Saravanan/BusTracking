import React from "react";
import "./religious.css";
import { Link } from "react-router-dom";

const Religious = () => {
  return (
    <div className="religious-container">
      {/* Left Content Section */}
      <div className="religious-content">
        <header className="religious-header">Religious Places</header>

        <p className="religious-description">
          Coimbatore is a place where **Tamil culture and traditions** are still respected and followed.
          Some of the oldest **temples and spiritual sites** in the region showcase the **rich history, artistic sculptures, and cultural heritage** of ancient Tamil civilization.
        </p>

        <h2 className="section-title">Popular Religious Sites in Coimbatore:</h2>

        <section className="religious-section">
          <h3>🛕 Maruthamalai Murugan Temple</h3>
          <p>
            This temple, located in the **Western Ghats**, is over **1,000 years old** and is considered the **seventh home of Lord Murugan**.
            **Devasthanam buses** are available from the base to the temple. 
          </p>
          <p><strong>🚌 Nearby Bus Stop:</strong> Maruthamalai</p>
        </section>

        <section className="religious-section">
          <h3>🛕 Koniamman Temple</h3>
          <p>
            One of the **oldest temples in Coimbatore**, located in the **heart of the city**.
            The deity is considered the **guardian of Coimbatore**.
          </p>
          <p><strong>🚌 Nearby Bus Stop:</strong> Townhall</p>
        </section>

        <section className="religious-section">
          <h3>🛕 Perur Patteeswarar Temple</h3>
          <p>
            Situated on the **banks of the Noyyal River**, this temple is **more than 500 years old**.
            Ancient **inscriptions and sculptures** of Lord Shiva and historical rulers can be seen here.
          </p>
          <p><strong>🚌 Nearby Bus Stop:</strong> Perur</p>
        </section>

        <section className="religious-section">
          <h3>🛕 Velliangiri Temple</h3>
          <p>
            A **famous trekking spot** where devotees start from **Poondi Murugan Temple** and climb **seven hills** to reach **Velliangiri Andavar Temple**.
            It is considered **auspicious to visit during Maha Shivaratri**.
          </p>
        </section>

        <section className="religious-section">
          <h3>🛕 Eachanari Vinayagar Temple</h3>
          <p>
            Located on **Pollachi Road**, Lord Ganesha here is known as **"Vazhi Pillayar"** for travelers between **Coimbatore & Pollachi**.
          </p>
          <p><strong>🚌 Nearby Bus Stop:</strong> Eachanari</p>
        </section>

        <section className="religious-section">
          <h3>🛕 Puliakulam Vinayagar Temple</h3>
          <p>
            This temple houses **one of the largest Lord Ganesha statues** in South India, located within the city limits.
          </p>
          <p><strong>🚌 Nearby Bus Stop:</strong> Puliakulam</p>
        </section>

        <section className="religious-section">
          <h3>🛕 ISHA Yoga</h3>
          <p>
            Home to the **Dhyanalinga Temple** and **Adiyogi Statue**, ISHA Yoga is a **spiritual and meditation center**.
            The **Adiyogi statue** holds a Guinness World Record for being the **"Largest Bust Sculpture"** in the world.
          </p>
          <p><strong>🚌 Nearby Bus Stop:</strong> ISHA Yoga</p>
        </section>
      </div>

      {/* Sidebar */}
      <aside className="religious-sidebar">
        <h3>Related Links</h3>
        <ul>
          <li><Link to="/">Tourism Home</Link></li>
          <li><Link to="/nearby">Nearby Destinations</Link></li>
          <li><Link to="/shopping">Shopping</Link></li>
          <li><Link to="/entertainment">Entertainment</Link></li>
          <li><Link to="/religious">Religious Places</Link></li>
        </ul>
      </aside>
    </div>
  );
};

export default Religious;
