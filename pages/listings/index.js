import Link from "next/link";

export default function Listings() {
  return (
    <div style={{ fontFamily: "system-ui, Arial, sans-serif", padding: 20 }}>
      <h1>Caravan Listings</h1>
      <p>Here are some example listings:</p>
      <ul style={{ listStyle: "none", padding: 0 }}>
        <li>
          <Link href="/listings/101"><a>Cozy Caravan</a></Link>
        </li>
        <li>
          <Link href="/listings/102"><a>Seaside Pitch</a></Link>
        </li>
        <li>
          <Link href="/listings/103"><a>Woodland Retreat Caravan</a></Link>
        </li>
        <li>
          <Link href="/listings/104"><a>Mountain View Static Home</a></Link>
        </li>
      </ul>

      <Link href="/"><a style={{ display: "block", marginTop: 20 }}>
        ⬅ Back to Home
      </a></Link>
    </div>
  );
}
