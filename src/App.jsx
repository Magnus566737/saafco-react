import React from "react";

const pageStyle = {
  fontFamily: "-apple-system, BlinkMacSystemFont, system-ui, sans-serif",
  color: "#0f172a",
  backgroundColor: "#f3f4f6",
  margin: 0,
  padding: 0,
};

const sectionStyle = {
  maxWidth: "960px",
  margin: "0 auto",
  padding: "32px 16px",
};

const cardStyle = {
  backgroundColor: "#ffffff",
  borderRadius: "12px",
  padding: "20px",
  boxShadow: "0 10px 30px rgba(15,23,42,0.08)",
};

const pillStyle = {
  display: "inline-block",
  padding: "4px 10px",
  borderRadius: "999px",
  fontSize: "12px",
  fontWeight: 500,
  background: "rgba(37,99,235,0.08)",
  color: "#1d4ed8",
};

const buttonPrimary = {
  padding: "10px 20px",
  borderRadius: "999px",
  border: "none",
  cursor: "pointer",
  background: "linear-gradient(135deg,#1d4ed8,#22c55e)",
  color: "#ffffff",
  fontWeight: 600,
  fontSize: "14px",
};

const buttonSecondary = {
  padding: "10px 20px",
  borderRadius: "999px",
  border: "1px solid #cbd5f5",
  cursor: "pointer",
  background: "#ffffff",
  color: "#1e293b",
  fontWeight: 500,
  fontSize: "14px",
};

const badgeStyle = {
  display: "inline-block",
  padding: "4px 10px",
  borderRadius: "999px",
  backgroundColor: "#e0f2fe",
  color: "#0369a1",
  fontSize: "11px",
  fontWeight: 600,
  letterSpacing: "0.04em",
  textTransform: "uppercase",
};

