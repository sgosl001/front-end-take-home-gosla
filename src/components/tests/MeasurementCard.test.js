import React from 'react';

import { render } from '@testing-library/react';
import MeasurementCard from '../MeasurementCard';

describe('MeasurementCard', () => {
  it('Should render without crashing', () => {
    const props = {
      parameter: 'parameter',
      value: 'value',
      lastUpdated: 'lastUpdated',
      unit: 'unit',
      sourceName: 'source',
      averagingPeriod: { value: 'avgvalue', unit: 'avgunit' }
    }
    render(
      <MeasurementCard {...props} />
    )
  })
})