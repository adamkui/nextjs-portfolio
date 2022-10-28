import { AnimatePresence, motion } from "framer-motion";
import type { AppProps } from "next/app";
import { Router, useRouter } from "next/router";
import { Suspense, useEffect, useState } from "react";
import { Provider } from "react-redux";

import { AppLoader } from "components";
import Layout from "components/Layout/Layout";
import Head from "next/head";
import store from "store";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
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
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <Layout>
          <AnimatePresence mode="wait">
            <motion.div
              key={router.route}
              initial="initialState"
              animate="animateState"
              exit="exitState"
              transition={{
                duration: 0.75,
              }}
              variants={{
                initialState: {
                  opacity: 0,
                },
                animateState: {
                  opacity: 1,
                },
                exitState: {
                  opacity: 0,
                },
              }}
            >
              <AppLoader isLoading={isLoading} />
              <Component {...pageProps} />
            </motion.div>
          </AnimatePresence>
        </Layout>
      </Suspense>
    </Provider>
  );
}

export default MyApp;
