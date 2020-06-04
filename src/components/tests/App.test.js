import React from 'react';
import { render } from '@testing-library/react';

import App from '../App';

jest.mock('../../api', () => ({
  getCountries: jest.fn(() => Promise.resolve([{ name: 'country1' }])),
  getCities: jest.fn(() => Promise.resolve([{ name: 'city1' }])),
  getAirInfo: jest.fn(() => Promise.resolve([{
    parameter: 'o3',
    value: 'value',
    lastUpdated: 'lastUpdated',
    unit: 'unit',
    sourceName: 'source',
    averagingPeriod: { value: 'avgvalue', unit: 'avgunit' }
  }]))
}))

describe('App', () => {

  it('renders without failing', () => {
    render(
      <App />
    )
  })
})