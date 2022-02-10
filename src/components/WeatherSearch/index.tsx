import axios from 'axios';
import React, { ChangeEvent, useState } from 'react';
import { IWeatherData } from '../../models/WeatherData';

import { Container, SearchText, SearchBox, SearchInput, SearchButton } from './styles';

//TODO: define types

const WeatherSearch: React.FC = () => {
  let [cityName, setCityName] = useState("");
  let [weatherData, setWeatherData] = useState<IWeatherData | null>(null);

  const handleInputChange = (inputText: React.ChangeEvent<HTMLInputElement>) => {
    setCityName(inputText.target.value);
  }

  // const getWeatherData = async () => {
  //   try {
  //     let data = await fetchWeatherData();
  //     setWeatherData(data);
  //   } catch (error) {
  //     alert("City name not found!");
  //   }
  // }

  // const fetchWeatherData = async () => {
  //   try {
  //     let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=29e16138c1a63e3da37060cc1b72d0e0&units=metric`);
  //     let weatherInfo = await response.json();
  //     return weatherInfo;
  //   } catch (error) {
  //     console.log(error);
  //     alert("City name not found!");
  //   }
  // } 

  //Done with promise
  // const getWeatherData = () => {
  //   fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=29e16138c1a63e3da37060cc1b72d0e0&units=metric`)
  //   .then(response => response.json())
  //   .then(data => setWeatherData(data))
  //   .catch(error => { console.log(error); alert('City name not found') });
  // }

  const getWeatherData = async () => {
    try {
      const {data} = await axios.get<IWeatherData>(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=29e16138c1a63e3da37060cc1b72d0e0&units=metric`);
      setWeatherData(data);
    } catch (error) {
      console.log(error);
      alert('City name not found');
    }
  }

  return (
    <Container>
      <SearchText>Search Weather for location</SearchText>
      <SearchBox>
        <SearchInput type="text" placeholder="Ex: Boston" onChange={handleInputChange}></SearchInput>
        <SearchButton onClick={getWeatherData}>Search</SearchButton>
      </SearchBox>
      <div>{weatherData ? JSON.stringify(weatherData) : "Search for a city above"}</div>
    </Container>
  );
}

export default WeatherSearch;