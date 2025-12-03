import React from "react";

const App = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "-apple-system, BlinkMacSystemFont, system-ui, sans-serif",
        backgroundColor: "#f3f4f6",
        color: "#0f172a",
      }}
    >
      <h1 style={{ fontSize: 32, marginBottom: 8 }}>SaafCo Website</h1>
      <p style={{ fontSize: 14, color: "#4b5563", maxWidth: 480, textAlign: "center" }}>
        Simple test page to confirm that the React + Vercel deployment is working.
        Once this is live, we will replace it with the full SaafCo landing page.
      </p>
    </div>
  );
};

export default App;
