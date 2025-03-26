import React from "react";
import "./shopping.css";
import { Link } from "react-router-dom";

const Shopping = () => {
  return (
    <div className="shopping-container">
      {/* Left Content Section */}
      <div className="shopping-content">
        <header className="shopping-header">Shopping Destinations</header>

        <p className="shopping-description">
          Coimbatore is a great place for **traditional shopping**. Being an **Industrial & Textile city**, the quality of textile goods is among the best. The city is also known for **affordable automobile parts, engineering machines, pumps, silk clothing, and jewelry**.
        </p>

        <h2 className="section-title">Popular Shopping Destinations in Coimbatore:</h2>

        <section className="shopping-section">
          <h3>🛍 Oppanakara Street</h3>
          <p>
            One of the **busiest shopping areas**, Oppanakara Street is a major **commercial hub**. You can find **textiles, jewelry, apparel, and accessories** across all price ranges.
          </p>
          <p><strong>🚌 Nearby Bus Stop:</strong> Townhall</p>
        </section>

        <section className="shopping-section">
          <h3>🛍 Cross Cut Road & 100 Feet Road</h3>
          <p>
            Located in **Gandhipuram**, these roads feature **modern textile and jewelry outlets**. **100 Feet Road** is **famous for electronics shopping**.
          </p>
          <p><strong>🚌 Nearby Bus Stop:</strong> Gandhipuram</p>
        </section>

        <section className="shopping-section">
          <h3>🛍 Big Bazaar Street</h3>
          <p>
            Adjacent to **Oppanakara Street**, Big Bazaar Street is **a wholesale shopping hub**. It specializes in **jewelry making supplies, food products, and spices**.
          </p>
        </section>

        <section className="shopping-section">
          <h3>🛍 DB Road, RS Puram</h3>
          <p>
            Located in **RS Puram**, **DB Road & TV Swamy Road** are home to **luxury retail stores** and **international brand outlets**.
          </p>
        </section>

        <section className="shopping-section">
          <h3>🏬 Shopping Malls</h3>
          <p>
            Coimbatore’s shopping malls offer a mix of **shopping, entertainment, gaming, and food outlets**.
          </p>
          <ul>
            <li><strong>Brookefields Mall</strong> - Brooke Bond Road, RS Puram</li>
            <li><strong>Fun Republic Mall</strong> - Avinashi Road, Peelamedu</li>
            <li><strong>Prozone Mall</strong> - Sathy Road, Ganapathy</li>
          </ul>
        </section>
      </div>

      {/* Sidebar */}
      <aside className="shopping-sidebar">
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

export default Shopping;
