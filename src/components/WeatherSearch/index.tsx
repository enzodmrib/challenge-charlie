import React from 'react';
import { IInputProps } from '../../models/InputProps';

const WeatherSearch: React.FC<IInputProps> = ({ handleInputChange, getWeatherData }) => {
  return <div className="flex flex-row justify-between h-14 w-80 m-6">
    <input className="bg-blue-50 w-56 p-2 rounded-md outline-none"
      placeholder="Ex: Boston" onChange={handleInputChange}
      onKeyDown={(event) => event.key === 'Enter' && getWeatherData()}></input>
    <button className="bg-blue-600 w-20 text-blue-50 rounded-md"
      onClick={getWeatherData} >Search</button>
  </div>
}

export default WeatherSearch;