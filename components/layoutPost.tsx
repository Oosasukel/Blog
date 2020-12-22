import Head from 'next/head';
import styles from '../styles/components/layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

import DisqusComments from '../services/Disqus';

const name = 'Rodrigo Gonçalves';
export const siteTitle = 'RodrigoG';

export default function LayoutPost({ children, id, title }) {
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
        <Link href='/'>
          <a>
            <img
              src='/images/profile.png'
              className={`${styles.headerImage} ${utilStyles.borderCircle}`}
              alt={name}
            />
          </a>
        </Link>
        <h2 className={utilStyles.headingLg}>
          <Link href='/'>
            <a className={utilStyles.colorInherit}>{name}</a>
          </Link>
        </h2>
      </header>
      <main>{children}</main>
      <div className={styles.backToHome}>
        <Link href='/'>
          <a>← Voltar para o início</a>
        </Link>
      </div>

      <DisqusComments post={{ id, title }} />
    </div>
  );
}
