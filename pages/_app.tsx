import type { AppProps } from "next/app";
import { Provider } from "react-redux";

import Head from "next/head";
import Layout from "../components/Layout/Layout";
import store from "../store";
import "../styles/globals.css";
import { Suspense } from "react";
import { Loader } from "../components/Loader/Loader";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Suspense fallback={<Loader />}>
        <Layout>
          <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link
              rel="preconnect"
              href="https://fonts.gstatic.com"
              crossOrigin=""
            />
            <link
              href={
                "https://fonts.googleapis.com/css2?family=Gugi&family=Monoton&family=Rubik+Moonrocks&family=Sora:wght@300&display=swap"
              }
              rel="stylesheet"
            />
          </Head>
          <Component {...pageProps} />
        </Layout>
      </Suspense>
    </Provider>
  );
}

export default MyApp;
