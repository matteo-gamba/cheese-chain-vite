import React from "react";
import ReactDOM from "react-dom/client";
import { Web3ReactProvider } from "@web3-react/core";

//import "./index.css";
import App from "./App";
import { getLibrary } from "./utils/provider";
import {Provider} from "react-redux"
import store from "./store"

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Web3ReactProvider getLibrary={getLibrary}>
        <App />
      </Web3ReactProvider>
    </Provider>
  </React.StrictMode>
);
