import React from 'react';
import { IWeatherData, MainWeatherData } from '../../models/WeatherData';
import { AfterTomorrowWeatherInfo, Container, CurrentWeather, CurrentWeatherImg, CurrentWeatherInfo, InfoBox, Location, TomorrowWeatherInfo } from './styles';

const WeatherInfoBox: React.FC<{ mainWeatherData: MainWeatherData }> = ({mainWeatherData}) => {
  return <Container>
    <InfoBox>
      <Location>CurrentLocation</Location>
      <CurrentWeather>
        <CurrentWeatherImg></CurrentWeatherImg>
        <CurrentWeatherInfo>
                <h3>{mainWeatherData.pressure}</h3>
                <h3>{mainWeatherData.temp}</h3>
                <h3>{mainWeatherData.temp_max}</h3>
                <p>{mainWeatherData.temp_min}</p>    
                <p>{mainWeatherData.feels_like}</p>    
                <p>{mainWeatherData.humidity}</p> </CurrentWeatherInfo>
      </CurrentWeather>
      <TomorrowWeatherInfo></TomorrowWeatherInfo>
      <AfterTomorrowWeatherInfo></AfterTomorrowWeatherInfo>
    </InfoBox>
  </Container>;
}

export default WeatherInfoBox;