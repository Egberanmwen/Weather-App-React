import React from 'react'

const FormattedDate = (defaultCity,dateItem) => {
    let days = ['Sunday','Monday','Tueday','Wednesday','Thursday','Friday','Saturday'];
    let day = days[defaultCity.dateItem.getDay()];
    let hour = defaultCity.dateItem.getHours();
    let minutes = defaultCity.dateItem.getMinutes();
    if(hour < 10) {
        hour = `0${hour}`;
    }
    if(minutes < 10) {
        minutes = `0${minutes}`;
    }
  return (
    <div>{day} {hour}:{minutes}</div>
  )
}

export default FormattedDate