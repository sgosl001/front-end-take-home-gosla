import React, { useState, useEffect } from 'react';

import { getCountries, getCities } from '../api';

export default function CountrySelect({ setCity, setHasError }) {

  const [countries, setCountries] = useState([]);
  const [cityList, setCityList] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedCity, setSelectedCity] = useState('');

  useEffect(() => {
    getCountries()
      .then((countries) => {
        setCountries(countries)
        setHasError(false)
      })
      .catch((e) => setHasError(true))
  }, [])

  const onCountryChange = (e) => {
    const country = e.target.value
    setSelectedCountry(country)

    setSelectedCity('');
    getCities(country)
      .then((cities) => {
        setCityList(cities)
        setHasError(false)
      })
      .catch((e) => setHasError(true))
  }

  const onCityChange = (e) => {
    const city = e.target.value
    setSelectedCity(city);
    setCity(city);
  }

  return (
    <div>
      <select data-testid="countrySelect" value={selectedCountry} onChange={onCountryChange}>
        <option value=''>Select a Country</option>
        {countries.filter((country) => !!country.name).map((country) => {
          return <option value={country.code} key={country.code}>{country.name}</option>
        })}
      </select>
      <select data-testid="citySelect" value={selectedCity} onChange={onCityChange}>
        <option value=''>Select a City</option>
        {cityList.filter((city) => city.name !== 'N/A').map((city) => {
          return <option value={city.name} key={city.name}>{city.name}</option>
        })}
      </select>
    </div>
  )
}