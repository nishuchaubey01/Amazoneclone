import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// import * as serviceWorker from "./serviceWorker";
import reducer, { initialState } from "./Screens/reducer";
import { StateProvider } from "./Screens/StateProvider";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>
);
