import React, { useState } from 'react';
import WeatherSearch from '../WeatherSearch';
import WeatherInfoBox from '../WeatherInfoBox';
import GlobalStyles from '../../styles/GlobalStyles';
import { IWeatherData } from '../../models/WeatherData';
import axios from 'axios';

const Main: React.FC = () => {
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
            //Axios is a promise-based HTTP Client for node.js and the browser
            const { data } = await axios.get<IWeatherData>(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=29e16138c1a63e3da37060cc1b72d0e0&units=metric`);
            console.log(data)
            setWeatherData(data);
        } catch (error) {
            alert('City name not found');
        }
    }


    return <>
        <WeatherSearch
            getWeatherData={getWeatherData}
            handleInputChange={handleInputChange}
        />
        {weatherData && <WeatherInfoBox {...weatherData}/>}
        <GlobalStyles />
    </>;
}

export default Main;