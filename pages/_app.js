import Link from "next/link";

export default function Nav() {
  const linkStyle = { marginRight: 16, display: "inline-block" };
  return (
    <nav style={{ padding: 12, borderBottom: "1px solid #eee" }}>
      <Link href="/"><a style={linkStyle}>Home</a></Link>
      <Link href="/listings"><a style={linkStyle}>Listings</a></Link>
      <Link href="/about"><a style={linkStyle}>About</a></Link>
      <Link href="/site-map"><a style={linkStyle}>Site Map</a></Link>
    </nav>
  );
}
