import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
// import { StoreProvider } from "./app/context/StoreContext";
import App from "./app/layout/App";
import "./app/layout/styles.css";
import { store } from "./app/store/configureStore";

import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <StoreProvider> */}
      <Provider store={store}>
        <App />
      </Provider>
      {/* </StoreProvider> */}
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
