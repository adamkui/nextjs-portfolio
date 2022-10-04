import { Html, Head, Main, NextScript } from "next/document";

const Document = () => {
  return (
    <Html lang="en">
      <Head>
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
