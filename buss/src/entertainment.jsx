import React from "react";
import "./entertainment.css";
import { Link } from "react-router-dom";

const Entertainment = () => {
  return (
    <div className="entertainment-container">
      {/* Left Content Section */}
      <div className="entertainment-content">
        <header className="entertainment-header">Entertainment Spots</header>

        <p className="entertainment-description">
          Coimbatore, being one of the most **preferred places to live in**, also has **good entertainment spots**.
          Although the city doesn't have **massive amusement parks**, it does have **theme parks, cinemas, a zoo, and hill stations** that offer entertainment.
        </p>

        <h2 className="section-title">Popular Entertainment Spots in Coimbatore:</h2>

        <section className="entertainment-section">
          <h3>🎡 VOC Park and Zoo</h3>
          <p>
            One of Coimbatore’s **oldest entertainment spots**, VOC Park features a **general park, children's park, a zoo, and a skate ground**.
          </p>
          <p><strong>🚌 Nearby Bus Stop:</strong> VOC Park, Park Gate</p>
        </section>

        <section className="entertainment-section">
          <h3>🎢 Theme Parks</h3>
          <p>Coimbatore has **three major theme parks**:</p>
          <ul>
            <li><strong>Black Thunder</strong> - Located in **Mettupalayam** on the way to Ooty. One of the **best water theme parks** in South India.</li>
            <li><strong>Kovai Kondattam</strong> - Located **near Perur**, adjacent to the city.</li>
            <li><strong>Maharaja Theme Park</strong> - Located **near Neelambur**. The complex also features **cinema theatres and a food court**.</li>
          </ul>
        </section>

        <section className="entertainment-section">
          <h3>🎥 Cinemas</h3>
          <p>Coimbatore has **several multiplexes** and **cinema halls** offering the latest movies.</p>
          <ul>
            <li><strong>KG Cinemas</strong> - Race Course (4 Screens)</li>
            <li><strong>The Cinema</strong> - Brookefields Mall (6 Screens)</li>
            <li><strong>Fun Cinema</strong> - Fun Republic Mall (6 Screens)</li>
            <li><strong>INOX</strong> - Prozone Mall (9 Screens)</li>
            <li><strong>Maharaja Multiplex</strong> - Neelambur (5 Screens)</li>
          </ul>
        </section>
      </div>

      {/* Sidebar */}
      <aside className="entertainment-sidebar">
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

export default Entertainment;
