import React from 'react';
import { render } from 'react-testing-library';
import { App } from './App';

it('renders without crashing', () => {
  const renderResult = render(<App />);
  renderResult.debug();
  expect(renderResult.getByText('Mentha')).toBeDefined();
});
