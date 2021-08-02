import { GetServerSideProps } from 'next';
import React from 'react';
import * as Api from 'src/api';
import * as I from 'src/common/interface';
import message from 'src/common/message.json';
import Bookmarks from 'src/components/Bookmarks';

interface BookmarkI {
  bookmarkList: I.DogDetailData[];
}

function BookmarksPage(props: BookmarkI) {
  const { bookmarkList } = props;
  return (
    <>
      <Bookmarks bookmarkList={bookmarkList} />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const query = { sub_id: 'chloe' };

  try {
    const res = await Api.bookmark.getBookmarkList(query);

    if (res.status === 200) {
      const bookmarkList = res.data;
      return {
        props: { bookmarkList }
      };
    }
  } catch (err) {
    alert(message.error);
    console.error(err);
  }
  return {
    props: {}
  };
};

export default BookmarksPage;
