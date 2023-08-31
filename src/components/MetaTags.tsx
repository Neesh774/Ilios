import Head from "next/head";

const MetaTags = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://neesh.page" />
      <meta property="og:site_name" content="Ilios" />
      <meta property="og:image" content="/banner.png" />
      <meta property="og:locale" content="en_US" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@Neesh774" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content="/banner.png" />

      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default MetaTags;
