import React from 'react';
import WeatherIcons from 'react-weathericons';
import * as enumWeather from '../shared/consts/weather.consts';

const icons = {
    [enumWeather.SUNNY]: 'day-sunny',
    [enumWeather.SUNNY]: 'cloud',
    [enumWeather.SUNNY]: 'day-fog'
}


const iconoLand = (icono) => {
    let iconito = icons[icono];
    if(!!iconito){
        return <WeatherIcons name={iconito} size="2x" />

    }else{
        return <WeatherIcons name={"day-sunny"} size="2x" />

    }
}

const WeatherTemperature = ({temperature, weatherState}) => (
    <div>
    { iconoLand(weatherState) }
    <span> { `${temperature} Cº`} </span>
    </div>
)
 
export default WeatherTemperature;