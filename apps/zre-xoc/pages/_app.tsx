import { AppProps } from 'next/app';
import Head from 'next/head';
import { Layout } from '../components/layout/Layout';
import './styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <title>Welcome to ZreX&#39;s blog !</title>
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default CustomApp;
