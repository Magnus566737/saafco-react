import React from "react";

const page = {
  fontFamily: "-apple-system, BlinkMacSystemFont, system-ui, sans-serif",
  backgroundColor: "#0f172a",
  minHeight: "100vh",
  margin: 0,
};

const shell = {
  maxWidth: "1040px",
  margin: "0 auto",
  padding: "24px 16px 40px",
};

const navBar = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginBottom: "32px",
};

const brandBlock = {
  display: "flex",
  alignItems: "center",
  gap: 10,
};

const brandIcon = {
  width: 36,
  height: 36,
  borderRadius: 12,
  background: "linear-gradient(135deg,#22c55e,#16a3ff)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#ffffff",
  fontWeight: 800,
  fontSize: 20,
};

const navLinks = {
  display: "flex",
  gap: 20,
  fontSize: 14,
  color: "#cbd5f5",
};

const heroSection = {
  display: "grid",
  gridTemplateColumns: "minmax(0,1.2fr) minmax(0,1fr)",
  gap: 32,
  alignItems: "center",
  marginBottom: 40,
};

const heroBadge = {
  display: "inline-block",
  padding: "4px 10px",
  borderRadius: 999,
  backgroundColor: "rgba(148,163,184,0.15)",
  color: "#e5e7eb",
  fontSize: 11,
  letterSpacing: "0.09em",
  textTransform: "uppercase",
  fontWeight: 600,
};

const heroTitle = {
  fontSize: 36,
  lineHeight: 1.1,
  color: "#f9fafb",
  margin: "14px 0 10px",
};

const heroText = {
  fontSize: 15,
  color: "#cbd5f5",
  maxWidth: 520,
  lineHeight: 1.6,
  marginBottom: 18,
};

const heroSub = {
  fontSize: 13,
  color: "#9ca3af",
  marginBottom: 18,
};

const heroButtons = {
  display: "flex",
  flexWrap: "wrap",
  gap: 12,
  marginBottom: 14,
};

const primaryBtn = {
  padding: "10px 18px",
  borderRadius: 999,
  border: "none",
  fontSize: 14,
  fontWeight: 600,
  cursor: "pointer",
  background: "linear-gradient(135deg,#22c55e,#16a3ff)",
  color: "#0b1120",
};

const secondaryBtn = {
  padding: "10px 18px",
  borderRadius: 999,
  border: "1px solid rgba(148,163,184,0.6)",
  fontSize: 14,
  fontWeight: 500,
  cursor: "pointer",
  background: "transparent",
  color: "#e5e7eb",
};

const heroMeta = {
  display: "flex",
  flexWrap: "wrap",
  gap: 12,
  fontSize: 12,
  color: "#9ca3af",
};

const heroCard = {
  background:
    "radial-gradient(circle at top left, rgba(56,189,248,0.25), transparent 55%), radial-gradient(circle at bottom right, rgba(74,222,128,0.2), #020617)",
  borderRadius: 18,
  padding: 20,
  border: "1px solid rgba(148,163,184,0.25)",
  color: "#e5e7eb",
};

const chip = {
  display: "inline-block",
  padding: "4px 10px",
  borderRadius: 999,
  background: "rgba(15,23,42,0.6)",
  fontSize: 11,
  textTransform: "uppercase",
  letterSpacing: "0.08em",
};

const productSection = {
  marginTop: 12,
};

const sectionTitleRow = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginBottom: 12,
};

const sectionTitle = {
  fontSize: 20,
  color: "#f9fafb",
};

const sectionSub = {
  fontSize: 13,
  color: "#9ca3af",
  marginBottom: 16,
};

const productGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(230px,1fr))",
  gap: 18,
};

const card = {
  backgroundColor: "#020617",
  borderRadius: 14,
  padding: 16,
  border: "1px solid rgba(148,163,184,0.55)",
};

const cardBadgeRow = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginBottom: 8,
};

const tagBadge = {
  padding: "4px 9px",
  borderRadius: 999,
  backgroundColor: "rgba(37,99,235,0.15)",
  color: "#bfdbfe",
  fontSize: 11,
  textTransform: "uppercase",
  letterSpacing: "0.08em",
};

