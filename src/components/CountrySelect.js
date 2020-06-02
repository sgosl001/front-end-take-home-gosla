import React, { useState, useEffect } from 'react';
import { getCountries, getCities } from './api';

export default function CountrySelect({ setCity }) {

  const [countries, setCountries] = useState([]);
  const [cityList, setCityList] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedCity, setSelectedCity] = useState('');

  useEffect(() => {
    getCountries()
      .then((countries) => setCountries(countries))
      .catch((e) => console.log(e))
  }, [])

  const onCountryChange = (e) => {
    const country = e.target.value
    setSelectedCountry(country)

    setSelectedCity('');
    getCities(country)
      .then((cities) => setCityList(cities))
      .catch((e) => console.log(e))
  }

  const onCityChange = (e) => {
    const city = e.target.value
    setSelectedCity(city);
    setCity(city);
  }

  return (
    <div>
      <select value={selectedCountry} onChange={onCountryChange}>
        <option value=''>Select a Country</option>
        {countries.filter((country) => !!country.name).map((country) => {
          return <option value={country.code} key={country.code}>{country.name}</option>
        })}
      </select>
      <select value={selectedCity} onChange={onCityChange}>
        <option value=''>Select a City</option>
        {cityList.filter((city) => city.name !== 'N/A').map((city) => {
          return <option value={city.name} key={city.name}>{city.name}</option>
        })}
      </select>
    </div>
  )
}