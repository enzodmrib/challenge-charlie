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
    border: 4px solid var(--white);
    border-radius: 12px;
`;

export const Location = styled.h1`
    text-align: center;
    color: var(--white);
    font-size: 50px;
    border-bottom: 4px solid var(--white);
`;

export const CurrentWeather = styled.div`
    height: 400px;
    border-bottom: 4px solid var(--white);
`;

export const CurrentWeatherImg = styled.div`
    width: 50%;
    height: 100%;
    border-right: 4px solid var(--white);
`;

export const CurrentWeatherInfo = styled.div`
    position: relative;
    width: 50%;
    height: 100%;
`;

export const TomorrowWeatherInfo = styled.div``;

export const AfterTomorrowWeatherInfo = styled.div``;