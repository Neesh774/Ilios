import "../styles/global.css";
import type { AppProps } from "next/app";
import React from "react";
import Head from "next/head";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/Favicon.png" />
      </Head>
      <main className="bg-background-800">
        <Nav />
        <Component {...pageProps} />
        <Footer />
      </main>
    </>
  );
}
