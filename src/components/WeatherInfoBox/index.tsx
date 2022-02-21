import React from 'react';
import { IWeatherData } from '../../models/WeatherData';

const WeatherInfoBox: React.FC<{ weatherData: IWeatherData, gifUrl: string }> = ({weatherData, gifUrl}) => {
  return <div className="border-none font-bold drop-shadow-md rounded-md">
    <div className="text-center bg-blue-400 rounded-t-md">
      <h1 className="text-blue-50 text-2xl">{weatherData.name}</h1>
    </div>
    <div className="flex flex-row bg-blue-50 justify-between">
      <div className="p-2 w-1/2"><img className="rounded-md" src={gifUrl}/></div>
      <div className="p-4 text-blue-900">
        <p>TODAY</p>
        <p>{weatherData.main.temp}°C</p>
        <p>{weatherData.weather[0].description}</p>
        <p>Wind: {weatherData.wind.speed}km/h</p>
        <p>Humidity: {weatherData.main.humidity}%</p>
        <p>Pressure: {weatherData.main.pressure}hPA</p>
      </div>
    </div>
    <div className="flex flex-col items-end p-4 bg-blue-400 text-blue-50">
      <p>MAXIMUM TEMPERATURE</p>
      <p>{weatherData.main.temp_max}°C</p>
    </div>
    <div className="flex flex-col items-end p-4 bg-blue-900 text-blue-50 rounded-b-md">
      <p>MINIMUM TEMPERATURE</p>
      <p>{weatherData.main.temp_min}°C</p>
    </div>
  </div>
}

export default WeatherInfoBox;