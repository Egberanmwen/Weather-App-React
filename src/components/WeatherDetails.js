import React from 'react';
import FormattedDate from './FormattedDate';
import WeatherIcon from './WeatherIcon';
import Styles from '../styles/weatherDetails.css';
import WeatherTemperature from './WeatherTemperature';
//import WeatherTemperature from './WeatherTemperature';
//import WeatherIcon from './WeatherIcon';
const WeatherDetails = ({info}) => {
  return (
    <div className='details'>
        <div>
            <h1>{info.cityName}</h1>
        </div>
        <div className='weatherContainer'>
            <div id='listDiv'>
                <div>
                    <ul>
                        <li>
                        <FormattedDate dateItem={info.date}/>
                        </li>
                        <li>{info.description}</li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li>Humidity:{info.humidity}%</li>
                        <li id='wind'>Wind:{info.wind}km/h</li>
                    </ul>
                </div>
            </div>
            <div className='row'>
                <div className='col-lg-6'>
                    <div className='d-flex' >
                        <div>
                            <WeatherIcon iconImage={info.icon}/>
                        </div>
                        <div className='tempDiv'>
                        <WeatherTemperature celsius={info.temperature}/>
                        </div>
                    </div>
                </div>   
            </div>
        </div>
        
    </div>
  )
}

export default WeatherDetails