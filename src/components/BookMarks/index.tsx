import DogCard, { DogDetailI } from 'components/Home/DogCard';
import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import * as S from 'styles/styled';

interface BookMarksProps {
  bookmarkList: DogDetailI[];
}

function BookMarks(props: BookMarksProps) {
  const { bookmarkList } = props;

  return (
    <>
      <TitleS>
        <div>&lt; Bookmark List &gt;</div>
        <div className="info"> 클릭시 자세한 정보를 알 수 있습니다.</div>
      </TitleS>
      <S.DogCardList>
        {bookmarkList.map((dogData) => {
          return (
            <Link
              href={`/app/detail/${dogData.image_id}`}
              as={`/app/detail/${dogData.image_id}`}
              key={dogData.id}>
              <a>
                <DogCard dogData={dogData} imageUrl={dogData.image.url} />
              </a>
            </Link>
          );
        })}
      </S.DogCardList>
    </>
  );
}

const TitleS = styled.div`
  text-align: center;
  font-size: 23px;
  color: #454c53;
  .info {
    font-size: 15px;
    margin: 5px 0 22px;
  }
`;

export default BookMarks;
