import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { MoralisProvider } from "react-moralis";
import Moralis from "moralis";

const serverUrl = "https://iwuvylqn5d5l.usemoralis.com:2053/server";
const appId = "18OkFKgLfjkyc8JGK62D5l0TMvbYyMV2FteE0utV";
Moralis.start({serverUrl,appId})
ReactDOM.render(
  <React.StrictMode>
    <MoralisProvider serverUrl={serverUrl} appId={appId}>
      <App />
    </MoralisProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
reportWebVitals();
