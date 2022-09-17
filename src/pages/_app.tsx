import "../styles/global.css";
import type { AppProps } from "next/app";
import React from "react";
import Head from "next/head";

export default function MyApp({ Component, pageProps }: AppProps) {
  const emojis = ["⭐", "🔥", "💻", "🤖", "🥳", "👾"];
  const emoji = emojis[Math.floor(Math.random() * emojis.length)];

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="icon"
          href={`data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>${emoji}</text></svg>`}
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
