import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { App } from "./App";
import reportWebVitals from "./reportWebVitals";

const ROOT_ELEMENT_ID = "root";
const rootElement = document.getElementById(ROOT_ELEMENT_ID);
if (!rootElement) {
    throw new Error(`Element with id "${ROOT_ELEMENT_ID}" not found`);
}

const root = createRoot(rootElement);
root.render(
    <StrictMode>
        <App />
    </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
