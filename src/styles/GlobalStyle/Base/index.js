import { createGlobalStyle } from 'styled-components';

const Base = createGlobalStyle`
    body {
        width: 100%;
        font-family: 'Montserrat', sans-serif;
        background-color: var(--body-background);
        transition: 0.2s;
    }
`;

export default Base;
