import React from 'react';
import styled from 'styled-components';

function DogCard(props) {
  const { name, life_span, image } = props;
  return (
    <SDogCard>
      <img src={`${image.url}`} alt="강아지 이미지" />
      <div className="name">{name}</div>
      <div className="life">{life_span}</div>
    </SDogCard>
  );
}

const SDogCard = styled.div`
  margin: 0px 60px 30px 0;
  color: #454c53;
  width: 130px;

  .name {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 19px;
  }
  .life {
    font-size: 15px;
  }
`;

export default DogCard;
