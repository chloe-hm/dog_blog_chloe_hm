import Layout from 'components/Layout';
import firebase from 'firebase';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Loading from 'pages/Loading';
import React, { useEffect, useState } from 'react';
import { CookiesProvider, useCookies } from 'react-cookie';
import { wrapper } from 'store/store';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'styles/global';
import theme from 'styles/them';
import firebaseConfig from '../../firebase/firebaseConfig';

function MyApp({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const [cookies, setCookie] = useCookies(['registrationToken']);

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
        console.log('🚀 ~ token', token);
        // 토큰 저장
        setCookie('registrationToken', token, { maxAge: 500 });
      })
      .catch(function (err) {
        console.error('fcm error : ', err);
      });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <meta charSet="utf-8" />
        <title key="title">유기견 분양 블로그</title>
        <meta name="description" content="유기견을 분양해주는 블로그입니다." />
        <meta
          key="keywords"
          name="keywords"
          content="강아지 블로그, 유기견, 강아지, 분양, 무료분양, 다양한 품종, 안전한"
        />
        <meta key="ogType" property="og:type" content="website" />
        <link
          rel="shortcut icon"
          href="/public/favicon.ico"
          key="shortcutIcon"
        />
      </Head>

      {/* <SeoHead /> */}
      <CookiesProvider>
        <Layout>
          {isLoading ? <Loading /> : <Component {...pageProps} />}
          <GlobalStyle />
        </Layout>
      </CookiesProvider>
    </ThemeProvider>
  );
}

export default wrapper.withRedux(MyApp);
