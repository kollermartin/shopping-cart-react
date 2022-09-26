import React from "react";
import { render, screen } from '@testing-library/react';
import { About } from './About';

test('expect home to display home heading', () => {
  render(<About />);

  const heading = screen.getByText('About');

  expect(heading).toHaveTextContent('About');
});