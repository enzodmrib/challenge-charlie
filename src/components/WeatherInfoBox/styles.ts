import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: var(--white);
`;

export const InfoBox = styled.div`
    height: 800px;
    width: 800px;
    border: 4px solid var(--white);
    border-radius: 12px;
`;

export const Location = styled.h1`
    text-align: center;
    background-color: var(--dark-pink);
    font-size: 50px;
    border-radius: 8px 8px 0 0;
    border-bottom: 4px solid var(--white);
`;

export const CurrentWeather = styled.div`
    display: flex;
    height: 400px;
    border-bottom: 4px solid var(--white);
    background-color: var(--white);
    color: var(--dark-pink);
`;

export const CurrentWeatherImgContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 400px;
    width: 400px;
`;

export const CurrentWeatherImg = styled.img`
    height: 300px;
    width: 360px;
    border-radius: 12px;
`;

export const CurrentWeatherInfo = styled.div`
    padding: 32px;
    padding-left: 64px;
    border-left: 4px solid var(--white);
    height: 400px;
    width: 400px;
`;

export const MaximumTemperature = styled.div`
    border-bottom: 4px solid var(--white);
    height: 168px;
    padding: 32px;
    padding-left: 464px;
    background-color: var(--medium-pink);
`;

export const MinimumTemperature = styled.div`
    height: 162px;
    padding: 32px;
    padding-left: 464px;
    background-color: var(--pink);
    border-radius: 0 0 12px 12px;
`;