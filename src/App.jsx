import React, { useState } from "react";

/* ====== CHANGE WHATSAPP NUMBER HERE ====== */
const WHATSAPP = "https://wa.me/923001234567";

const openWA = (msg) =>
  window.open(`${WHATSAPP}?text=${encodeURIComponent(msg)}`, "_blank");

/* ====== STYLES ====== */
const page = {
  fontFamily: "system-ui, sans-serif",
  background: "#f4f6f8",
  minHeight: "100vh",
};

const container = {
  maxWidth: "1100px",
  margin: "0 auto",
  padding: "20px",
};

const nav = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "40px",
};

const logo = {
  fontWeight: 800,
  fontSize: 22,
};

const navLinks = {
  display: "flex",
  gap: "24px",
};

const link = (active) => ({
  background: "none",
  border: "none",
  cursor: "pointer",
  fontSize: 15,
  fontWeight: 500,
  position: "relative",
  paddingBottom: 6,
  color: active ? "#2563eb" : "#111",
  outline: "none",
});

const underline = {
  content: '""',
  position: "absolute",
  bottom: 0,
  left: 0,
  height: 3,
  width: "100%",
  background: "#2563eb",
  borderRadius: 3,
};

const card = {
  background: "#fff",
  borderRadius: 14,
  padding: 18,
  transition: "all 0.25s ease",
  cursor: "pointer",
};

const cardHover = {
  transform: "translateY(-6px)",
  boxShadow: "0 12px 24px rgba(0,0,0,.12)",
};

const imgStyle = {
  width: "100%",
  height: 160,
  objectFit: "cover",
  borderRadius: 10,
  marginBottom: 12,
};

const button = {
  marginTop: 10,
  padding: "10px 16px",
  borderRadius: 999,
  border: "none",
  background: "#2563eb",
  color: "#fff",
  fontWeight: 600,
  cursor: "pointer",
  transition: "all .25s ease",
};

const buttonHover = {
  transform: "translateY(-3px)",
  boxShadow: "0 8px 14px rgba(0,0,0,.15)",
};

/* ====== APP ====== */
export default function App() {
  const [pageName, setPage] = useState("home");
  const [hover, setHover] = useState(null);
  const [btnHover, setBtnHover] = useState(false);

  return (
    <div style={page}>
      <div style={container}>
        {/* NAVBAR */}
        <header style={nav}>
          <div style={logo}>SafaayiCo</div>
          <nav style={navLinks}>
            {["home", "products", "contact"].map((p) => (
              <button key={p} style={link(pageName === p)} onClick={() => setPage(p)}>
                {p.charAt(0).toUpperCase() + p.slice(1)}
                {pageName === p && <span style={underline} />}
              </button>
            ))}
          </nav>
        </header>

        {/* HOME */}
        {pageName === "home" && (
          <>
            <h1>Daily-use consumables, zero health risk.</h1>
            <p>
              SafaayiCo provides safe, repeat-purchase household essentials.
              No food. No chemicals. No skincare.
            </p>

            <button
              style={{ ...button, ...(btnHover ? buttonHover : {}) }}
              onMouseEnter={() => setBtnHover(true)}
              onMouseLeave={() => setBtnHover(false)}
              onClick={() => openWA("I want to order SafaayiCo products")}
            >
              Order on WhatsApp
            </button>
          </>
        )}

        {/* PRODUCTS */}
        {pageName === "products" && (
          <>
            <h2>Products</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))", gap: 20 }}>
              {[
                {
                  t: "Facial Tissues",
                  img: "https://images.pexels.com/photos/5591870/pexels-photo-5591870.jpeg",
                },
                {
                  t: "Garbage Bags",
                  img: "https://images.pexels.com/photos/3735213/pexels-photo-3735213.jpeg",
                },
                {
                  t: "Zip-Lock Bags",
                  img: "https://images.pexels.com/photos/7319191/pexels-photo-7319191.jpeg",
                },
              ].map((p, i) => (
                <div
                  key={i}
                  style={{ ...card, ...(hover === i ? cardHover : {}) }}
                  onMouseEnter={() => setHover(i)}
                  onMouseLeave={() => setHover(null)}
                  onClick={() => openWA(`I want ${p.t}`)}
                >
                  <img src={p.img} alt={p.t} style={imgStyle} />
                  <h3>{p.t}</h3>
                  <p>High rotation, everyday essential.</p>
                </div>
              ))}
            </div>
          </>
        )}

        {/* CONTACT */}
        {pageName === "contact" && (
          <>
            <h2>Contact</h2>
            <p>Launch planning, suppliers & bundles.</p>
            <button
              style={{ ...button, ...(btnHover ? buttonHover : {}) }}
              onMouseEnter={() => setBtnHover(true)}
              onMouseLeave={() => setBtnHover(false)}
              onClick={() => openWA("I want to discuss SafaayiCo")}
            >
              WhatsApp Us
            </button>
          </>
        )}
      </div>
    </div>
  );
}
