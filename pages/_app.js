import { Layout } from "../global/Layout/Layout";
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from "react-redux";
import { persistor, store } from "../redux/store";
import { AnimatePresence, motion } from "framer-motion";
import { routeVariants } from "../animations";

export default function App({ Component, pageProps, router }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AnimatePresence exitBeforeEnter>
          <motion.div
            key={router.route}
            variants={routeVariants}
            initial="hidden"
            animate="visable"
            exit="pageExit"
          >
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </motion.div>
        </AnimatePresence>
      </PersistGate>
    </Provider>
  );
};