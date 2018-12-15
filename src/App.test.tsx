import React from 'react';
import { App } from './App';
import { render } from 'react-testing-library';

it('renders without crashing', () => {
  const renderResult = render(<App />);
  renderResult.debug();
  expect(renderResult.getByText('Mentha')).toBeDefined();
});
