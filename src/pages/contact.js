import { motion } from 'framer-motion';

import Layout from '../components/page/layout';

export default function Contact() {
  return (
    <Layout>
      <motion.div exit={{ opacity: 0 }}>Contact page</motion.div>
    </Layout>
  );
}
