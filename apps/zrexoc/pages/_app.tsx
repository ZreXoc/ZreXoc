import { AppProps } from 'next/app';
import Head from 'next/head';
import {Layout} from '~/components/layout';
import './styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <Layout title={'zrex.top'}>
      <Head>
        <title>熙晨的博客</title>
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default CustomApp;
