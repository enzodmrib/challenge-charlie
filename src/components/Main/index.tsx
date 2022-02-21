import React, { useState } from 'react';
import { IWeatherData } from '../../models/WeatherData';
import axios from 'axios';
import WeatherSearch from '../WeatherSearch/index';
import WeatherInfoBox from '../WeatherInfoBox';

const Main: React.FC = () => {
    let [cityName, setCityName] = useState("");
    let [weatherData, setWeatherData] = useState<IWeatherData | null>(null);
    let [gifUrl, setGifUrl] = useState<string>("");

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
            	
            const formattedWeatherDescription = data.weather[0].description.replaceAll(" ", "%20");

            const gifSearch = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=yAP9IuvqCzEIVLUMXHrjGNxpZm86LDvu&limit=1&q=${formattedWeatherDescription}`);

            setGifUrl(gifSearch.data.data[0].images.downsized.url);
            setWeatherData(data);
        } catch (error) {
            alert('City name not found');
        }
    }


    return <div className="flex flex-col items-center justify-center h-screen w-screen subpixel-antialiased">
        <div className="flex flex-col items-center justify-center">
            {!weatherData && <h1 className="text-6xl font-bold text-blue-50 drop-shadow-md">Search Weather for location</h1>}
            <WeatherSearch getWeatherData={getWeatherData} handleInputChange={handleInputChange} />
        </div>
        {weatherData && <WeatherInfoBox weatherData={weatherData} gifUrl={gifUrl}/>}
    </div>
}

export default Main;