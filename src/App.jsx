import React, { useState } from "react";

/* ✅ CHANGE YOUR WHATSAPP NUMBER HERE */
const WHATSAPP = "https://wa.me/923001234567";

const openWA = (msg) => {
  window.open(`${WHATSAPP}?text=${encodeURIComponent(msg)}`, "_blank");
};

export default function App() {
  const [page, setPage] = useState("home");

  return (
    <div
      style={{
        fontFamily: "system-ui, sans-serif",
        backgroundColor: "#f4f6f8",
        minHeight: "100vh",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: 24 }}>
        {/* NAVBAR */}
        <header
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 40,
          }}
        >
          <div style={{ fontSize: 22, fontWeight: 800 }}>SafaayiCo</div>

          <nav style={{ display: "flex", gap: 24 }}>
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
            <h1 style={{ marginBottom: 12 }}>
              Daily-use consumables, zero health risk
            </h1>

            <p style={{ maxWidth: 600, marginBottom: 20 }}>
              SafaayiCo provides safe, repeat-purchase household and office
              essentials. No food, no skincare, no chemicals — only simple,
              dependable products.
            </p>

            <button
              className="btn-hover"
              onClick={() =>
                openWA("Hi, I want to order SafaayiCo products.")
              }
              style={{
                padding: "12px 20px",
                borderRadius: 999,
                border: "none",
                background: "#2563eb",
                color: "#fff",
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              Order on WhatsApp
            </button>
          </>
        )}

        {/* PRODUCTS PAGE */}
        {page === "products" && (
          <>
            <h2 style={{ marginBottom: 20 }}>Products</h2>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(250px,1fr))",
                gap: 20,
              }}
            >
              {/* PRODUCT CARD */}
              <div
                className="float-card"
                onClick={() =>
                  openWA("I want to order SafaayiCo Facial Tissues.")
                }
                style={{
                  background: "#fff",
                  padding: 18,
                  borderRadius: 12,
                  cursor: "pointer",
                }}
              >
                <img
                  className="float-card"
                  src="https://images.pexels.com/photos/5591870/pexels-photo-5591870.jpeg"
                  alt="Tissues"
                  style={{
                    width: "100%",
                    height: 160,
                    objectFit: "cover",
                    borderRadius: 8,
                    marginBottom: 10,
                  }}
                />
                <h3>Facial Tissues</h3>
                <p>Soft, high-usage everyday tissues.</p>
              </div>

              <div
                className="float-card"
                onClick={() =>
                  openWA("I want to order SafaayiCo Garbage Bags.")
                }
                style={{
                  background: "#fff",
                  padding: 18,
                  borderRadius: 12,
                  cursor: "pointer",
                }}
              >
                <img
                  className="float-card"
                  src="https://images.pexels.com/photos/3735213/pexels-photo-3735213.jpeg"
                  alt="Garbage bags"
                  style={{
                    width: "100%",
                    height: 160,
                    objectFit: "cover",
                    borderRadius: 8,
                    marginBottom: 10,
                  }}
                />
                <h3>Garbage Bags</h3>
                <p>Leak-resistant bags for home & office.</p>
              </div>

              <div
                className="float-card"
                onClick={() =>
                  openWA("I want to order SafaayiCo Zip-Lock Bags.")
                }
                style={{
                  background: "#fff",
                  padding: 18,
                  borderRadius: 12,
                  cursor: "pointer",
                }}
              >
                <img
                  className="float-card"
                  src="https://images.pexels.com/photos/7319191/pexels-photo-7319191.jpeg"
                  alt="Ziplock"
                  style={{
                    width: "100%",
                    height: 160,
                    objectFit: "cover",
                    borderRadius: 8,
                    marginBottom: 10,
                  }}
                />
                <h3>Zip-Lock Bags</h3>
                <p>Reusable storage bags for food & items.</p>
              </div>
            </div>
          </>
        )}

        {/* CONTACT PAGE */}
        {page === "contact" && (
          <>
            <h2>Contact & Launch</h2>

            <p style={{ maxWidth: 600 }}>
              SafaayiCo is a future consumables brand. Use this channel for
              supplier discussions, bundles and pricing planning.
            </p>

            <button
              className="btn-hover"
              onClick={() =>
                openWA("I want to discuss SafaayiCo launch planning.")
              }
              style={{
                marginTop: 16,
                padding: "12px 20px",
                borderRadius: 999,
                border: "none",
                background: "#2563eb",
                color: "#fff",
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              Chat on WhatsApp
            </button>
          </>
        )}

        {/* FOOTER */}
        <footer
          style={{
            marginTop: 50,
            paddingTop: 16,
            borderTop: "1px solid #ddd",
            fontSize: 13,
            color: "#555",
          }}
        >
          © {new Date().getFullYear()} SafaayiCo · Karachi
        </footer>
      </div>
    </div>
  );
}
