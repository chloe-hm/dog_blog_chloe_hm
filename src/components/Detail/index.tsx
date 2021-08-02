import React from 'react';
import * as I from 'src/common/interface';
import Image from 'src/components/Detail/Image';
import Information from 'src/components/Detail/Information';
import SimilarList from 'src/components/Detail/SimilarList';
import styled from 'styled-components';

interface DetailProps {
  dogData: I.DogData;
}

function Detail({ dogData }: DetailProps) {
  const dogDetail = dogData.breeds && dogData.breeds[0];

  return (
    <>
      <DetailSectionS>
        <Image dogData={dogData} />
        <Information dogDetail={dogDetail} />
      </DetailSectionS>
      <SimilarList />
    </>
  );
}

const DetailSectionS = styled.div`
  display: flex;
  margin: 0 250px;
`;

export default Detail;
