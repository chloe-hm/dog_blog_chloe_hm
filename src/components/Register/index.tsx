import * as Api from 'api/index';
import * as ImagePath from 'common/utils/imagePath';
import React, { useState } from 'react';
import styled from 'styled-components';
import * as S from 'styles/styled';
import them from 'styles/them';

const Register = () => {
  const [selectedFile, setSelectedFile] = useState('');
  console.log('🚀 ~ selectedFile', selectedFile);
  const [selectedImageUrl, setSelectedImageUrl] = useState('');
  const previewImage = selectedImageUrl ? selectedImageUrl : ImagePath.register;

  const handleFileInput = (e) => {
    setSelectedFile(e.target.files);
    setSelectedImageUrl(URL.createObjectURL(e.target.files[0]));

    // if (selectedFile[0].size > 1000000) {
    //   alert('이미지의 최대 크기는 1MB입니다.');
    //   return;
    // }
  };

  const handlePost = () => {
    const formData = new FormData();
    formData.append('file', selectedFile);
    Api.postImage(formData)
      .then((res) => {
        // console.log('🚀 ~ res', res);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <RegisterLayout>
      <h1>이미지 등록</h1>
      <input type="file" name="file" onChange={(e) => handleFileInput(e)} />
      <ImageSection>
        <img src={previewImage} alt={selectedFile.name} />
      </ImageSection>
      <S.Button
        type="button"
        onClick={() => handlePost()}
        color={them.color.yellowGreen}>
        Submit
      </S.Button>
    </RegisterLayout>
  );
};

const RegisterLayout = styled.div`
  /* text-align: center;
  margin: 170px 320px; */
  font-size: 22px;
`;

const ImageSection = styled.div`
  border: 1px solid gray;
  width: 187px;
`;

export default Register;
