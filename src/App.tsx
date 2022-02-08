import React from 'react';
import GlobalStyle from './styles/GlobalStyles';
import WeatherSearch from './components/WeatherSearch/index';
import WeatherInfoBox from './components/WeatherInfoBox';

function App() {
  return (
    <>
      <WeatherSearch/>
      <GlobalStyle/>
    </>
  );
}

export default App;
