import { Html, Head, Main, NextScript } from "next/document";

const Document = () => {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preload" as="image" href="/assets/images/profile.webp" />
        <link rel="preload" as="favicon" href="/favicon.svg" />
        <link rel="preload" as="font" href="/fonts/Gugi-Regular.ttf" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
