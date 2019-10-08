import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

    *, *::before, *:: after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    html {
        height: 100%;
        font-size: 62.5%;
    }

    body {
        font-family: ${({theme}) => theme.primaryFont}
    }

`;