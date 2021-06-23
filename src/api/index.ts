import axios from 'api/axios';
import querystring from 'querystring';

// 강아지들의 데이터 호출
export function getDogsData(query: any) {
  const queryData = querystring.stringify(query);
  return axios.get(`/breeds?${queryData}`);
}

// 강아지 상세 데이터 호출
export function searchDogData(query: any) {
  return axios.get(`/images/${query}`);
}

// 필터링된 데이터 호출
export function filterDogData(query: any) {
  const queryData = querystring.stringify(query);
  return axios.get(`/images/search?${queryData}`);
}