const App: React.FC = () => {
  return (
    <div style={pageStyle}>
      {/* Header */}
      <header
        style={{
          backgroundColor: "#ffffff",
          borderBottom: "1px solid #e5e7eb",
          position: "sticky",
          top: 0,
          zIndex: 10,
        }}
      >
        <div
          style={{
            ...sectionStyle,
            paddingTop: 16,
            paddingBottom: 16,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div
              style={{
                width: 36,
                height: 36,
                borderRadius: 12,
                background:
                  "linear-gradient(135deg, #1d4ed8 0%, #22c55e 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#ffffff",
                fontWeight: 800,
                fontSize: 20,
              }}
            >
              S
            </div>
            <div>
              <div
                style={{
                  fontWeight: 700,
                  fontSize: 18,
                  letterSpacing: "0.02em",
                }}
              >
                SaafCo
              </div>
              <div style={{ fontSize: 12, color: "#6b7280" }}>
                Essentials Made Simple
              </div>
            </div>
          </div>

          <nav
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              fontSize: 14,
              color: "#4b5563",
            }}
          >
            <a href="#products" style={{ textDecoration: "none", color: "inherit" }}>
              Products
            </a>
            <a href="#why" style={{ textDecoration: "none", color: "inherit" }}>
              Why SaafCo
            </a>
            <a href="#how" style={{ textDecoration: "none", color: "inherit" }}>
              How It Works
            </a>
            <a href="#contact" style={{ textDecoration: "none", color: "inherit" }}>
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <main>
        <section style={{ ...sectionStyle, paddingTop: 40 }}>
          <div
            style={{
              display: "grid",
              gap: 32,
              gridTemplateColumns: "minmax(0,1.3fr) minmax(0,1fr)",
            }}
          >
            <div>
              <span style={pillStyle}>Karachi · Home & Office Essentials</span>
              <h1
                style={{
                  marginTop: 16,
                  fontSize: 36,
                  lineHeight: 1.1,
                  marginBottom: 8,
                }}
              >
                Daily-use consumables,{" "}
                <span style={{ color: "#1d4ed8" }}>zero health risk</span>.
              </h1>
              <p
                style={{
                  fontSize: 15,
                  color: "#4b5563",
                  maxWidth: 520,
                  lineHeight: 1.6,
                  marginBottom: 16,
                }}
              >
                SaafCo provides simple, safe, repeat-purchase products for homes,
                offices and small businesses in Karachi. No creams, no food, no
                chemicals – only trusted paper, hygiene and storage essentials.
              </p>

              <p
                style={{
                  fontSize: 13,
                  color: "#6b7280",
                  marginBottom: 20,
                }}
              >
                Facial tissues · Garbage bags · Zip-lock bags · Foil & wrap ·
                Basic stationery
              </p>

              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <button
                  style={buttonPrimary}
                  onClick={() =>
                    (window.location.href = "https://wa.me/923001234567")
                  }
                >
                  Order on WhatsApp
                </button>
                <button
                  style={buttonSecondary}
                  onClick={() =>
                    document
                      .getElementById("products")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  View product range
                </button>
              </div>

              <div
                style={{
                  marginTop: 18,
                  display: "flex",
                  gap: 16,
                  flexWrap: "wrap",
                  fontSize: 12,
                  color: "#64748b",
                }}
              >
                <span>✔ No health or skin products</span>
                <span>✔ Easy storage & shipping</span>
                <span>✔ Built for repeat customers</span>
              </div>
            </div>

            <div style={cardStyle}>
              <div style={badgeStyle}>Phase 1 · Launch Scope</div>
              <h2
                style={{
                  marginTop: 12,
                  fontSize: 18,
                  marginBottom: 12,
                }}
              >
                Locked Product Categories
              </h2>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  fontSize: 14,
                  color: "#374151",
                  lineHeight: 1.7,
                }}
              >
                <li>
                  <strong>Paper & Hygiene</strong> – facial tissues, kitchen
                  rolls, paper towels, non-medicated wet wipes
                </li>
                <li>
                  <strong>Home Utility</strong> – garbage bags, trash liners,
                  zip-lock & food storage bags, foil, cling wrap
                </li>
                <li>
                  <strong>Office & School</strong> – notebooks, copy paper,
                  pens, markers, sticky notes
                </li>
                <li>
                  <strong>Household Essentials</strong> – disposable gloves,
                  cleaning cloths, small bins, plastic organizers
                </li>
              </ul>
              <p
                style={{
                  marginTop: 12,
                  fontSize: 12,
                  color: "#6b7280",
                }}
              >
                Excluded: skincare, haircare, cosmetics, medicinal items, food
                or any high-risk product.
              </p>
            </div>
          </div>
        </section>

        {/* Products */}
        <section id="products" style={sectionStyle}>
          <h2 style={{ fontSize: 24, marginBottom: 16 }}>Phase-1 Focus SKUs</h2>
          <p style={{ fontSize: 14, color: "#6b7280", marginBottom: 20 }}>
            Start lean, repeat fast. SaafCo focuses on a small set of
            high-rotation items that sell every month in Karachi households and
            offices.
          </p>

          <div
            style={{
              display: "grid",
              gap: 20,
              gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
            }}
          >
            <div style={cardStyle}>
              <div style={badgeStyle}>Garbage Bags</div>
              <h3 style={{ marginTop: 10, marginBottom: 6, fontSize: 18 }}>
                Heavy-Duty Trash Bags
              </h3>
              <p style={{ fontSize: 13, color: "#4b5563", marginBottom: 8 }}>
                Small, medium and large rolls for homes, apartments and
                restaurants.
              </p>
              <p style={{ fontSize: 12, color: "#6b7280" }}>
                Target price: Rs 250–450 / roll · Margin: Rs 100–150.
              </p>
            </div>

            <div style={cardStyle}>
              <div style={badgeStyle}>Tissues</div>
              <h3 style={{ marginTop: 10, marginBottom: 6, fontSize: 18 }}>
                Premium Facial Tissues
              </h3>
              <p style={{ fontSize: 13, color: "#4b5563", marginBottom: 8 }}>
                Soft, strong tissue boxes for families, offices and cafes.
              </p>
              <p style={{ fontSize: 12, color: "#6b7280" }}>
                Target price: Rs 160–200 / box · High repeat usage.
              </p>
            </div>

            <div style={cardStyle}>
              <div style={badgeStyle}>Storage</div>
              <h3 style={{ marginTop: 10, marginBottom: 6, fontSize: 18 }}>
                Zip-Lock Storage Bags
              </h3>
              <p style={{ fontSize: 13, color: "#4b5563", marginBottom: 8 }}>
                Resealable food-safe bags for kitchen, school and office use.
              </p>
              <p style={{ fontSize: 12, color: "#6b7280" }}>
                Target price: Rs 250–300 / pack · Ideal for bundles.
              </p>
            </div>
          </div>
        </section>

        {/* Why SaafCo */}
        <section id="why" style={{ ...sectionStyle, paddingBottom: 24 }}>
          <h2 style={{ fontSize: 24, marginBottom: 16 }}>Why this brand works in Karachi</h2>
          <div
            style={{
              display: "grid",
              gap: 20,
              gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
            }}
          >
            <div style={cardStyle}>
              <h3 style={{ fontSize: 16, marginBottom: 6 }}>Repeat Purchases</h3>
              <p style={{ fontSize: 13, color: "#4b5563" }}>
                Every home, office and restaurant buys these consumables again
                and again. Stable, monthly demand instead of one-time gadgets.
              </p>
            </div>
            <div style={cardStyle}>
              <h3 style={{ fontSize: 16, marginBottom: 6 }}>Low Risk, Simple Ops</h3>
              <p style={{ fontSize: 13, color: "#4b5563" }}>
                No expiry-critical food, no regulated creams, no medicines.
                Storage is simple, shipping is low-stress and teen-friendly to
                manage.
              </p>
            </div>
            <div style={cardStyle}>
              <h3 style={{ fontSize: 16, marginBottom: 6 }}>Low Brand Loyalty</h3>
              <p style={{ fontSize: 13, color: "#4b5563" }}>
                Most people don&apos;t care which brand of tissue or garbage bag
                they buy – as long as quality is clean and packaging is
                trustworthy. That&apos;s your entry point.
              </p>
            </div>
            <div style={cardStyle}>
              <h3 style={{ fontSize: 16, marginBottom: 6 }}>Built for Calm Growth</h3>
              <p style={{ fontSize: 13, color: "#4b5563" }}>
                One store at a time, fully stable before expansion. Designed to
                be a quiet, predictable side business that can scale slowly with
                systems, not stress.
              </p>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section id="how" style={sectionStyle}>
          <h2 style={{ fontSize: 24, marginBottom: 16 }}>Launch model</h2>
          <div
            style={{
              ...cardStyle,
              display: "grid",
              gap: 16,
              gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
            }}
          >
            <div>
              <div style={badgeStyle}>Step 1</div>
              <h3 style={{ marginTop: 8, fontSize: 16 }}>Lock SKUs & Packaging</h3>
              <p style={{ fontSize: 13, color: "#4b5563" }}>
                Start with a tight list of SKUs. Finalize SaafCo branding and
                packaging that looks premium but prints economically.
              </p>
            </div>
            <div>
              <div style={badgeStyle}>Step 2</div>
              <h3 style={{ marginTop: 8, fontSize: 16 }}>Test on Daraz & Retail</h3>
              <p style={{ fontSize: 13, color: "#4b5563" }}>
                Launch first batches through Daraz, TikTok Shop and a few pilot
                retailers in Karachi to validate pricing and demand.
              </p>
            </div>
            <div>
              <div style={badgeStyle}>Step 3</div>
              <h3 style={{ marginTop: 8, fontSize: 16 }}>Build Repeat Customers</h3>
              <p style={{ fontSize: 13, color: "#4b5563" }}>
                Offer simple bundles and repeat discounts. Focus on monthly
                orders instead of chasing new customers every time.
              </p>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" style={{ ...sectionStyle, paddingBottom: 40 }}>
          <div style={cardStyle}>
            <h2 style={{ fontSize: 22, marginBottom: 8 }}>Contact & Next Steps</h2>
            <p style={{ fontSize: 14, color: "#4b5563", marginBottom: 12 }}>
              This project is designed as a future, low-risk consumables brand to
              be launched after QuantumTech and StudiesMate are stable. Use this
              site as a base to refine copy, pricing and product photos.
            </p>
            <p style={{ fontSize: 13, color: "#6b7280", marginBottom: 12 }}>
              When you are ready to start:
            </p>
            <ul
              style={{
                fontSize: 13,
                color: "#4b5563",
                paddingLeft: 18,
                marginBottom: 16,
              }}
            >
              <li>Lock suppliers for tissue, bags and stationery.</li>
              <li>Finalize 3–5 launch SKUs and bundle strategy.</li>
              <li>Add real product photos to this website.</li>
              <li>Connect WhatsApp, Daraz and TikTok links here.</li>
            </ul>

            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <button
                style={buttonPrimary}
                onClick={() =>
                  (window.location.href = "https://wa.me/923001234567")
                }
              >
                Chat on WhatsApp
              </button>
              <button
                style={buttonSecondary}
                onClick={() =>
                  window.scrollTo({ top: 0, behavior: "smooth" })
                }
              >
                Back to top
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer
        style={{
          borderTop: "1px solid #e5e7eb",
          padding: "16px 0",
          fontSize: 12,
          color: "#9ca3af",
          textAlign: "center",
        }}
      >
        <span>© {new Date().getFullYear()} SaafCo · Future consumables brand concept for Karachi.</span>
      </footer>
    </div>
  );
};

export default App;
