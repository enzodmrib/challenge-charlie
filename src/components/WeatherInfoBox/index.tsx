import React from 'react';
import { IWeatherData } from '../../models/WeatherData';
import { AfterTomorrowWeatherInfo, Container, CurrentWeather, CurrentWeatherImg, CurrentWeatherInfo, InfoBox, Location, TomorrowWeatherInfo } from './styles';

const WeatherInfoBox: React.FC<IWeatherData> = (props) => {
  return <Container>
    <InfoBox>
      <Location>CurrentLocation</Location>
      <CurrentWeather>
        <CurrentWeatherImg></CurrentWeatherImg>
        <CurrentWeatherInfo>
                <h3>{props.main.pressure}</h3>
                <h3>{props.main.temp}</h3>
                <h3>{props.main.temp_max}</h3>
                <p>{props.main.temp_min}</p>    
                <p>{props.main.feels_like}</p>    
                <p>{props.main.humidity}</p> </CurrentWeatherInfo>
      </CurrentWeather>
      <TomorrowWeatherInfo></TomorrowWeatherInfo>
      <AfterTomorrowWeatherInfo></AfterTomorrowWeatherInfo>
    </InfoBox>
  </Container>;
}

export default WeatherInfoBox;