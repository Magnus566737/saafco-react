import React, { useState } from "react";

/* CHANGE WHATSAPP NUMBER HERE */
const WHATSAPP = "https://wa.me/923001234567";

const openWA = (msg) =>
  window.open(`${WHATSAPP}?text=${encodeURIComponent(msg)}`, "_blank");

export default function App() {
  const [page, setPage] = useState("home");

  return (
    <div className="app-root">
      <div className="app-shell">
        {/* NAVBAR */}
        <header className="navbar">
          <div className="nav-brand">SafaayiCo</div>
          <nav>
            <button
              className={`nav-link ${page === "home" ? "active" : ""}`}
              onClick={() => setPage("home")}
            >
              Home
            </button>
            <button
              className={`nav-link ${page === "products" ? "active" : ""}`}
              onClick={() => setPage("products")}
            >
              Products
            </button>
            <button
              className={`nav-link ${page === "contact" ? "active" : ""}`}
              onClick={() => setPage("contact")}
            >
              Contact
            </button>
          </nav>
        </header>

        {/* HOME PAGE */}
        {page === "home" && (
          <>
            <section className="hero">
              <div>
                <h1 className="hero-title">
                  Daily-use consumables,{" "}
                  <span className="hero-highlight">zero health risk.</span>
                </h1>
                <p className="hero-text">
                  SafaayiCo provides safe, repeat-purchase household and office
                  essentials. No food, no skincare, no chemicals — only simple,
                  dependable products that are easy to store and ship.
                </p>

                <button
                  className="btn-primary btn-hover"
                  onClick={() =>
                    openWA("Hi, I want to order SafaayiCo products.")
                  }
                >
                  Order on WhatsApp
                </button>
              </div>

              <div className="hero-image-wrapper float-card">
                <img
                  src="https://images.pexels.com/photos/5591870/pexels-photo-5591870.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Tissues"
                  className="hero-image"
                />
              </div>
            </section>
          </>
        )}

        {/* PRODUCTS PAGE */}
        {page === "products" && (
          <>
            <h2 className="section-title">Phase-1 Products</h2>
            <p className="section-subtitle">
              Start lean and focus on a few high-rotation SKUs that sell every
              month in Karachi households and offices.
            </p>

            <div className="products-grid">
              <article
                className="product-card float-card"
                onClick={() =>
                  openWA("I want to order SafaayiCo Facial Tissues.")
                }
              >
                <img
                  className="product-image float-card"
                  src="https://images.pexels.com/photos/5591870/pexels-photo-5591870.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Tissues"
                />
                <h3 className="product-title">Facial Tissues</h3>
                <p className="product-text">
                  Soft, strong tissue boxes for homes, offices and cafés. High
                  repeat usage, easy to ship and store.
                </p>
                <div className="product-meta">
                  Target price: Rs 160–200 / box
                </div>
              </article>

              <article
                className="product-card float-card"
                onClick={() =>
                  openWA("I want to order SafaayiCo Garbage Bags.")
                }
              >
                <img
                  className="product-image float-card"
                  src="https://images.pexels.com/photos/3735213/pexels-photo-3735213.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Garbage bags"
                />
                <h3 className="product-title">Garbage Bags</h3>
                <p className="product-text">
                  Leak-resistant rolls for kitchens and apartments. Medium and
                  large sizes for Karachi usage.
                </p>
                <div className="product-meta">
                  Target price: Rs 250–450 / roll
                </div>
              </article>

              <article
                className="product-card float-card"
                onClick={() =>
                  openWA("I want to order SafaayiCo Zip-Lock Bags.")
                }
              >
                <img
                  className="product-image float-card"
                  src="https://images.pexels.com/photos/7319191/pexels-photo-7319191.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Ziplock bags"
                />
                <h3 className="product-title">Zip-Lock Bags</h3>
                <p className="product-text">
                  Resealable storage for snacks, spices and small items. Perfect
                  for bundles and family packs.
                </p>
                <div className="product-meta">
                  Target price: Rs 250–300 / pack
                </div>
              </article>
            </div>
          </>
        )}

        {/* CONTACT PAGE */}
        {page === "contact" && (
          <>
            <h2 className="section-title">Contact & Launch Planning</h2>
            <p className="section-subtitle">
              SafaayiCo will launch after QuantumTech and StudiesMate are
              stable. Use WhatsApp for supplier discussions, bundles and phase-1
              launch planning.
            </p>

            <button
              className="btn-secondary btn-hover"
              onClick={() =>
                openWA("I want to discuss SafaayiCo launch planning.")
              }
            >
              Chat on WhatsApp
            </button>
          </>
        )}

        {/* FOOTER */}
        <footer className="footer">
          © {new Date().getFullYear()} SafaayiCo · Karachi
        </footer>
      </div>
    </div>
  );
}
