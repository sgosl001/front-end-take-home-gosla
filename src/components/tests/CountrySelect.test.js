import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

import CountrySelect from '../CountrySelect';

jest.mock('../../api', () => ({
  getCountries: jest.fn(() => Promise.resolve([{ name: 'country1' }])),
  getCities: jest.fn(() => Promise.resolve([{ name: 'city1' }])),
}))


describe('CountrySelect', () => {

  let props;

  beforeEach(() => {
    props = {
      setCity: jest.fn(),
      setHasError: jest.fn()
    }
  })

  it('Should fetch and render countries on mount', async () => {

    const { findByText } = render(
      <CountrySelect {...props} />
    )
    await findByText('country1')
  })

  it('Should fetch cities when a country is selected', async () => {

    const { getByTestId, findByText } = render(
      <CountrySelect {...props} />
    )

    fireEvent.change(getByTestId('countrySelect'), { target: { value: 'country' } })
    await findByText('city1')
  })

  it('Should call setCity when a city is selected', () => {

    const { getByTestId } = render(
      <CountrySelect {...props} />
    )

    act(() => {
      fireEvent.change(getByTestId('citySelect'), { target: { value: 'city1' } })
    })
    expect(props.setCity).toHaveBeenCalled()
  })
})