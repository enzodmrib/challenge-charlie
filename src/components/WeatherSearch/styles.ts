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
    font-size: 96px;
`;

export const SearchInput = styled.input`
    background-color: var(--white);  
`;

export const SearchButton = styled.button`
    background-color: var(--dark-pink);
    color: var(--white);
`;

export const SearchBox = styled.div`
    height: 96px;
    ${SearchInput}, ${SearchButton} {
        font-size: 24px;
        outline: none;
        border-radius: 12px;
        margin: 12px;
        height: 72px;
        padding: 12px 12px;
    }
    display: flex;
    align-items: center;
`;