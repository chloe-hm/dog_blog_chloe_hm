import { render } from '@testing-library/react';
import router from 'next/router';
import React from 'react';
import Header from '../src/components/Header';

jest.mock('next/router');

describe('<Header />', () => {
  test('render Header', () => {
    const { getByText } = render(<Header />);
    const header = getByText('Dog Blog');
    expect(header).toBeInTheDocument();
  });

  test('routes Homepage', () => {
    router.push({
      pathname: '/'
    });
    expect(router).toMatchObject({
      asPath: '/',
      pathname: '/'
    });
  });
  test('routes Register Page', () => {
    router.push({
      pathname: '/app/register'
    });
    expect(router).toMatchObject({
      asPath: '/app/register',
      pathname: '/app/register'
    });
  });
  test('routes profile Page', () => {
    router.push({
      pathname: 'app/profile'
    });
    expect(router).toMatchObject({
      asPath: '/app/profile',
      pathname: '/app/profile'
    });
  });
  test('routes Introduction Page', () => {
    router.push({
      pathname: '/app/Introduction'
    });
    expect(router).toMatchObject({
      asPath: '/app/introduction',
      pathname: 'app/introduction'
    });
  });
});
