import React from 'react';
import { IWeatherData } from '../../models/WeatherData';

const WeatherInfoBox: React.FC<{ weatherData: IWeatherData, gifUrl: string }> = ({weatherData, gifUrl}) => {
  return <div className="w-1/3 h-1/3 border-0 border-solid "></div>
}

export default WeatherInfoBox;