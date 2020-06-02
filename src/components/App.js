import React, { useState, useEffect } from 'react';

import CountrySelect from './CountrySelect';
import MeasurementCard from './MeasurementCard';

import { getAirInfo } from './api';

import './App.css';

function App() {
  const [cityOne, setCityOne] = useState(null);
  const [cityTwo, setCityTwo] = useState(null);
  const [cityOneMeasurements, setCityOneMeasurements] = useState([]);
  const [cityTwoMeasurements, setCityTwoMeasurements] = useState([]);

  useEffect(() => {
    if (cityOne && cityTwo) {
      getAirInfo(cityOne)
        .then((measurements) => setCityOneMeasurements(measurements))
        .catch((e) => console.log(e))

      getAirInfo(cityTwo)
        .then((measurements) => setCityTwoMeasurements(measurements))
        .catch((e) => console.log(e))
    }
  }, [cityOne, cityTwo])

  return (
    <div className="App">
      <h1 className="App-header">Air Quality Comparison Tool</h1>
      <div>
        <p>Please enter two cities:</p>
        <CountrySelect setCity={setCityOne} />
        <CountrySelect setCity={setCityTwo} />
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
