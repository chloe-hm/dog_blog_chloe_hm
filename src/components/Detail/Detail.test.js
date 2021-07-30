// import { render } from '@testing-library/react';
// import Image from 'components/Detail/Image';
// import * as Api from '../../api';

let temp;
describe('Detail page test', () => {
  beforeEach(() => {
    temp = 1;
  });

  afterEach(() => {
    temp = 0;
  });

  test('1 is 1', () => {
    expect(1).toBe(1);
  });

  //   const { getByText, getByLabelText, getByPlaceholderText } = render(<Image />);

  //   test('GET /api/main 성공 시 Status Code는 200 을 반환한다.', async () => {
  //     // 명시한 api 경로를 통해 요청한 후 값을 받아온다.

  //     const query = {
  //       image_id: 1,
  //       sub_id: 'chloe',
  //       value: 1
  //     };

  //     const response = await Api.like.postLike(query);

  //     // 응답한 값이 예상한 값과 맞는 지 비교한다.
  //     expect(response.status).toBe(200);
  //   });
});
