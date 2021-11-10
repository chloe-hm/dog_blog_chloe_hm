import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { END } from 'redux-saga';
import * as Api from 'src/api';
import message from 'src/common/message.json';
import Detail from 'src/components/Detail';
import { getDogsData } from 'src/store/modules/dogsData';
import { wrapper } from 'src/store/store';

function DetailPage() {
  const router = useRouter();
  const query = router.query.dog;
  const [dogData, setDogData] = useState([]);

  // 해당 강아지 데이터 호출
  // 서버사이드로 (context..?)
  // await...로 (useEffect 안에서)
  useEffect(() => {
    if (!router.isReady) return;
    Api.dogList
      .searchDogData(query)
      .then((res) => {
        // 공통적으로 처리
        if (res.status === 200) {
          setDogData(res.data);
        }
      })
      .catch((err) => {
        alert(message.error);
        console.error(err);
      });
  }, [router.isReady]);

  return (
    <>
      <Detail dogData={dogData} />;
    </>
  );
}

// 상세페이지에서 새로고침시 store날아갔을시 새로 dispatch
export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps(async ({ store }) => {
    const query = { limit: 50 };
    store.dispatch(getDogsData(query));
    store.dispatch(END);
    await store.sagaTask.toPromise();

    return {
      props: {}
    };
  });

export default DetailPage;
