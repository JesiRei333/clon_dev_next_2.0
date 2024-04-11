import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <main className="bg-[rgb(245_245_245)] ">
      <Component {...pageProps} />
    </main>
  );
}
