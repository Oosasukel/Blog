import Head from 'next/head';
import styles from '../styles/components/layout.module.css';
import Link from 'next/link';

export default function Custom404() {
  return (
    <div className={styles.container}>
      <Head>
        <link rel='icon' href='/favicon.ico' />
        <meta
          name='description'
          content='Learn how to build a personal website using Next.js'
        />
        <meta name='og:title' content='404 - Página não encontrada' />
        <meta name='twitter:card' content='summary_large_image' />
        <title>404 - Página não encontrada</title>
      </Head>

      <h1>404 - Página não encontrada</h1>
      <div className={styles.backToHome}>
        <Link href='/'>
          <a>← Voltar para o início</a>
        </Link>
      </div>
    </div>
  );
}
