import { useState } from "react";
import countries from "./countriesAll.json";
import Country from "./Country.js"
import "./App.css";


function App() {
  const filterCountries = (typedValue) => {
    return countries.filter((country) => {
      return (
        country.name.toLowerCase().includes(typedValue.toLowerCase()) ||
        country.capital?.toLowerCase().includes(typedValue.toLowerCase())
      );
    });
  };

  const [arrayOfCountries, setArrayOfCountries] = useState(countries);
  return (
    <div className="App">
      <p>
        Search:
        <input
          type="text"
          onChange={(e) => {
            console.log(e.target.value, filterCountries(e.target.value));
            setArrayOfCountries(filterCountries(e.target.value));
          }}
        ></input>
      </p>

      <div className="flex">
        <Country countries={arrayOfCountries} />
      </div>
    </div>
  );
}

export default App;
