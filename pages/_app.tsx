import type { AppProps } from "next/app";
import { Suspense } from "react";
import { Provider } from "react-redux";

import Layout from "../components/Layout/Layout";
import store from "../store";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Suspense fallback={""}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Suspense>
    </Provider>
  );
}

export default MyApp;
