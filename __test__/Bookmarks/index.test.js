import { render } from '@testing-library/react';
import React from 'react';
import Bookmarks from '../../src/components/Bookmarks';

describe('<Bookmarks />', () => {
  const bookmarkList = { a: 1, b: 2 };
  test('render Bookmarks page', () => {
    const { getByText } = render(<Bookmarks bookmarkList={bookmarkList} />);
    const title = getByText('Bookmark List');
    expect(title).toBeInTheDocument();
  });
});
