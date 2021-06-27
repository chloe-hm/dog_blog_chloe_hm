import Layout from 'components/Layout';
import firebase from 'firebase';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Loading from 'pages/Loading';
import React, { useEffect, useState } from 'react';
import { wrapper } from 'store/store';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'styles/global';
import theme from 'styles/them';
import { firebaseConfig } from '../../firebase/firebase';

function MyApp({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  // 로딩기능
  React.useEffect(() => {
    const handleStart = () => {
      setIsLoading(true);
    };
    const handleComplete = () => {
      setIsLoading(false);
    };
    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);
  }, [router]);

  // firebase 세팅
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

  useEffect(() => {
    const messaging = firebase.messaging();
    Notification.requestPermission()
      .then(function () {
        return messaging.getToken();
      })
      .then(function (token) {
        console.log('token', token);
      })
      .catch(function (err) {
        console.error('fcm error : ', err);
      });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <meta charSet="utf-8" />
        <meta name="description" content="" />
        <link
          rel="shortcut icon"
          href="/public/favicon.ico"
          key="shortcutIcon"
        />
      </Head>
      <Layout>
        {isLoading ? <Loading /> : <Component {...pageProps} />}
        <GlobalStyle />
      </Layout>
    </ThemeProvider>
  );
}

export default wrapper.withRedux(MyApp);
