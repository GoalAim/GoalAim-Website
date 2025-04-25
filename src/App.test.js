import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import App from './App';

beforeEach(() => {
  window.scrollTo = jest.fn();
});

afterEach(() => {
  jest.clearAllMocks();
});

test('home page is the main page and display "GOALAIM!"', () => {
  render(<App />);
  const linkElement = screen.getByText("GOALAIM!");
  expect(linkElement).toBeInTheDocument();
});
