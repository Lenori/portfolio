import {createGlobalStyle} from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`

    :root {
        --primary: #346ce0;
        --secondary: #9e9e9e;
        --tertiary: #f5f5f5;
    }

    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    *:focus {
        outline: 0;
    }

    html, body, #root {
        height: 100%;
    }

    body {
        -webkit-font-smoothing: antialiased;
    }

    html, body, #root, input, button, h1 {
        font-family: 'Bree serif', serif;
        font-weight: lighter !important;
        font-size: 20px;
    }

    a {
        text-decoration: none;
    }

    ul {
        list-style: none;
    }

    button {
        cursor: pointer;
    }

`;