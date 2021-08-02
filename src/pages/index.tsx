import { GetStaticProps } from 'next';
import Head from 'next/head';
import React from 'react';
import { END } from 'redux-saga';
import useScroll from 'src/common/hooks/useScroll';
import Home from 'src/components/Home';
import { getDogsData } from 'src/store/modules/dogsData';
import { wrapper } from 'src/store/store';

function HomePage() {
  // 스크롤유지기능
  useScroll('home_scroll_pos', true);

  return (
    <>
      <Head>
        <title>Main</title>
      </Head>
      <Home />
    </>
  );
}

export const getStaticProps: GetStaticProps = wrapper.getStaticProps(
  async ({ store }) => {
    const query = {
      limit: 50
    };
    store.dispatch(getDogsData(query));
    store.dispatch(END);
    await store.sagaTask.toPromise();

    return {
      props: {}
    };
  }
);

export default HomePage;
