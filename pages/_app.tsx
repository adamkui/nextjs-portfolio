import type { AppProps } from "next/app";
import Router from "next/router";
import { Suspense, useEffect, useState } from "react";
import { Provider, useDispatch } from "react-redux";

import { AppLoader } from "components";
import Layout from "components/Layout/Layout";
import store from "store";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  const [isLoading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    Router.events.on("routeChangeStart", () => setLoading(true));
    Router.events.on("routeChangeComplete", () => setLoading(false));

    return () => {
      Router.events.off("routeChangeStart", () => setLoading(true));
      Router.events.off("routeChangeComplete", () => setLoading(false));
    };
  }, []);

  return (
    <Provider store={store}>
      <Suspense fallback={""}>
        <Layout>
          <AppLoader isLoading={isLoading} />
          <Component {...pageProps} />
        </Layout>
      </Suspense>
    </Provider>
  );
}

export default MyApp;
