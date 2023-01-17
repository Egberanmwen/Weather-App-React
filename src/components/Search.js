import React, { useState } from "react";
import axios from "axios";
import Styles from '../styles/search.css';
const Search = () => {
  const [city, setCity] = useState("Nigeria");
  const [values,setValues] = useState(null);
  const [weatherData, setWeatherData] = useState({});

  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=297d2309827ba0c9233aa4f042a6d318&units=metric`;
  const fetchData = () => {
    
    axios.get(apiUrl).then((res) => {
      setWeatherData(res.data);
      const weatherIcon = `http://openweathermap.org/img/wn/${res.data.weather[0].icon}.png`
         setValues(
          <div>
            <ul className="dataItems">
              <li>temperature: {Math.round(res.data.main.temp)}C</li>
              <li>Humidity: {res.data.main.humidity}%</li>
              <li>wind:{Math.round(res.data.wind.speed)}km/h</li>
              <li><img src={`http://openweathermap.org/img/wn/${res.data.weather[0].icon}.png`}/></li>
            
            </ul>
          </div>
        )
    });
  };

  const handleChange = (event) => {
    setCity(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    fetchData();
  };
    
  return (
    <div className="formDiv">
      <form onSubmit={handleSubmit} >
        <div>
          <input
            name="search"
            id="search"
            placeholder="Search city"
            onChange={handleChange}
          />
          <button id="searchBtn">Search</button>
        </div>
      </form>
      <div>
          {values}
      </div>
    </div>
  );
};
export default Search;
