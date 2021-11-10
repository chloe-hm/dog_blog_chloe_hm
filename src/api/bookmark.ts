import querystring from 'querystring';
import axios from 'src/api/axios';
import * as T from 'src/api/type';

// 즐겨찾기
export function postBookmark(query: object) {
  return axios.post(`/favourites`, query);
}

// 즐겨찾기 취소
export function deleteBookmark(query: string) {
  return axios.delete(`/favourites/${query}`);
}

// 즐겨찾기한 목록 호출
export function getBookmarkList(query: T.BookmarkQuery) {
  const queryData = querystring.stringify(query);
  return axios.get(`/favourites?${queryData}`);
}
