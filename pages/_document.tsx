import { Html, Head, Main, NextScript } from "next/document";

const Document = () => {
  return (
    <Html>
      <Head>
        <link rel="icon" href="/favicon.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
