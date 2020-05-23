import { AnimatePresence } from 'framer-motion';

import '../style.css';

const MyApp = ({ Component, pageProps, router }) => {
  const { route } = router;

  return (
    <AnimatePresence exitBeforeEnter>
      <Component {...pageProps} key={route} />
    </AnimatePresence>
  );
}

export default MyApp;
