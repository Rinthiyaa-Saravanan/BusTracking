import React from "react";
import { Link } from "react-router-dom";
import "./nearby.css"; // Ensure this CSS file is in the correct location

const Nearby = () => {
  return (
    <div className="nearby-container">
      {/* Left Content */}
      <div className="nearby-content">
        <header className="nearby-header">Nearby Destinations</header>
        
        <h2 className="section-title">Popular nearby Destinations in Coimbatore:</h2>

        {/* Ooty Section */}
        <section>
          <h2>Ooty (Udhagamandalam)</h2>
          <li className="description">Popularly known as <strong className="description">"Queen of Hills"</strong>, Ooty is a famous summer holiday destination.
            Some of the top attractions include:
          </li>
          <ul className="description">
            <li className="description"><strong>Nilagiri Mountain Railway (NMR)</strong> - A UNESCO World Heritage toy train ride.</li>
            <li className="description"><strong>Government Botanical Garden</strong> - Hosts an annual flower show in May.</li>
            <li className="description"><strong>Pykara Lake and Falls</strong> - Offers scenic beauty on the way to Gudalur.</li>
            <li className="description"><strong>Doddabetta Peak</strong> - The highest peak in South India.</li>
          <li className="description">Must Buy: Homemade chocolates and Ooty Varkey.</li>
          </ul>
        </section>

        {/* Coonoor, Kotagiri, and Gudalur */}
        <section>
          <h2>Coonoor, Kotagiri, and Gudalur</h2>
          <li className="description">Coonoor is famous for tea plantations, while Kotagiri and Gudalur offer adventure tourism.</li>
          <ul className="description">
            <li className="description"><strong>Sim’s Park</strong> - Botanical garden with an annual fruit & vegetable show.</li>
            <li className="description"><strong>Dolphin’s Nose Viewpoint</strong> - Offers a panoramic view of the valley.</li>
            <li className="description"><strong>Lamb’s Rock</strong> - A viewpoint to see Mettupalayam town below.</li>
            <li className="description"><strong>Mudumalai National Park</strong> - A tiger reserve near Gudalur.</li>
          </ul>
        </section>

        {/* Anamalai Tiger Reserve */}
        <section>
          <h2>Anamalai Tiger Reserve</h2>
          <li className="description">
            Located in the Valparai range, this tiger reserve is home to elephants, tigers, and deer.
            <strong>Topslip</strong> offers safari rides and treehouse stays.
          </li>
        </section>

        {/* Kovai Kuttralam & Siruvani */}
        <section>
          <h2>Kovai Kuttralam & Siruvani</h2>
          <li className="description">
            Kovai Kuttralam waterfalls, 40 km from Coimbatore, is a beautiful one-day picnic spot.
            Siruvani dam is famous for having the <strong>sweetest drinking water</strong> in India.
          </li>
        </section>

        {/* Azhiyar Dam & Monkey Falls */}
        <section>
          <h2>Azhiyar Dam & Monkey Falls</h2>
          <li className="description">
            Azhiyar dam is a scenic spot, often used in South Indian movies.
            Monkey Falls is 5 km uphill from Azhiyar dam and requires a forest entry permit.
          </li>
        </section>
      </div>

      {/* Sidebar with Related Links */}
      <aside className="sidebar">
        <h3>Related Links</h3>
        <ul>
          <li><Link to="/">Tourism Home</Link></li>
          <li><Link to="/nearby">Nearby Destinations</Link></li>
          <li><Link to="/shopping">Shopping Destinations</Link></li>
          <li><Link to="/entertainment">Entertainment Spots</Link></li>
          <li><Link to="/religious">Religious Places</Link></li>
        </ul>
      </aside>
    </div>
  );
};

export default Nearby;
