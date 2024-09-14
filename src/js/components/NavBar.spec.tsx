import { fireEvent, render, screen } from '@testing-library/react';

import  NavBar  from './NavBar';
import React from 'react';

describe('NavBar', () => {
  it('should render NavBar', () => {
    expect(render(<NavBar setMediaType={jest.fn()} setFilter={jest.fn()} setGenre={jest.fn()} setYear={jest.fn()} />)).toBeTruthy();
  });

  it('should call setMediaType when a media type is selected', () => {
    const setMediaTypeMock = jest.fn();
    render(<NavBar setMediaType={setMediaTypeMock} setFilter={jest.fn()} setGenre={jest.fn()} setYear={jest.fn()} />);
    
    fireEvent.click(screen.getByLabelText('Movies'));
    expect(setMediaTypeMock).toHaveBeenCalledWith('movie');
    
    fireEvent.click(screen.getByLabelText('Books'));
    expect(setMediaTypeMock).toHaveBeenCalledWith('book');
  });

  it('should call setGenre when a genre is selected', () => {
    const setGenreMock = jest.fn();
    render(<NavBar setMediaType={jest.fn()} setFilter={jest.fn()} setGenre={setGenreMock} setYear={jest.fn()} />);
    
    fireEvent.click(screen.getByText('GENRES'));
    fireEvent.click(screen.getByText('ACTION'));
    expect(setGenreMock).toHaveBeenCalled();
  });

  it('should call setYear when a year is selected', () => {
    const setYearMock = jest.fn();
    render(<NavBar setMediaType={jest.fn()} setFilter={jest.fn()} setGenre={jest.fn()} setYear={setYearMock} />);
    
    fireEvent.click(screen.getByText('YEARS'));
    fireEvent.click(screen.getByText('1990'));
    expect(setYearMock).toHaveBeenCalled();
  });

  it('should call setFilter when text is entered in the search input', () => {
    const setFilterMock = jest.fn();
    render(<NavBar setMediaType={jest.fn()} setFilter={setFilterMock} setGenre={jest.fn()} setYear={jest.fn()} />);
    
    fireEvent.change(screen.getByLabelText('search'), { target: { value: 'test' } });
    fireEvent.submit(screen.getByRole('form'));
    expect(setFilterMock).toHaveBeenCalledWith('test');
  });

  it('should reset the form and call handlers when "CLEAR FILTERS" is clicked', () => {
    const setMediaTypeMock = jest.fn();
    const setFilterMock = jest.fn();
    const setGenreMock = jest.fn();
    const setYearMock = jest.fn();
    
    render(<NavBar setMediaType={setMediaTypeMock} setFilter={setFilterMock} setGenre={setGenreMock} setYear={setYearMock} />);
    
    fireEvent.click(screen.getByText('CLEAR FILTERS'));
    expect(setMediaTypeMock).toHaveBeenCalledWith('all');
    expect(setFilterMock).toHaveBeenCalledWith('');
    expect(setGenreMock).toHaveBeenCalledWith('');
    expect(setYearMock).toHaveBeenCalledWith('');
  });
});
