import React  from 'react';
import { IInputProps } from '../../models/InputProps';
import { Container, SearchText, SearchBox, SearchInput, SearchButton } from './styles';

//TODO: define types

const WeatherSearch: React.FC<IInputProps> = (props) => {
  return (
    <Container>
      <SearchText>Search Weather for location</SearchText>
      <SearchBox>
        <SearchInput 
          type="text" 
          placeholder="Ex: Boston" 
          onChange={props.handleInputChange} 
          onKeyDown={(event) => event.key === 'Enter' && props.getWeatherData()}>
          </SearchInput>
        <SearchButton onClick={props.getWeatherData}>Search</SearchButton>
      </SearchBox>
    </Container>
  );
}

export default WeatherSearch;