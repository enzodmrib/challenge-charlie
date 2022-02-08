import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const InfoBox = styled.div`
    height: 800px;
    width: 800px;
    border: 1px solid black;
`;

export const Location = styled.h1`
    text-align: center;
    font-size: 50px;
    border-bottom: 1px solid black;
`;

export const CurrentWeather = styled.div`
    height: 400px;
    border-bottom: 1px solid black;
`;

export const CurrentWeatherImg = styled.div`
    width: 50%;
    height: 100%;
`;

export const CurrentWeatherInfo = styled.div`
    
`;

export const TomorrowWeatherInfo = styled.div``;

export const AfterTomorrowWeatherInfo = styled.div``;