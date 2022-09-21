import type { AppProps } from "next/app";
import { Provider, useDispatch } from "react-redux";

import store from "../store";
import Layout from "../components/Layout/Layout";
import "../styles/globals.css";
import { useEffect } from "react";
import { setDarkMode } from "../store/common";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
