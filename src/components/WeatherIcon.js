import React from 'react'

const WeatherIcon = ({iconImage}) => {

  return (
    <div>
       <img src={`http://openweathermap.org/img/wn/${iconImage}.png`}/>
    </div>
  )
}

export default WeatherIcon