const labelBadge = {
  padding: "4px 9px",
  borderRadius: 999,
  backgroundColor: "rgba(34,197,94,0.18)",
  color: "#bbf7d0",
  fontSize: 11,
};

const cardTitle = {
  fontSize: 16,
  color: "#e5e7eb",
  marginBottom: 4,
};

const cardText = {
  fontSize: 13,
  color: "#9ca3af",
  marginBottom: 8,
};

const priceRow = {
  display: "flex",
  gap: 8,
  alignItems: "baseline",
  marginBottom: 10,
};

const price = {
  fontSize: 15,
  fontWeight: 600,
  color: "#f9fafb",
};

const oldPrice = {
  fontSize: 13,
  color: "#64748b",
  textDecoration: "line-through",
};

const tagRow = {
  display: "flex",
  flexWrap: "wrap",
  gap: 6,
  fontSize: 11,
  color: "#6b7280",
  marginBottom: 10,
};

const pill = {
  padding: "3px 8px",
  borderRadius: 999,
  border: "1px solid rgba(75,85,99,0.6)",
};

const cardButtons = {
  display: "flex",
  gap: 8,
};

const smallPrimary = {
  ...primaryBtn,
  padding: "8px 12px",
  fontSize: 12,
};

const smallGhost = {
  ...secondaryBtn,
  padding: "8px 12px",
  fontSize: 12,
  borderColor: "rgba(55,65,81,0.9)",
};

const infoStrip = {
  fontSize: 12,
  color: "#9ca3af",
  marginTop: 18,
};

const footer = {
  marginTop: 32,
  borderTop: "1px solid rgba(30,64,175,0.4)",
  paddingTop: 16,
  fontSize: 12,
  color: "#6b7280",
  display: "flex",
  justifyContent: "space-between",
  flexWrap: "wrap",
  gap: 10,
};

