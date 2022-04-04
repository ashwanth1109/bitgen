import React from 'react';
import { render } from '@testing-library/react';
import { BasicDummy } from './dummy.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicDummy />);
  const rendered = getByText('Increase');
  expect(rendered).toBeTruthy();
});
