import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column; 
`;

export const SearchText = styled.h1`
    color: var(--white);
`;

export const SearchInput = styled.input`
    background-color: var(--white);  
`;

export const SearchButton = styled.button`
    background-color: var(--dark-pink);
    color: var(--white);
`;

export const SearchBox = styled.div`
    height: 32px;
    ${SearchInput}, ${SearchButton} {
        outline: none;
        border-radius: 4px;
        margin: 4px;
        height: 24px;
        padding: 4px 4px;
    }
    display: flex;
    align-items: center;
`;