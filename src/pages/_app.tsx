import "../styles/global.css";
import "highlight.js/styles/atom-one-dark.css";
import type { AppProps } from "next/app";
import React from "react";
import Head from "next/head";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import NextNProgress from "nextjs-progressbar";
import Snow from "../components/Snow";
import { Analytics } from "@vercel/analytics/react";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/Favicon.png" />
      </Head>
      <main className="bg-background-800">
        <NextNProgress color="#ffca3a" />
        <Nav />
        <Component {...pageProps} />
        <Footer />
      </main>
      <Analytics />
    </>
  );
}
