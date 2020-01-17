import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import App from './App';
import Navbar from './components/Navbar';
import InputForm from './components/InputForm';
//import CardCreator from './components/CardCreator';

describe('App renders without crashing', () => {
  test('renders without crashing', () => {
    render(<App />)
  });
})

describe('Navbar renders without crashing', () => {
  test('renders without crashing', () => {
    render(<Navbar />)
  });
})

describe('Input Form renders without crashing', () => {
  test('renders without crashing', () => {
    render(<InputForm />)
  });
})

// describe('Cards render without crashing', () => {
//   test('renders without crashing', () => {
//     const { getByTestId } = render(<CardCreator />)
//     getByTestId(/card-display/i)
//   });
// })
