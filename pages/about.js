export default function About() {
  return (
    <main style={{ maxWidth: '960px', margin: '32px auto', fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif' }}>
      <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
        <a href="/" style={{ textDecoration: 'none' }}>Home</a>
        <h1 style={{ margin: 0 }}>About</h1>
        <a href="/listings" style={{ textDecoration: 'none' }}>Listings</a>
      </header>

      <section style={{ lineHeight: 1.6 }}>
        <p>TripTock helps people find simple, affordable getaways in the UK.</p>
        <p>This is a basic demo page while we wire up the real app.</p>
      </section>
    </main>
  );
}
