import { GetStaticProps } from 'next';
import Head from 'next/head';
import React from 'react';
import * as Api from 'src/api';
import Introduction from 'src/components/Introduction';
import { wrapper } from 'src/store/store';

export interface IntroductionDataI {
  introductionData: { title: string; name: string; description: string };
}

function IntroductionPage({ introductionData }: IntroductionDataI) {
  return (
    <>
      <Head>
        <title>Introduction</title>
      </Head>
      <Introduction introductionData={introductionData} />
    </>
  );
}

export const getStaticProps: GetStaticProps = wrapper.getStaticProps(
  async () => {
    const introductionData = await Api.introduction.getIntroduction();

    return {
      props: { introductionData }
    };
  }
);

export default IntroductionPage;
