import { createRoot } from "react-dom/client";
import { StrictMode } from "react";

// Entry Point
import App from "./App.jsx";

const $container = document.getElementById("root");
const render = createRoot($container);

render.render(
    <StrictMode>
        <App />
    </StrictMode>
);
