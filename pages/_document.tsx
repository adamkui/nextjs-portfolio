import { Html, Head, Main, NextScript } from "next/document";

const Document = () => {
  return (
    <Html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
        <link rel="preload" as="image" href="/assets/images/profile.webp" />
        <link rel="preload" as="favicon" href="/favicon.svg" />
        <link
          rel="preload"
          as="font"
          type="font/woff2"
          href="fonts/Gugi-Regular.woff2"
          crossOrigin=""
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
