import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the hero section with the main title', () => {
  render(<App />);
  const titleElement = screen.getByText(/Welcome to Our Grand Opening!/i);
  expect(titleElement).toBeInTheDocument();
});

test('renders the footer', () => {
  render(<App />);
  const footerElement = screen.getByText(/© 2025 Multi-Everything E-commerce Platform. All rights reserved./i);
  expect(footerElement).toBeInTheDocument();
});

test('renders the featured products section', () => {
  render(<App />);
  const featuredTitle = screen.getByText(/Featured Products/i);
  expect(featuredTitle).toBeInTheDocument();
});
