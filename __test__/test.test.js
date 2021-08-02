import { render } from '@testing-library/react';
import Test from '../src/components/chloe';

describe('test', () => {
  it('test render', () => {
    const { getByText } = render(<Test />);
    const header = getByText('테스트입니다');
    expect(header).toBeInTheDocument();
  });
});
