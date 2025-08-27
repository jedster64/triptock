import Head from "next/head";
import Link from "next/link";

export default function Custom404() {
  return (
    <div style={{ padding: 20, fontFamily: "system-ui, Arial, sans-serif", maxWidth: 720, margin: "0 auto" }}>
      <Head>
        <title>404 – TripTock</title>
        <meta name="robots" content="noindex" />
        <meta name="description" content="The page you're looking for can't be found on TripTock." />
      </Head>

      <h1 style={{ marginBottom: 8 }}>404 – Page Not Found</h1>
      <p style={{ color: "#666", margin: 0 }}>
        Sorry, we couldn’t find what you were looking for.
      </p>

      <Link href="/">
        <a aria-label="Back to Home" style={{ display: "inline-block", marginTop: 20, textDecoration: "underline" }}>
          ⬅ Back to Home
        </a>
      </Link>
    </div>
  );
}
