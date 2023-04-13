import App from './App';
import { screen, render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter as Router } from 'react-router-dom';

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom') as any,
  useNavigate: () => mockedUsedNavigate,
}));


describe('App', () => {

  it('route', () => {
    render(
      <Router>
      <App />
    </Router>
    )
    const catalog = screen.getByText('Каталог')
    expect(catalog).toBeInTheDocument();
    fireEvent.click(catalog)
    expect(screen.getByText('Косметика и гигиена')).toBeInTheDocument()
  })

})