import Head from "next/head";

export default function OGMetas({
  title = "Busco Candidato",
  description = "Descubre tu match politico",
  url = "https://match.yovoto.pe/",
}) {
  const image = "https://match.yovoto.pe/open-graph.png";

  return (
    <Head>
      <meta property="og:type" content="website" key="og:type" />
      <meta property="og:title" content={title} key="og:title" />
      <meta
        property="og:description"
        content={description}
        key="og:description"
      />
      <meta property="og:image" content={image} key="og:image" />
      <meta property="og:image:alt" content={description} key="og:image:alt" />
      <meta property="og:url" content={url} key="og:url" />
      <meta property="og:site_name" content={title} key="og:site_name" />
      <meta property="og:locale" content="en" key="og:locale" />
      <meta
        name="twitter:card"
        content="summary_large_image"
        key="twitter:card"
      />
      <meta name="twitter:url" content={url} key="twitter:url" />
      <meta name="twitter:title" content={title} key="twitter:title" />
      <meta
        name="twitter:description"
        content={description}
        key="twitter:description"
      />
      <meta name="twitter:image" content={image} key="twitter:image" />
      <meta
        name="twitter:summary"
        content={description}
        key="twitter:summary"
      />
      <title key="title">{title}</title>
      <link rel="icon" href="/favicon.ico" />
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-TXQ23V2NS2"
      ></script>
      <script
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-TXQ23V2NS2');
          `,
        }}
      />
    </Head>
  );
}
