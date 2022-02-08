import React from 'react';
import { AfterTomorrowWeatherInfo, Container, CurrentWeather, CurrentWeatherImg, CurrentWeatherInfo, InfoBox, Location, TomorrowWeatherInfo } from './styles';

const WeatherInfoBox: React.FC = () => {
  return <Container>
    <InfoBox>
      <Location>CurrentLocation</Location>
      <CurrentWeather>
        <CurrentWeatherImg></CurrentWeatherImg>
        <CurrentWeatherInfo></CurrentWeatherInfo>
      </CurrentWeather>
      <TomorrowWeatherInfo></TomorrowWeatherInfo>
      <AfterTomorrowWeatherInfo></AfterTomorrowWeatherInfo>
    </InfoBox>
  </Container>;
}

export default WeatherInfoBox;