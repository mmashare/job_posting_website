import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import {Provider} from "react-redux";
import {store} from "./redux/store.js"
const rootElement = document.getElementById("root");
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";
const root = createRoot(rootElement);

root.render(
  <Provider store={store}>
  <StrictMode >
    <App />
  </StrictMode>
  </Provider>
);