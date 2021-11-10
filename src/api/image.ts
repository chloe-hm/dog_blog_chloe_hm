import querystring from 'querystring';
import axios from 'src/api/axios';

// 이미지 등록
export function postImage(formData: object, options: object) {
  return axios.post(`/images/upload`, formData, options);
}

// 등록한 이미지 호출
export function getUploadImage() {
  const query = { limit: 50 };
  const queryData = querystring.stringify(query);
  return axios.get(`/images?${queryData}`);
}

// 이미지 삭제
export function deleteUploadImage(query: string) {
  return axios.delete(`/images/${query}`);
}
