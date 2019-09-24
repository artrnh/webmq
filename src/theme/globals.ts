import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
    * {
        box-sizing: border-box;
        box-shadow: none;
        border: none;
        outline: none;
        text-decoration: none;
        margin: 0;
        padding: 0;
    }

    body {
        font-family: monospace;
        background: #282828;
    }
`;
