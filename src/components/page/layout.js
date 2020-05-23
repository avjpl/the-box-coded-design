import Link from 'next/link';
import Head from 'next/head';

import css from './layout.module.css';

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>The Box</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <div className={css.main_grid}>
        <header>
          <img className={css.logo} src="/img/TB.svg" alt="The Box" />

          <nav className={css.nav}>
            <Link href="#">
              <a className={css.nav_link}>Contact</a>
            </Link>{' '}
            <Link href="#">
              <a className={css.nav_link}>Book Now</a>
            </Link>{' '}
            <Link href="#">
              <a className={css.nav_link}>Become a Host</a>
            </Link>
            <Link href="#">
              <a className={css.nav_link}>About</a>
            </Link>
          </nav>
        </header>

        {children}

        <footer>
          <div className={css.social_links}>
            <a className={css.social_link} href="#" aria-label="snapchat">
              <img className={css.soical_img} src="/img/snapchat-ghost.svg" alt="snapchat" />
            </a>
            <a className={css.social_link} href="#" aria-label="airbnb">
              <img className={css.soical_img} src="/img/airbnb.svg" alt="airbnb" />
            </a>
            <a className={css.social_link} href="#" aria-label="instagram">
              <img className={css.soical_img} src="/img/instagram.svg" alt="instagram" />
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}
