import React, { useReducer } from 'react';
import './App.css';

//create initial state to use in reducer
const initialState = {
  cityOne: '',
  cityTwo: ''
}


function reducer(state, {field, value}) {
  return {
    ...state,
    [field]: value
  }
}

function App() {

  const [state, dispatch] = useReducer(reducer, initialState);

  const onChange = (e) => {
    dispatch({ field: e.target.name, value: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
  }

  const { cityOne, cityTwo } = state

  return (
    <div className="App">
      <h1 className="App-header">Air Quality Comparison Tool</h1>
      <div>
        <p>Please enter two cities:</p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="cityOne">First City</label>
          <input
            type="text"
            name="cityOne"
            value={cityOne}
            onChange={onChange}
            />
          <label htmlFor="cityTwo">Second City</label>
          <input
            type="text"
            name="cityTwo"
            value={cityTwo}
            onChange={onChange}
          />
          <button type='submit'>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default App;
