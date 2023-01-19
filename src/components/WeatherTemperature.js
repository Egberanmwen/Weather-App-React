import React from 'react';
import Styles from '../styles/weatherTemperature.css';

const WeatherTemperature = (defaultCity,celsius) => {
  return (
    <div>
      <span className='temperature'>{Math.round(defaultCity.celsius)}</span> 
      <span className='units'>°C</span>
        
    </div>
  )
}

export default WeatherTemperature