import { createRoot } from 'react-dom/client';

import App from "./App"
import { HashRouter } from "react-router"


const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <HashRouter>
        <App />
    </HashRouter>,
    );