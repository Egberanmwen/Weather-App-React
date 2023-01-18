import React, { useState } from "react";
import axios from "axios";
import Styles from '../styles/search.css';
import { ThreeDots } from 'react-loading-icons'
import WeatherDetails from "./WeatherDetails";
const Search = ({defaultCity}) => {
  const [city, setCity] = useState(defaultCity);
  //const [values,setValues] = useState(null);
  const [weatherData, setWeatherData] = useState({ready: false});
  const fetchData =(res)=>{
    setWeatherData({
      ready: true,
      cityName: res.data.name,
      temperature: res.data.main.temp,
      humidity: res.data.main.humidity,
      wind: res.data.wind.speed,
      coordinates: res.data.coord,
      description: res.data.weather[0].description,
      date: res.data.dt *1000,
      icon: res.data.weather[0].icon
    })
  }
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=297d2309827ba0c9233aa4f042a6d318&units=metric`;
  const search = () => {
    
    axios.get(apiUrl).then(fetchData);
      // setWeatherData(res.data);
      //const weatherIcon = `http://openweathermap.org/img/wn/${res.data.weather[0].icon}.png`
        

          // <div>
          //   <ul className="dataItems">
          //     <li>temperature: {Math.round(res.data.main.temp)}C</li>
          //     <li>Humidity: {res.data.main.humidity}%</li>
          //     <li>wind:{Math.round(res.data.wind.speed)}km/h</li>
          //     <li><img src={`http://openweathermap.org/img/wn/${res.data.weather[0].icon}.png`}/></li>
            
          //   </ul>
          // </div>
     
   
  };

  const handleChange = (event) => {
    setCity(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    search();
  };
  if(weatherData.ready) {
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
        <WeatherDetails info={weatherData}/>
      </div>
    );
  }
  else{
    search();
    return (
      <ThreeDots />
    )
  }
};
export default Search;
