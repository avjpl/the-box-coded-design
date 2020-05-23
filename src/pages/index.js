import { motion } from 'framer-motion';

import Layout from '../components/page/layout';

import css from './index.module.css';

export default function Index() {
  return (
    <Layout>
      <motion.div
        exit={{ opacity: 0 }}
        className={css.main}
      >
          <h1 className={css.title}>The Box</h1>
          <p className={css.location}>Richmond, VA</p>
          <img className={css.primary_img} src="/img/house.jpg" />
          <div className={css.secondary_images}>
            <img src="/img/little-1.jpg" alt="" className={css.secondary_image} />
            <img src="/img/little-2.jpg" alt="" className={css.secondary_image} />
          </div>
          <p className={css.description}>Do you need time of from your day to day life? Well than take your summertime or
          during the winter there is a lot to be done. In Summer go hiking or swim in the nearby lake in Winter go
                  skiing in the Snowshoe Mountain resort</p>
          <button className={css.btn}>Book now</button>
      </motion.div>
    </Layout>
  );
}
