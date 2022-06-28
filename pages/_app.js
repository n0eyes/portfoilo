import Head from "next/head";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>noeyes</title>
        <meta property="og:title" content="noeyes" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="Portfoilo of noeyes" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
