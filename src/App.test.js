import { render, screen } from '@testing-library/react';
import App from './App';

test('renders first loading screen', () => {
  render(<App />);
  const linkElement = screen.getByAltText(/loader-gif/i);
  expect(linkElement).toBeInTheDocument();
});
