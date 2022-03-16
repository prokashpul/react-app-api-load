import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  return (
    <div className="App">
      <h2>Welcome To Proweb react app</h2>
      <p>Happy clint</p>
      <Countries></Countries>
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
    <>
      {country.map((singleCounty) => (
        <DispalyData name={singleCounty.name.common}></DispalyData>
      ))}
    </>
  );
};
const DispalyData = ({ name }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>Happy clint</p>
    </div>
  );
};
export default App;
