import React from 'react';
import { render } from 'react-testing-library';
import App from './App.js';

describe('App', () => {
  it('renders without error', () => {
    render(<App />);
  });
});
