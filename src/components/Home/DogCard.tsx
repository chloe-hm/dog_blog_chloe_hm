import * as Api from 'api';
import * as ImagePath from 'common/utils/imagePath';
import React, { useState } from 'react';
import styled from 'styled-components';
import * as S from 'styles/styled';

function DogCard(props) {
  const { isHome, dogData, imageUrl, isButton, onClickButton, buttonName } =
    props;
  const [isBookmark, setIsBookmark] = useState(false);
  const [bookmarkId, setBookmarkId] = useState('');

  // 즐겨찾기
  const onBookmarkApi = () => {
    const query = {
      image_id: dogData.image.id,
      sub_id: 'chloe'
    };
    Api.postBookmark(query)
      .then((res) => {
        if (res.status === 200) {
          setBookmarkId(res.data.id);
          setIsBookmark(true);
        }
      })
      .catch((err) => console.error(err));
  };

  // 즐겨찾기 취소
  const cancelBookmarkApi = () => {
    Api.deleteBookmark(bookmarkId)
      .then((res) => {
        if (res.status === 200) {
          setIsBookmark(false);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleBookmark = (e) => {
    e.preventDefault();
    if (isBookmark) {
      // 즐겨찾기 취소
      return cancelBookmarkApi();
    }
    // 즐겨찾기
    return onBookmarkApi();
  };
  // const focusTarget = useRef();

  return (
    <DogCardS>
      <img src={`${imageUrl}`} alt="강아지 이미지" />
      <div className="name">{dogData.name}</div>
      <div>{dogData.life_span}</div>
      {isHome && (
        <BookmarkSectionS>
          <img
            src={`${isBookmark ? ImagePath.fullHeart : ImagePath.emptyHeart}`}
            onClick={handleBookmark}
            className="like_icon"
            alt="즐겨찾기 아이콘"
          />
          {/* className적용하기?? */}
          {/* <Icon
            ImageUrl={`${
              isBookmark ? ImagePath.fullHeart : ImagePath.emptyHeart
            }`}
            onClick={handleBookmark}
            isVisible={isHome}
            alt="즐겨찾기 아이콘"
          /> */}
        </BookmarkSectionS>
      )}
      {isButton && (
        <S.Button onClick={() => onClickButton(dogData.id)}>
          {buttonName}
        </S.Button>
      )}
    </DogCardS>
  );
}

const DogCardS = styled.div`
  position: relative;
  margin: 0px 60px 30px 0;
  color: #454c53;
  width: 130px;
  font-size: 14px;
  .name {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 20px;
    margin: 5px 0 3px;
  }
  .like_icon {
    display: none;
  }
  &:hover {
    .like_icon {
      display: inline;
    }
  }
`;

const BookmarkSectionS = styled.div`
  position: absolute;
  top: 8px;
  right: -43px;
  img {
    width: 20px;
    height: 20px;
  }
`;

export default DogCard;
