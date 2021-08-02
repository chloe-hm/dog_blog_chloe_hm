import React, { useCallback, useState } from 'react';
import * as Api from 'src/api';
import Icon from 'src/common/icon';
import * as ImagePath from 'src/common/imagePath';
import * as I from 'src/common/interface';
import message from 'src/common/message.json';
import * as S from 'src/styles/styled';
import styled from 'styled-components';

interface DogCardProps {
  key: number;
  dogData: I.DogDetailData;
  imageUrl: string;
  index?: number;
  isHome?: boolean;
  isButton?: boolean;
  buttonName?: string;
  onClickButton?(id: number | string, index: number): void;
}

function DogCard(props: DogCardProps) {
  const {
    isHome,
    dogData,
    imageUrl,
    isButton,
    onClickButton,
    buttonName,
    index
  } = props;
  const [isBookmark, setIsBookmark] = useState(false);
  const [bookmarkId, setBookmarkId] = useState('');

  // 즐겨찾기
  const onBookmarkApi = () => {
    const query = {
      image_id: dogData.image.id,
      sub_id: 'chloe'
    };
    Api.bookmark
      .postBookmark(query)
      .then((res) => {
        if (res.status === 200) {
          setBookmarkId(res.data.id);
          setIsBookmark(true);
        }
      })
      .catch((err) => {
        alert(message.error);
        console.error(err);
      });
  };

  // 즐겨찾기 취소
  const cancelBookmarkApi = () => {
    Api.bookmark
      .deleteBookmark(bookmarkId)
      .then((res) => {
        if (res.status === 200) {
          setIsBookmark(false);
        }
      })
      .catch((err) => {
        alert(message.error);
        console.error(err);
      });
  };

  const handleBookmark = useCallback(
    (e: React.MouseEvent<HTMLElement>): void => {
      e.preventDefault();
      if (isBookmark) {
        // 즐겨찾기 취소
        cancelBookmarkApi();
        return;
      }
      // 즐겨찾기
      onBookmarkApi();
    },
    []
  );

  return (
    <DogCardS>
      <img src={`${imageUrl}`} alt="강아지 이미지" />
      <div className="name">{dogData.name}</div>
      <div>{dogData.life_span}</div>
      <BookmarkSectionS>
        <Icon
          ImageUrl={`${
            isBookmark ? ImagePath.fullHeart : ImagePath.emptyHeart
          }`}
          onClick={handleBookmark}
          isVisible={isHome}
          alt="즐겨찾기 아이콘"
          className="bookmark_icon"
        />
      </BookmarkSectionS>
      {isButton && (
        <S.Button onClick={() => onClickButton(dogData.id, index)}>
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
  .bookmark_icon {
    display: none;
  }
  &:hover {
    .bookmark_icon {
      display: inline;
      margin-left: 155px;
    }
  }
`;

const BookmarkSectionS = styled.div`
  position: absolute;
  top: 8px;
  img {
    width: 20px;
    height: 20px;
  }
`;

export default DogCard;
