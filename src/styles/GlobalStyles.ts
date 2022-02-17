import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        min-height: 100%;
    }

    *, button, input {
        border: 0;
        background: none;
        font-family: 'Roboto', sans-serif;
    }

    body {
        background-color: var(--light-pink);
    }

    :root {
        --light-pink: #e3afbc;
        --pink:#ee4c7d;
        --medium-pink: #9b1750;
        --dark-pink: #5d001e;
        --white: #e3e2df;
    }

`;