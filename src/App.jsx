// src/App.jsx
const WHATSAPP_NUMBER = "03332820021";
const WA_LINK = `https://wa.me/92${WHATSAPP_NUMBER.slice(
  1
)}?text=Hello%20SafaayiCo%2C%20I%20want%20to%20know%20about%20your%20products.`;

// Simple one-page layout (no React state needed)
export default function App() {
  return (
    <div className="app">
      {/* TOP NAVBAR */}
      <header className="navbar">
        <div className="logo-block">
          <div className="logo-circle">S</div>
          <div>
            <div className="logo-text">SafaayiCo</div>
            <div className="logo-sub">Daily-use consumables brand</div>
          </div>
        </div>

        <nav className="nav-links">
          <a href="#home" className="nav-link">
            Home
          </a>
          <a href="#products" className="nav-link">
            Products
          </a>
          <a href="#contact" className="nav-link">
            Contact
          </a>
        </nav>
      </header>

      <main>
        {/* ================= HOME / HERO ================= */}
        <section id="home" className="section hero">
          <div className="hero-text">
            <div className="pill">Karachi · Home & Office Essentials</div>

            <h1>
              Daily-use consumables,{" "}
              <span className="highlight">zero health risk.</span>
            </h1>

            <p className="hero-lead">
              SafaayiCo is a future consumables brand from Karachi. The focus is
              simple: safe, non-health products that people use every day –
              tissues, garbage bags, storage bags and basic stationery. Easy to
              store, easy to ship, easy to repeat every month.
            </p>

            <div className="hero-actions">
              <a href={WA_LINK} target="_blank" className="btn btn-primary">
                Order on WhatsApp
              </a>
              <a href="#products" className="btn btn-ghost">
                View product range
              </a>
            </div>

            <div className="founder-line">
              Founder &amp; CEO: <strong>Umar</strong> · 📞 {WHATSAPP_NUMBER}
            </div>
          </div>

          <div className="hero-image float-card">
            <img
              src="https://images.pexels.com/photos/5591870/pexels-photo-5591870.jpeg"
              alt="Neatly arranged household essentials"
            />
          </div>
        </section>

        {/* ================= WHY SECTION ================= */}
        <section className="section why">
          <h2>Why SafaayiCo?</h2>
          <p className="section-sub">
            The brand is designed to be low-risk for the business and high-trust
            for the customer.
          </p>

          <div className="why-grid">
            <div className="why-card">
              <h3>Locked, safe scope</h3>
              <p>
                No creams, no oils, no medicine, no food. Only non-health,
                non-perishable items like tissues, trash bags and zip-lock bags.
              </p>
            </div>
            <div className="why-card">
              <h3>Repeat-purchase engine</h3>
              <p>
                Every SKU is something homes, cafés and offices finish and
                re-order. The goal is stable, monthly repeat orders.
              </p>
            </div>
            <div className="why-card">
              <h3>Calm operations</h3>
              <p>
                No cold storage, no expiry panic, no risky inventory. Simple
                storage and predictable logistics so operations stay calm.
              </p>
            </div>
          </div>
        </section>

        {/* ================= PRODUCTS SECTION ================= */}
        <section id="products" className="section products">
          <h2>Phase-1 Product Line</h2>
          <p className="section-sub">
            Initial set of SKUs designed for high rotation in Karachi homes and
            small businesses.
          </p>

          <div className="product-grid">
            {/* Tissues */}
            <article className="product-card float-card">
              <div className="product-tag">Paper &amp; Hygiene</div>
              <img
                src="https://images.pexels.com/photos/3962287/pexels-photo-3962287.jpeg"
                alt="Box of facial tissues"
                className="product-image"
              />
              <h3>Facial Tissues</h3>
              <p>
                Soft, strong facial tissues suitable for homes, cafés and
                offices. Cleanly packed, no perfume, no skin-risk claims.
              </p>
              <ul className="product-meta">
                <li>150–200 sheets / box</li>
                <li>Target price: Rs 160–200 / box</li>
                <li>Ideal for: homes, clinics, offices</li>
              </ul>
            </article>

            {/* Garbage bags */}
            <article className="product-card float-card">
              <div className="product-tag">Home Utility</div>
              <img
                src="https://images.pexels.com/photos/8505030/pexels-photo-8505030.jpeg"
                alt="Garbage bags"
                className="product-image"
              />
              <h3>Heavy-Duty Garbage Bags</h3>
              <p>
                Leak-resistant medium and large garbage bags for kitchens,
                apartments and restaurants. Rolled, easy to store and ship.
              </p>
              <ul className="product-meta">
                <li>Medium &amp; large sizes</li>
                <li>Target price: Rs 250–450 / roll</li>
                <li>Ideal for: homes, cafés, restaurants</li>
              </ul>
            </article>

            {/* Zip-lock bags */}
            <article className="product-card float-card">
              <div className="product-tag">Storage &amp; Organising</div>
              <img
                src="https://images.pexels.com/photos/7262562/pexels-photo-7262562.jpeg"
                alt="Zip lock storage bags"
                className="product-image"
              />
              <h3>Zip-Lock Storage Bags</h3>
              <p>
                Resealable storage bags for snacks, spices and small items.
                Perfect for bundle packs and pantry organisation.
              </p>
              <ul className="product-meta">
                <li>Food-safe material</li>
                <li>Target price: Rs 250–300 / pack</li>
                <li>Ideal for: homes, bakers, small shops</li>
              </ul>
            </article>
          </div>
        </section>

        {/* ================= CONTACT SECTION ================= */}
        <section id="contact" className="section contact">
          <h2>Contact &amp; Future Launch</h2>
          <p className="section-sub">
            SafaayiCo is planned as a calm, long-term consumables brand. For
            early interest, supply discussions or collaboration:
          </p>

          <div className="contact-card">
            <div>
              <div className="contact-label">Founder</div>
              <div className="contact-name">Umar</div>
              <div className="contact-detail">Based in Karachi, Pakistan</div>
              <div className="contact-detail">
                WhatsApp: <strong>{WHATSAPP_NUMBER}</strong>
              </div>
            </div>
            <a href={WA_LINK} target="_blank" className="btn btn-primary">
              WhatsApp Umar
            </a>
          </div>

          <div className="footer">
            © 2025 SafaayiCo · Karachi · Future consumables brand by Umar
          </div>
        </section>
      </main>
    </div>
  );
}
