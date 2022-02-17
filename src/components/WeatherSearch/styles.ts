import styled from 'styled-components';

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