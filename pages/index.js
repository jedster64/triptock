export default function Home() {
  return (
    <main style={{fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif", padding: "24px"}}>
      <header style={{display: "flex", justifyContent: "space-between", alignItems: "center", maxWidth: 960, margin: "0 auto"}}>
        <h1 style={{margin: 0}}>TripTock <span role="img" aria-label="rocket">🚀</span></h1>
        <nav style={{display: "flex", gap: "16px"}}>
          <a href="/" style={{textDecoration: "none"}}>Home</a>
          <a href="/listings" style={{textDecoration: "none"}}>Listings</a>
          <a href="/about" style={{textDecoration: "none"}}>About</a>
        </nav>
      </header>

      <section style={{maxWidth: 960, margin: "32px auto 0"}}>
        <div style={{
          padding: 24,
          border: "1px solid #e5e7eb",
          borderRadius: 12,
          boxShadow: "0 4px 12px rgba(0,0,0,0.05)"
        }}>
          <h2 style={{marginTop: 0}}>Welcome to TripTock</h2>
          <p>Your Next.js app is running on Vercel. This is a real homepage, not just a placeholder.</p>
          <ul>
            <li>Browse sample listings</li>
            <li>See a second page working</li>
            <li>No builds to run — commits auto‑deploy</li>
          </ul>
          <p><a href="/listings">→ Browse listings</a></p>
        </div>
      </section>

      <footer style={{maxWidth: 960, margin: "48px auto", color: "#6b7280"}}>
        <small>© {new Date().getFullYear()} TripTock</small>
      </footer>
    </main>
  );
}
