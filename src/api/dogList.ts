import querystring from 'querystring';
import axios from 'src/api/axios';
import * as T from 'src/api/type';

// 강아지들의 데이터 호출
export function getDogsData(query: T.DogListQuery) {
  const queryData = querystring.stringify(query);
  return axios.get(`/breeds?${queryData}`);
}

// 강아지 상세 데이터 호출
export function searchDogData(query: string | string[]) {
  return axios.get(`/images/${query}`);
}

// 필터링된 데이터 호출
export function filterDogData(query: T.DogListQuery) {
  const queryData = querystring.stringify(query);
  return axios.get(`/images/search?${queryData}`);
}
