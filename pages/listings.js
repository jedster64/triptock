export default function Listings() {
  const items = [
    { id: 1, title: "Cozy Camper in Cornwall", price: 46, location: "Cornwall" },
    { id: 2, title: "Lake District Lodge", price: 70, location: "Windermere" },
    { id: 3, title: "Brighton Beach Van", price: 60, location: "Brighton" },
  ];

  return (
    <main style={{ maxWidth: "960px", margin: "32px auto", fontFamily: "system-ui, -apple-system, Arial" }}>
      <header style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
        <a href="/" style={{ textDecoration: "none" }}>Home</a>
        <h1 style={{ margin: 0 }}>Listings</h1>
        <a href="/about" style={{ textDecoration: "none" }}>About</a>
      </header>

      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {items.map((item) => (
          <li
            key={item.id}
            style={{
              border: "1px solid #e5e7eb",
              borderRadius: 12,
              padding: 16,
              marginBottom: 12,
              boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
            }}
          >
            <strong>{item.title}</strong>
            <div>Location: {item.location}</div>
            <div>Price per night: £{item.price}</div>
          </li>
        ))}
      </ul>
    </main>
  );
}