const App = () => {
  const handleWhatsApp = () => {
    window.location.href = "https://wa.me/923001234567"; // TODO: replace with real number
  };

  const scrollToProducts = () => {
    const el = document.getElementById("products");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div style={page}>
      <div style={shell}>
        {/* NAV */}
        <header style={navBar}>
          <div style={brandBlock}>
            <div style={brandIcon}>S</div>
            <div>
              <div
                style={{
                  color: "#f9fafb",
                  fontWeight: 700,
                  fontSize: 18,
                  letterSpacing: "0.02em",
                }}
              >
                SafaayiCo
              </div>
              <div style={{ color: "#9ca3af", fontSize: 12 }}>
                Everyday Essentials, Made Simple
              </div>
            </div>
          </div>

          <nav style={navLinks}>
            <a
              href="#top"
              style={{ color: "inherit", textDecoration: "none", cursor: "pointer" }}
            >
              Home
            </a>
            <a
              href="#products"
              style={{ color: "inherit", textDecoration: "none", cursor: "pointer" }}
            >
              Products
            </a>
            <button
              onClick={scrollToContact}
              style={{
                color: "#cbd5f5",
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: 0,
              }}
            >
              Contact
            </button>
          </nav>
        </header>

        {/* HERO */}
        <main id="top">
          <section style={heroSection}>
            <div>
              <div style={heroBadge}>Karachi · Home & Office Essentials</div>
              <h1 style={heroTitle}>
                Stock up on{" "}
                <span style={{ color: "#38bdf8" }}>clean, safe consumables</span>{" "}
                with zero health risk.
              </h1>
              <p style={heroText}>
                SafaayiCo curates simple, non-risk daily-use products: tissues,
                garbage bags, zip-lock bags and cleaning supplies. Built for
                homes, offices and small businesses in Karachi that want
                reliable monthly restocking.
              </p>
              <p style={heroSub}>
                No creams, no food, no chemicals. Only paper, hygiene and
                storage essentials that are easy to store and ship.
              </p>

              <div style={heroButtons}>
                <button style={primaryBtn} onClick={handleWhatsApp}>
                  Order on WhatsApp
                </button>
                <button style={secondaryBtn} onClick={scrollToProducts}>
                  Browse essentials
                </button>
              </div>

              <div style={heroMeta}>
                <span>✔ Repeat-purchase items only</span>
                <span>✔ Low storage & shipping complexity</span>
                <span>✔ Perfect for Karachi households & offices</span>
              </div>
            </div>

            <aside style={heroCard}>
              <div style={chip}>Future Consumables Brand · Locked Plan</div>
              <h2 style={{ marginTop: 12, marginBottom: 10, fontSize: 18 }}>
                Launch Scope for SafaayiCo
              </h2>
              <ul
                style={{
                  paddingLeft: 18,
                  margin: 0,
                  fontSize: 13,
                  lineHeight: 1.7,
                  color: "#e5e7eb",
                }}
              >
                <li>
                  <strong>Paper & Hygiene</strong>: facial tissues, kitchen
                  rolls, paper towels, basic wet wipes.
                </li>
                <li>
                  <strong>Home Utility</strong>: garbage bags, trash liners,
                  zip-lock & food storage bags, foil, cling wrap.
                </li>
                <li>
                  <strong>Office & School</strong>: notebooks, copy paper, pens,
                  markers, sticky notes.
                </li>
                <li>
                  <strong>Household Essentials</strong>: disposable gloves,
                  cleaning cloths, small bins, plastic organizers.
                </li>
              </ul>
              <p
                style={{
                  marginTop: 10,
                  fontSize: 12,
                  color: "#9ca3af",
                }}
              >
                Excluded now and in future: skincare, haircare, cosmetics,
                medicinal items, food or anything with health or life risk.
              </p>
            </aside>
          </section>

          {/* FEATURED PRODUCTS */}
          <section id="products" style={productSection}>
            <div style={sectionTitleRow}>
              <h2 style={sectionTitle}>Featured SafaayiCo Essentials</h2>
              <button style={secondaryBtn} onClick={handleWhatsApp}>
                Get full price list
              </button>
            </div>
            <p style={sectionSub}>
              Discover handpicked consumables that families and offices in
              Karachi buy every month. Start lean, repeat fast.
            </p>

            <div style={productGrid}>
              {/* Product 1 */}
              <article style={card}>
                <div style={cardBadgeRow}>
                  <span style={tagBadge}>Bestseller</span>
                  <span style={labelBadge}>Paper & Hygiene</span>
                </div>
                <h3 style={cardTitle}>Premium Facial Tissues (Box)</h3>
                <p style={cardText}>
                  Soft, strong tissue boxes ideal for living rooms, offices and
                  cafés. Clean, neutral packaging that fits anywhere.
                </p>
                <div style={priceRow}>
                  <span style={price}>Rs 170</span>
                  <span style={oldPrice}>Rs 199</span>
                </div>
                <div style={tagRow}>
                  <span style={pill}>150 sheets</span>
                  <span style={pill}>Soft & strong</span>
                  <span style={pill}>High repeat usage</span>
                </div>
                <div style={cardButtons}>
                  <button style={smallPrimary} onClick={handleWhatsApp}>
                    Order on WhatsApp
                  </button>
                  <button style={smallGhost} onClick={scrollToContact}>
                    Ask for bulk pricing
                  </button>
                </div>
              </article>

              {/* Product 2 */}
              <article style={card}>
                <div style={cardBadgeRow}>
                  <span style={tagBadge}>Family Pack</span>
                  <span style={labelBadge}>Home Utility</span>
                </div>
                <h3 style={cardTitle}>Heavy-Duty Garbage Bag Rolls</h3>
                <p style={cardText}>
                  Small, medium and large trash bags for homes and apartments.
                  Leak-resistant and strong enough for Karachi households.
                </p>
                <div style={priceRow}>
                  <span style={price}>Rs 280–420</span>
                  <span style={oldPrice}>Rs 320–480</span>
                </div>
                <div style={tagRow}>
                  <span style={pill}>S / M / L sizes</span>
                  <span style={pill}>Thick material</span>
                  <span style={pill}>Kitchen & society use</span>
                </div>
                <div style={cardButtons}>
                  <button style={smallPrimary} onClick={handleWhatsApp}>
                    Order on WhatsApp
                  </button>
                  <button style={smallGhost} onClick={scrollToContact}>
                    Add to monthly bundle
                  </button>
                </div>
              </article>

              {/* Product 3 */}
              <article style={card}>
                <div style={cardBadgeRow}>
                  <span style={tagBadge}>New</span>
                  <span style={labelBadge}>Storage</span>
                </div>
                <h3 style={cardTitle}>Zip-Lock Food & Storage Bags</h3>
                <p style={cardText}>
                  Resealable, food-safe bags for snacks, school lunch, spices
                  and small items. Perfect for parents and small offices.
                </p>
                <div style={priceRow}>
                  <span style={price}>Rs 260–320</span>
                </div>
                <div style={tagRow}>
                  <span style={pill}>20–30 pcs pack</span>
                  <span style={pill}>Food-safe</span>
                  <span style={pill}>Kitchen & travel</span>
                </div>
                <div style={cardButtons}>
                  <button style={smallPrimary} onClick={handleWhatsApp}>
                    Order on WhatsApp
                  </button>
                  <button style={smallGhost} onClick={scrollToContact}>
                    View combo deals
                  </button>
                </div>
              </article>

              {/* Product 4 */}
              <article style={card}>
                <div style={cardBadgeRow}>
                  <span style={tagBadge}>Starter</span>
                  <span style={labelBadge}>Household Essentials</span>
                </div>
                <h3 style={cardTitle}>Microfiber Cleaning Cloth Pack</h3>
                <p style={cardText}>
                  Reusable microfiber cloths for dusting, kitchen counters and
                  glass. Less waste compared to disposable wipes.
                </p>
                <div style={priceRow}>
                  <span style={price}>Rs 220–280</span>
                </div>
                <div style={tagRow}>
                  <span style={pill}>Pack of 3–5</span>
                  <span style={pill}>Machine washable</span>
                  <span style={pill}>Home & office</span>
                </div>
                <div style={cardButtons}>
                  <button style={smallPrimary} onClick={handleWhatsApp}>
                    Order on WhatsApp
                  </button>
                  <button style={smallGhost} onClick={scrollToContact}>
                    Bundle with tissues
                  </button>
                </div>
              </article>
            </div>

            <p style={infoStrip}>
              All products above are part of the locked future scope for
              SafaayiCo. Actual pricing and SKUs will be finalized when the
              brand is launched after QuantumTech and StudiesMate are stable.
            </p>
          </section>

          {/* CONTACT */}
          <section id="contact" style={{ marginTop: 32 }}>
            <h2 style={sectionTitle}>Contact & Launch Plan</h2>
            <p style={sectionSub}>
              SafaayiCo is designed as a calm, low-risk consumables brand for
              later. Use this site as a planning base for suppliers, packaging
              and bundles.
            </p>
            <div
              style={{
                backgroundColor: "#020617",
                borderRadius: 14,
                border: "1px solid rgba(37,99,235,0.6)",
                padding: 18,
                fontSize: 13,
                color: "#e5e7eb",
              }}
            >
              <ul
                style={{
                  margin: 0,
                  paddingLeft: 18,
                  lineHeight: 1.7,
                }}
              >
                <li>Lock 3–5 main SKUs for launch (tissues, bags, zip-locks).</li>
                <li>
                  Finalize packaging and suppliers while QuantumTech & StudiesMate
                  grow.
                </li>
                <li>
                  Launch on Daraz / WhatsApp first, then slowly add retail and
                  office supply partners in Karachi.
                </li>
              </ul>

              <div style={{ marginTop: 14, display: "flex", gap: 10 }}>
                <button style={primaryBtn} onClick={handleWhatsApp}>
                  Chat on WhatsApp
                </button>
                <button
                  style={secondaryBtn}
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                >
                  Back to top
                </button>
              </div>
            </div>
          </section>
        </main>

        {/* FOOTER */}
        <footer style={footer}>
          <span>
            © {new Date().getFullYear()} SafaayiCo · Future consumables brand
            concept for Karachi.
          </span>
          <span>Built as a planning site while QuantumTech & StudiesMate scale.</span>
        </footer>
      </div>
    </div>
  );
};

export default App;
