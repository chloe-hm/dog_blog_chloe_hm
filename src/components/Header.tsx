import Icon from 'common/icon';
import * as ImagePath from 'common/imagePath';
import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import * as S from 'styles/styled';
import them from 'styles/them';

function Header() {
  // 로고클릭 라우팅시 스크롤 상단고정
  const removeScroll = () => {
    sessionStorage.removeItem('home_scroll_pos');
  };

  return (
    <HeaderLayoutS>
      <TitleS>
        <Link href="/">
          <a>
            <Icon
              ImageUrl={ImagePath.Logo}
              onClick={removeScroll}
              isVisible
              alt="강아지 발바닥 로고"
            />
            <span>Dog Blog</span>
          </a>
        </Link>
      </TitleS>
      <SectionS>
        <Link href="/app/register">
          <S.Button color={them.color.blue}>register</S.Button>
        </Link>
        <Link href="/app/profile">
          <S.Button color={them.color.yellow}>profile</S.Button>
        </Link>
        <Link href="/app/introduction">
          <a>
            <Icon
              ImageUrl={ImagePath.questionMark}
              isVisible
              alt="소개 페이지"
              className="questionMark"
            />
          </a>
        </Link>
      </SectionS>
    </HeaderLayoutS>
  );
}

const HeaderLayoutS = styled.div`
  margin-bottom: 100px;
`;

const TitleS = styled.div`
  font-size: 35px;
  margin-bottom: 20px;
  img {
    display: inline;
    width: 70px;
    height: 70px;
    margin-right: 10px;
    vertical-align: -5px;
  }
`;

const SectionS = styled.div`
  display: inline;
  float: right;
  .questionMark {
    margin: 10px 5px 0 160px;
  }
`;

export default Header;
