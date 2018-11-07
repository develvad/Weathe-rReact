import React from 'react';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';
import * as enumWeather from '../shared/consts/weather.consts';

const WeatherData = () => (
    <div> 
        <WeatherTemperature temperature={20} weatherState={enumWeather.SUNNY} />
        <WeatherExtraInfo humidity={80} wind={'10 m/s'} />
    </div>
)

export default WeatherData;