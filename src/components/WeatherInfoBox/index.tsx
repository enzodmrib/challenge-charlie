import React from 'react';
import { IWeatherData } from '../../models/WeatherData';
import { Container, CurrentWeather, CurrentWeatherImg, CurrentWeatherImgContainer, CurrentWeatherInfo, InfoBox, Location, MaximumTemperature, MinimumTemperature } from './styles';

const WeatherInfoBox: React.FC<{ weatherData: IWeatherData, gifUrl: string }> = ({weatherData, gifUrl}) => {

  const getWeatherGif = () => {
    
  }

  return <Container>
    <InfoBox>
      <Location>{weatherData.name}</Location>
      <CurrentWeather>
        <CurrentWeatherImgContainer>
          <CurrentWeatherImg src={gifUrl}></CurrentWeatherImg>
        </CurrentWeatherImgContainer>
        <CurrentWeatherInfo>
                <h1>TODAY</h1>
                <h1>{weatherData.main.temp}°C</h1>
                <h1>{weatherData.weather[0].description}</h1>
                <h2>Wind: {weatherData.wind.speed}km/h</h2>    
                <h2>Humidity: {weatherData.main.humidity}%</h2> 
                <h2>Pressure: {weatherData.main.pressure}hPA</h2>  
        </CurrentWeatherInfo>
      </CurrentWeather>
      <MaximumTemperature>
        <h1>MAXIMUM TEMPERATURE</h1>
        <h1>{weatherData.main.temp_max}°C</h1>
      </MaximumTemperature>
      <MinimumTemperature>
        <h1>MINIMUM TEMPERATURE</h1>
        <h1>{weatherData.main.temp_min}°C</h1>    
      </MinimumTemperature>
    </InfoBox>
  </Container>;
}

export default WeatherInfoBox;