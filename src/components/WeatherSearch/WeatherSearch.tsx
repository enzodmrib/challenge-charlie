import React from 'react';

import { Container, SearchBox, SearchInput } from './styles';

const WeatherSearch: React.FC = () => {
  return (
  <Container>
    <h2>Search Weather for location</h2>
    <SearchBox>
        <SearchInput type="text" placeholder="Ex: Boston"></SearchInput>
        <button className="search-button">Search</button>
    </SearchBox>
  </Container>
  );
}

export default WeatherSearch;