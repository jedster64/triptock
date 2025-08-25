export default function Home() {
  return (  <main style={{ fontFamily: "system-ui, Arial, sans-serif", textAlign: "center", padding: "40px" }}>
    <h1>🚀 Welcome to TripTock</h1>
    <p>Your new app is live and running on Vercel!</p>

    <nav style={{ marginTop: "20px" }}>
      <a href="/" style={{ margin: "0 15px" }}>Home</a>
      <a href="/listings" style={{ margin: "0 15px" }}>Listings</a>
      <a href="/about" style={{ margin: "0 15px" }}>About</a>
    </nav>

    <footer style={{ marginTop: "40px", fontSize: "14px", color: "#666" }}>
      <p>© {new Date().getFullYear()} TripTock</p>
    </footer>
  </main>
);
}
    