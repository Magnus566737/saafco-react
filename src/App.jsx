import React, { useState } from "react";

/* ✅ Your WhatsApp number */
const WHATSAPP = "https://wa.me/923332820021";

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
                  essentials for Karachi. No food, no skincare, no chemicals —
                  only simple, dependable products that are easy to store and
                  ship.
                </p>
                <p
                  style={{
                    fontSize: 13,
                    color: "#9ca3af",
                    marginTop: 8,
                    marginBottom: 4,
                  }}
                >
                  Founded and led by <strong>Umar</strong>, CEO of SafaayiCo.
                </p>

                <button
                  className="btn-primary btn-hover"
                  onClick={() =>
                    openWA(
                      "Assalamualaikum Umar, I’m interested in SafaayiCo products."
                    )
                  }
                >
                  Order on WhatsApp
                </button>
              </div>

              <div className="hero-image-wrapper float-card">
                {/* Hero image – tissues / hygiene */}
                <img
                  src="https://images.pexels.com/photos/3873176/pexels-photo-3873176.jpeg?auto=compress&cs=tinysrgb&w=900"
                  alt="Tissues and hygiene products"
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
              High-rotation SKUs that homes, cafés and offices in Karachi buy
              again and again. Each item is chosen to be safe, simple and
              repeatable.
            </p>

            <div className="products-grid">
              {/* FACIAL TISSUES */}
              <article
                className="product-card float-card"
                onClick={() =>
                  openWA(
                    "Umar, I want to know more about SafaayiCo Facial Tissues."
                  )
                }
              >
                <img
                  className="product-image float-card"
                  src="https://images.pexels.com/photos/3873176/pexels-photo-3873176.jpeg?auto=compress&cs=tinysrgb&w=900"
                  alt="Facial tissues"
                />
                <h3 className="product-title">Facial Tissues</h3>
                <p className="product-text">
                  Soft, strong facial tissues for homes, offices and cafés.
                  Perfect daily-use consumable with stable demand.
                </p>
                <div className="product-meta">
                  Target price: Rs 160–200 / box · High repeat usage
                </div>
              </article>

              {/* GARBAGE BAGS */}
              <article
                className="product-card float-card"
                onClick={() =>
                  openWA("Umar, I want to order SafaayiCo Garbage Bags.")
                }
              >
                <img
                  className="product-image float-card"
                  src="https://images.pexels.com/photos/3735213/pexels-photo-3735213.jpeg?auto=compress&cs=tinysrgb&w=900"
                  alt="Garbage bags"
                />
                <h3 className="product-title">Heavy-Duty Garbage Bags</h3>
                <p className="product-text">
                  Leak-resistant medium and large rolls for kitchens, homes and
                  restaurants. Easy to stack, easy to ship.
                </p>
                <div className="product-meta">
                  Target price: Rs 250–450 / roll · Medium &amp; large sizes
                </div>
              </article>

              {/* ZIP-LOCK BAGS */}
              <article
                className="product-card float-card"
                onClick={() =>
                  openWA("Umar, I want to order SafaayiCo Zip-Lock Bags.")
                }
              >
                <img
                  className="product-image float-card"
                  src="https://images.pexels.com/photos/7319191/pexels-photo-7319191.jpeg?auto=compress&cs=tinysrgb&w=900"
                  alt="Zip-lock bags"
                />
                <h3 className="product-title">Zip-Lock Storage Bags</h3>
                <p className="product-text">
                  Resealable food-safe storage bags for snacks, spices and small
                  items. Great for family bundles and office pantry packs.
                </p>
                <div className="product-meta">
                  Target price: Rs 250–300 / pack · Resealable &amp; reusable
                </div>
              </article>
            </div>
          </>
        )}

        {/* CONTACT / FOUNDER PAGE */}
        {page === "contact" && (
          <>
            <h2 className="section-title">Contact & Founder</h2>
            <p className="section-subtitle">
              SafaayiCo is a future consumables brand built as a calm, repeat
              business. For supplier discussions, pricing or launch planning,
              you can contact the founder directly.
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "minmax(0, 1.1fr) minmax(0, 0.9fr)",
                gap: 20,
                alignItems: "flex-start",
              }}
            >
              {/* LEFT – CONTACT INFO */}
              <div>
                <h3 style={{ marginTop: 0, marginBottom: 10 }}>Talk to Umar</h3>
                <p
                  style={{
                    fontSize: 14,
                    color: "#cbd5f5",
                    marginTop: 0,
                    marginBottom: 10,
                  }}
                >
                  <strong>Umar</strong> · Founder &amp; CEO, SafaayiCo
                  <br />
                  Based in Karachi · Building low-risk, repeat consumables
                  brands after QuantumTech and StudiesMate.
                </p>
                <p
                  style={{
                    fontSize: 14,
                    color: "#cbd5f5",
                    marginTop: 0,
                    marginBottom: 14,
                  }}
                >
                  WhatsApp: <strong>0333 2820021</strong>
                </p>

                <button
                  className="btn-secondary btn-hover"
                  onClick={() =>
                    openWA(
                      "Assalamualaikum Umar, I’d like to discuss SafaayiCo (supplies / launch / partnership)."
                    )
                  }
                >
                  Chat with Umar on WhatsApp
                </button>
              </div>

              {/* RIGHT – FOUNDER CARD */}
              <div
                className="float-card"
                style={{
                  background: "#020617",
                  borderRadius: 16,
                  padding: 16,
                  border: "1px solid rgba(148, 163, 184, 0.6)",
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                }}
              >
                <img
                  src="https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Founder"
                  style={{
                    width: 80,
                    height: 80,
                    borderRadius: "50%",
                    objectFit: "cover",
                  }}
                />
                <div>
                  <div style={{ fontWeight: 700, marginBottom: 4 }}>Umar</div>
                  <div
                    style={{
                      fontSize: 13,
                      color: "#cbd5f5",
                      marginBottom: 6,
                    }}
                  >
                    Founder &amp; CEO · SafaayiCo
                  </div>
                  <div style={{ fontSize: 12, color: "#9ca3af" }}>
                    Focused on building simple, low-risk consumable brands with
                    strong repeat customers and calm operations.
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {/* FOOTER */}
        <footer className="footer">
          © {new Date().getFullYear()} SafaayiCo · Karachi · Founded by Umar
        </footer>
      </div>
    </div>
  );
}
