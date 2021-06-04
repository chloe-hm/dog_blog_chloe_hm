import React, { useEffect } from 'react';
import Head from 'next/head';
import Home from '../../components/Home';
import { useDispatch } from 'react-redux';
import { getDogsData } from '../store/modules/dogsData';
// import { GetServerSideProps } from 'next';
// import { wrapper } from '../store/store';
// import { styled } from 'styled-components';

// interface Props {
//   dogs: object;
// }

function HomePage(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDogsData());
  }, []);

  return (
    <>
      <Head>
        <title>Main</title>
      </Head>
      <Home />
    </>
  );
}

export default HomePage;

// export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(
//   async ({ store }) => {
//     store.dispatch(getDogsData('aaa'));
//     // const storeData = store.getState((state) => state);
//     // console.log('🚀 ~ storeData', storeData);

//     return {
//       props: {
//         // storeData
//         // name: dogs.name,
//         // life_span: dogs.life_span,
//         // imageUrl: dogs.image.url
//       }
//     };
//   }
// );
