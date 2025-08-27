import Head from "next/head";
import Link from "next/link";

export default function Custom500() {
  return (
    <div style={{ padding: 20, fontFamily: "system-ui, Arial, sans-serif", maxWidth: 720, margin: "0 auto" }}>
      <Head>
        <title>500 – TripTock</title>
        <meta name="robots" content="noindex" />
        <meta name="description" content="An unexpected error occurred on TripTock." />
      </Head>

      <h1 style={{ marginBottom: 8 }}>500 – Server Error</h1>
      <p style={{ color: "#666", margin: "8px 0" }}>
        Oops! Something went wrong on our side. Please try again later.
      </p>

      <Link href="/">
        <a aria-label="Back to Home" style={{ display: "inline-block", marginTop: 20, textDecoration: "underline" }}>
          ⬅ Back to Home
        </a>
      </Link>
    </div>
  );
}
