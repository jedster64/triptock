export default function Listings() {
  return (
    <main style={{ fontFamily: "system-ui, Arial, sans-serif", textAlign: "center", padding: "40px" }}>
      <h1>📋 Caravan Listings</h1>
      <p>Here are some example listings:</p>
      <ul style={{ listStyle: "none", padding: 0 }}>
        <li>🏖️ Seaside Caravan in Skegness</li>
        <li>🌲 Woodland Retreat Caravan</li>
        <li>⛰️ Mountain View Static Home</li>
      </ul>
      <a href="/" style={{ display: "block", marginTop: "20px" }}>⬅ Back to Home</a>
    </main>
  );
}