import * as Api from 'api';
import DogCard, { DogData } from 'components/Home/DogCard';
import React, { useState } from 'react';
import * as S from 'styles/styled';

interface UploadListProps {
  uploadList: DogData[];
}

function UploadList(props: UploadListProps) {
  const { uploadList } = props;
  const [uploadedList, setUploadedList] = useState([...uploadList]);

  const deleteImage = (id: number, index: number) => {
    Api.deleteUploadImage(id)
      .then((res) => {
        if (res.status === 204) {
          alert('삭제되었습니다.');
          uploadList.splice(index, 1);
          setUploadedList(uploadedList.filter((data, idx) => idx !== index));
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <S.DogCardList>
      {uploadedList?.map((likeDog, index) => {
        return (
          <DogCard
            key={likeDog.id}
            index={index}
            dogData={likeDog}
            imageUrl={likeDog.url}
            isButton
            onClickButton={deleteImage}
            buttonName="delete"
          />
        );
      })}
    </S.DogCardList>
  );
}

export default UploadList;
