import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    html, body, #root { // TODO: #root - взять с констант
        height: 100%;
    }

    body {
        margin: 0;
        font-family: "Roboto", sans-serif;
    }
`;
