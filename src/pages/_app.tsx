import "../styles/global.css";
import "../styles/discord.css";

import type { AppProps } from "next/app";
import React from "react";
import Head from "next/head";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/Favicon.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
