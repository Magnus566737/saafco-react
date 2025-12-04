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
    <div className="app">
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
        <>
          <section className="hero">
            <div className="hero-text">
              <div className="pill">Future consumables brand · Karachi</div>

              <h1>
                Daily-use consumables, <span>zero health risk.</span>
              </h1>

              <p>
                SafaayiCo is a future brand focused on safe, repeat-purchase
                essentials for homes and offices in Karachi. No food, no
                skincare, no chemicals — only simple products that are easy to
                store, ship and repeat every month.
              </p>

              <a className="btn btn-whatsapp" href={WA_LINK} target="_blank">
                Order on WhatsApp
              </a>

              <div className="founder">
                <strong>Founder &amp; CEO:</strong> Umar · Karachi · 📞{" "}
                {WHATSAPP_NUMBER}
              </div>
            </div>

            <div className="hero-image float-card">
              <img
                src="https://images.pexels.com/photos/5591870/pexels-photo-5591870.jpeg"
                alt="Household essentials"
              />
            </div>
          </section>

          {/* Interesting extra section */}
          <section className="home-extra">
            <h2>Why SafaayiCo is different</h2>
            <div className="home-grid">
              <div className="home-card">
                <h3>Locked, low-risk scope</h3>
                <p>
                  Only non-health, non-food items: tissues, garbage bags,
                  zip-lock bags and basic stationery. No creams, oils or
                  chemicals.
                </p>
              </div>
              <div className="home-card">
                <h3>Built for repeat orders</h3>
                <p>
                  Every SKU is something people finish and re-order:
                  month-after-month usage for homes, cafés and offices.
                </p>
              </div>
              <div className="home-card">
                <h3>Calm operations</h3>
                <p>
                  Simple storage, no expiry panic, no temperature control.
                  Designed so the business can run calmly in the background.
                </p>
              </div>
            </div>
          </section>
        </>
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
                Leak-resistant rolls for kitchens, homes and restaurants. Easy
                to stack and ship.
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
                Resealable food-safe storage for snacks, spices and small
                supplies. Great for bundles.
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
            For wholesale, office supply or household orders, you can contact
            the founder directly.
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
