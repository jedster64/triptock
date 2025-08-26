import Nav from "../components/Nav";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Nav />
      <main style={{ padding: 20 }}>
        <Component {...pageProps} />
      </main>
    </>
  );
}
