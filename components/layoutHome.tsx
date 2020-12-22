import Head from 'next/head';
import styles from '../styles/components/layout.module.css';
import utilStyles from '../styles/utils.module.css';

const name = 'Rodrigo Gonçalves';
export const siteTitle = 'RodrigoG';

export default function LayoutHome({ children }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel='icon' href='/favicon.ico' />
        <meta name='description' content='Um simples blog sobre TI 🙃' />
        <meta property='og:image' content='/images/profile.png' />
        <meta name='og:title' content={siteTitle} />
        <meta name='twitter:card' content='summary_large_image' />
      </Head>
      <header className={styles.header}>
        <img
          src='/images/profile.png'
          className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
          alt={name}
        />
        <h1 className={utilStyles.heading2Xl}>{name}</h1>
      </header>
      <main>{children}</main>
    </div>
  );
}
