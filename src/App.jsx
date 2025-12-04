import { useState } from "react";

const WHATSAPP_NUMBER = "03332820021";
const WA_LINK = `https://wa.me/92${WHATSAPP_NUMBER.substring(1)}?text=Hello%20SafaayiCo`;

export default function App() {
  const [page, setPage] = useState(
    window.location.hash.replace("#", "") || "home"
  );

  window.onhashchange = () => {
    setPage(window.location.hash.replace("#", "") || "home");
  };

  return (
    <div className="app dark-bg">
      {/* NAV BAR */}
      <nav className="navbar">
        <div className="logo">SafaayiCo</div>
        <div className="nav-links">
          <a
            href="#home"
            className={page === "home" ? "active nav-link" : "nav-link"}
          >
            Home
          </a>
          <a
            href="#products"
            className={page === "products" ? "active nav-link" : "nav-link"}
          >
            Products
          </a>
          <a
            href="#contact"
            className={page === "contact" ? "active nav-link" : "nav-link"}
          >
            Contact
          </a>
        </div>
      </nav>

      {/* HOME */}
      {page === "home" && (
        <section className="hero">
          <div className="hero-text">
            <h1>
              Daily-use consumables, <span>zero health risk</span>.
            </h1>
            <p>
              SafaayiCo provides safe, repeat-purchase household and office
              essentials in Karachi. No food, no skincare, no chemicals — only
              simple, dependable products.
            </p>

            <a className="btn btn-whatsapp" href={WA_LINK} target="_blank">
              Order on WhatsApp
            </a>

            <div className="founder">
              <strong>Founder & CEO:</strong> Umar<br />
              Karachi · 📞 {WHATSAPP_NUMBER}
            </div>
          </div>

          <div className="hero-image float-card">
            <img
              src="https://images.pexels.com/photos/5591870/pexels-photo-5591870.jpeg"
              alt="Household essentials"
            />
          </div>
        </section>
      )}

      {/* PRODUCTS */}
      {page === "products" && (
        <section className="products">
          <h2>Phase-1 Products</h2>
          <p className="muted">
            High-rotation essentials bought every month by homes, cafés and
            offices in Karachi.
          </p>

          <div className="product-grid">
            {/* TISSUES */}
            <div className="product-card float-card">
              <img
                src="https://images.pexels.com/photos/3962287/pexels-photo-3962287.jpeg"
                alt="Facial Tissues"
              />
              <h3>Facial Tissues</h3>
              <p>
                Soft, strong tissues for homes, offices and cafés. Perfect daily
                consumable.
              </p>
              <small>Target price: Rs 160–200 / box</small>
            </div>

            {/* GARBAGE BAGS */}
            <div className="product-card float-card">
              <img
                src="https://images.pexels.com/photos/8505030/pexels-photo-8505030.jpeg"
                alt="Garbage Bags"
              />
              <h3>Heavy-Duty Garbage Bags</h3>
              <p>
                Leak-resistant rolls for kitchens, homes and restaurants.
              </p>
              <small>Target price: Rs 250–450 / roll</small>
            </div>

            {/* ZIP LOCK */}
            <div className="product-card float-card">
              <img
                src="https://images.pexels.com/photos/7262562/pexels-photo-7262562.jpeg"
                alt="Zip Lock Bags"
              />
              <h3>Zip-Lock Storage Bags</h3>
              <p>
                Resealable food-safe storage for snacks, spices and supplies.
              </p>
              <small>Target price: Rs 250–300 / pack</small>
            </div>
          </div>
        </section>
      )}

      {/* CONTACT */}
      {page === "contact" && (
        <section className="contact">
          <h2>Contact SafaayiCo</h2>
          <p>
            For wholesale, office supply or household orders, contact directly
            on WhatsApp.
          </p>

          <a className="btn btn-whatsapp" href={WA_LINK} target="_blank">
            WhatsApp Umar – {WHATSAPP_NUMBER}
          </a>

          <p className="muted footer">
            © 2025 SafaayiCo · Karachi · Founded by Umar
          </p>
        </section>
      )}
    </div>
  );
}
