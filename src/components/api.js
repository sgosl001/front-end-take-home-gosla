export function getCountries() {
  return fetch('https://api.openaq.org/v1/countries?limit=10000')
    .then((res) => res.json())
    .then((res) => res.results)
}

export function getCities(selectedCountry) {
  return fetch(`https://api.openaq.org/v1/cities?limit=10000&country=${selectedCountry}`)
    .then((res) => res.json())
    .then((res) => res.results)
}

export function getAirInfo(city) {
  return fetch(`https://api.openaq.org/v1/latest?city=${city}`)
    .then((res) => res.json())
    .then((res) => res.results[0].measurements)
}