import React, { useState, useEffect } from 'react';

import CountrySelect from './CountrySelect';
import MeasurementCard from './MeasurementCard';

import { getAirInfo } from '../api';

import './App.css';

function App() {
  const [cityOne, setCityOne] = useState(null);
  const [cityTwo, setCityTwo] = useState(null);
  const [cityOneMeasurements, setCityOneMeasurements] = useState([]);
  const [cityTwoMeasurements, setCityTwoMeasurements] = useState([]);
  const [hasError, setHasError] = useState(true);

  useEffect(() => {
    if (cityOne && cityTwo) {
      getAirInfo(cityOne)
        .then((measurements) => {
          setCityOneMeasurements(measurements)
          setHasError(false)
        })
        .catch((e) => setHasError(true))

      getAirInfo(cityTwo)
        .then((measurements) => {
          setCityTwoMeasurements(measurements)
          setHasError(false)
        })
        .catch((e) => setHasError(true))
    }
  }, [cityOne, cityTwo])

  return (
    <div className="App">
      <h1 className="App-header">Air Quality Comparison Tool</h1>
      <div className="dropdown-container">
        <p>Please enter two cities:</p>
        <CountrySelect setHasError={setHasError} setCity={setCityOne} />
        <CountrySelect setHasError={setHasError} setCity={setCityTwo} />
        {hasError && <h3 className="error">Request Failed. Please Try Again</h3>}
      </div>
      <h1>{cityOne}</h1>
      <div className="cards-container">
        {cityOneMeasurements.map((measurement) => <MeasurementCard key={measurement.parameter} {...measurement} />)}
      </div>
      <h1>{cityTwo}</h1>
      <div className="cards-container">
        {cityTwoMeasurements.map((measurement) => <MeasurementCard key={measurement.parameter} {...measurement} />)}
      </div>
    </div>
  );
}

export default App;
