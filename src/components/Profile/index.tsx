import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import Modal from 'react-modal';
import * as I from 'src/common/interface';
import ModalLayout from 'src/common/modal';
import LikeList from 'src/components/Profile/LikeList';
import UploadList from 'src/components/Profile/UploadList';
import * as S from 'src/styles/styled';
import them from 'src/styles/them';
import styled from 'styled-components';

interface ProfileProps {
  likeList: I.DogDetailData[];
  uploadList: I.DogDetailData[];
}

Modal.setAppElement('*');
function Profile(props: ProfileProps) {
  const { likeList, uploadList } = props;
  const [userAgent, setUserAgent] = useState('');
  const [userIp, setUserIp] = useState('');
  const [cookies] = useCookies(['UserAgent']);

  useEffect(() => {
    // Agent세팅
    setUserAgent(cookies.UserAgent);
    // Ip세팅
    setUserIp(cookies.UserIp);
  }, []);

  return (
    <ProfileLayoutS>
      {/* 내 프로필 정보 */}
      <MyInformationSs>
        <h1>My Information</h1>
        <div>User Agent: {userAgent} </div>
        <div>IP: {userIp}</div>
      </MyInformationSs>
      {/* 즐겨찾기 목록 라우팅 */}
      <Link href={'/app/bookmark'}>
        <a>
          <S.Button color={them.color.yellowGreen}>Bookmark</S.Button>
        </a>
      </Link>
      {/* 좋아요 목록 모달 */}
      <ModalLayout buttonName="Like List">
        <S.ModalTitle>&lt; Like Dog List &gt;</S.ModalTitle>
        <LikeList likeList={likeList} />
      </ModalLayout>
      {/* 업로드한 파일 목록 모달*/}
      <ModalLayout buttonName="Uploaded">
        <S.ModalTitle>&lt; Upload Dog List &gt;</S.ModalTitle>
        <UploadList uploadList={uploadList} />
      </ModalLayout>
    </ProfileLayoutS>
  );
}

// 밴의 방법 참고
const ProfileLayoutS = styled.div`
  text-align: center;
  margin: 170px 320px;
  font-size: 22px;
`;

const MyInformationSs = styled.div`
  margin-bottom: 35px;
  color: #454c53;
  div {
    font-size: 18px;
    margin-top: 20px;
    text-align: left;
  }
`;

export default Profile;
