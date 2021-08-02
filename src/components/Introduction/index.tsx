import React from 'react';
import { IntroductionDataI } from 'src/pages/app/introduction';
import styled from 'styled-components';

function Introduction({ introductionData }: IntroductionDataI) {
  return (
    <IntroductionLayout>
      <h1>{introductionData.title}</h1>
      <div>{introductionData.name}</div>
      <div>{introductionData.description}</div>
    </IntroductionLayout>
  );
}

const IntroductionLayout = styled.div`
  text-align: center;
  margin-top: 150px;
  font-size: 20px;
  line-height: 30px;
  color: #454c53;
  h1 {
    font-size: 30px;
    margin-bottom: 15px;
  }
`;

export default Introduction;
