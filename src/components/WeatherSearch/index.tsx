import { resolve } from 'path/posix';
import React, {ChangeEvent, useState} from 'react';

import { Container, SearchText, SearchBox, SearchInput, SearchButton } from './styles';

//TODO: define types

const WeatherSearch: React.FC = () => {
  let [cityName, setCityName] = useState("");
  let [weatherData, setWeatherData] = useState(null);
  
  const handleInputChange = (inputText: React.ChangeEvent<HTMLInputElement>) => {
    setCityName(inputText.target.value);
  }

  const getWeatherData = async () => {
    let data = await fetchWeatherData();
    setWeatherData(data);
  }

  const fetchWeatherData = async () => {
    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=29e16138c1a63e3da37060cc1b72d0e0&units=metric`);
    let weatherInfo = await response.json();
    return weatherInfo;
  } 

  // Done with promise
  // const getWeatherInfo = () => {
  //   fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=29e16138c1a63e3da37060cc1b72d0e0&units=metric`)
  //   .then(response => response.json())
  //   .then(data => setWeatherData(data));
  // }

  return (
  <Container>
    <SearchText>Search Weather for location</SearchText>
    <SearchBox>
        <SearchInput type="text" placeholder="Ex: Boston" onChange={handleInputChange}></SearchInput>
        <SearchButton onClick={getWeatherData}>Search</SearchButton>
    </SearchBox>
  </Container>
  );
}

export default WeatherSearch;