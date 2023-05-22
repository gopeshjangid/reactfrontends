import "../styles/globals.css";
import Head from "next/head";
import "../styles/style.css";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";

export default function App({ Component, pageProps }) {
  return (
    <>
     <Head>
        <title>Get Pro Writer</title>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
     
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
