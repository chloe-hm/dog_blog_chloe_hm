import firebase from 'firebase';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { CookiesProvider, useCookies } from 'react-cookie';
import * as Api from 'src/api';
import message from 'src/common/message.json';
import Layout from 'src/components/Layout';
import Loading from 'src/pages/Loading';
import { wrapper } from 'src/store/store';
import GlobalStyle from 'src/styles/global';
import theme from 'src/styles/them';
import { ThemeProvider } from 'styled-components';
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
      })
      .catch(function (err) {
        alert(message.error);
        console.error('fcm error : ', err);
      });
  }, []);

  // 사용자 정보 저장
  useEffect(() => {
    // Agent저장
    const UserAgent = navigator.userAgent;
    setCookie('UserAgent', UserAgent, { maxAge: 500 });

    // Ip저장
    Api.user
      .getUserIp()
      .then((res) => {
        const UserIp = res.data.ip;
        setCookie('UserIp', UserIp, { maxAge: 500 });
      })
      .catch((err) => {
        alert(message.error);
        console.error(err);
      });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <meta charSet="utf-8" />
        <title key="title">Dog Blog</title>
        <meta
          name="description"
          content="다양한 강아지들의 정보를 볼 수 있는 블로그입니다."
        />
        <meta
          key="keywords"
          name="keywords"
          content="Dog, Dog Blog, 강아지 블로그, 강아지 정보, 다양한 품종, 강아지 수명, 강아지 특징"
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
