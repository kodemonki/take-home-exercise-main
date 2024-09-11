import { fireEvent, render, screen } from '@testing-library/react';

import  NavBar  from './NavBar';
import React from 'react';

describe('NavBar', () => {
  it('should render NavBar', () => {
    expect(render(<NavBar setMediaType={function (mediaType: string): void {
        throw new Error('Function not implemented.');
    } } setFilter={function (filter: string): void {
        throw new Error('Function not implemented.');
    } } setGenre={function (genre: string): void {
        throw new Error('Function not implemented.');
    } } setYear={function (year: string): void {
        throw new Error('Function not implemented.');
    } } />)).toBeTruthy();
  });
});
