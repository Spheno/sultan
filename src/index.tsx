import './index.scss';
import App from './components/App/App';
import { StrictMode } from "react";
import { BrowserRouter, HashRouter } from 'react-router-dom';
import { createRoot } from "react-dom/client";

const rootElement = document.getElementById("root")!;
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <App />
    </BrowserRouter>
     {/* <HashRouter basename={process.env.PUBLIC_URL}>
      <App />
    </HashRouter> */}
  </StrictMode>
);
