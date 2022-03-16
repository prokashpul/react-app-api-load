import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  return (
    <div className="App">
      <header>
        <h2 className="heading">Welcome To Proweb react All country app</h2>
      </header>
      <main>
        <Countries></Countries>
      </main>
    </div>
  );
}
// create countries component
const Countries = () => {
  return (
    <div>
      <CountryData></CountryData>
    </div>
  );
};
// api load
const CountryData = () => {
  const [country, setState] = useState([]);
  useEffect(() => {
    const url = `https://restcountries.com/v3.1/all`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setState(data));
  }, []);
  console.log(country);
  return (
    <div className="countries">
      {country.map((singleCounty) => (
        <DispalyData
          name={singleCounty.name.common}
          area={singleCounty.area}
          flags={singleCounty?.flags?.png}
          capital={singleCounty.capital}
        ></DispalyData>
      ))}
    </div>
  );
};
const DispalyData = ({ name, area, flags, capital }) => {
  return (
    <div className="country">
      <img src={flags} alt="" />
      <div className="cart-body">
        <h2>{name}</h2>
        <h4>{capital}</h4>
        <p>Area: {area}</p>
      </div>
    </div>
  );
};
export default App;
