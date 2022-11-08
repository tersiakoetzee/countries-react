import React from "react";



function formatNumber(num) {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}
const RenderCountries = (prop) => {
  return prop.countries.map((country, i) => {
    return (
      <div key={i} className="singleCountry">
        <img alt={country.name} src={country.flag} ></img>
        <h3>{country.name}</h3>
        <p>Population: {formatNumber(country.population)}</p>
        <p>Region: {country.region}</p>
        <p>Capital:{country.capital} </p>
      </div>
    );
  });
};

export default RenderCountries