import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Hello Conditional-Rendering!', () => {
  render(<App />);
  const helloWorld = screen.getByText(/Hello Conditional-Rendering!/i);
  expect(helloWorld).toBeInTheDocument();
});
