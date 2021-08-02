import React from 'react';
import * as I from 'src/common/interface';
import styled from 'styled-components';

interface InformationProps {
  dogDetail?: I.DogDetailData;
}

function Information({ dogDetail }: InformationProps) {
  return (
    <>
      {dogDetail && (
        <InformationSectionS>
          <NameS> {dogDetail.name}</NameS>
          <div>life: {dogDetail.life_span}</div>
          <div>breed: {dogDetail.breed_group}</div>
          <div>temperament: {dogDetail.temperament}</div>
        </InformationSectionS>
      )}
    </>
  );
}

const InformationSectionS = styled.div`
  padding: 17px 0 0 22px;
  font-size: 15px;
  line-height: 28px;
`;

const NameS = styled.span`
  font-size: 26px;
`;

export default Information;
