import React from "react";
import { render, screen } from '@testing-library/react';
import { Home } from './Home';

test('expect home to display home heading', () => {
  render(<Home />);

  const heading = screen.getByText('Home');

  expect(heading).toHaveTextContent('Home');
});
