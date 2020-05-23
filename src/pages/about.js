import { motion } from 'framer-motion';

import Layout from '../components/page/layout';

export default function About() {
  return (
    <Layout>
      <motion.div exit={{ opacity: 0 }}>About page</motion.div>
    </Layout>
  );
}
