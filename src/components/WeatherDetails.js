import React from 'react';
import WeatherTemperature from './WeatherTemperature';

const WeatherDetails = ({info}) => {
  return (
    <div className='details'>
        <div>
            <h1>{info.cityName}</h1>
        </div>
        <div>
            <ul>
                <li>{}</li>
                <li>{info.description}</li>
            </ul>
        </div>
        <div className='row'>
            <div className='col-lg-6'>
                <div className='d-flex'>
                    <div>
                        <img src/>
                        <weatherIcon weatherIcon={info.icon}/>
                    </div>

                    <div>
                        <p>Temperature:{Math.round(info.temperature)}°C</p>
                    </div>
                </div>
            </div>
            <div>
                <ul>
                    <li>Humidity:{info.humidity}%</li>
                    <li>Wind:{info.wind}km/h</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default WeatherDetails