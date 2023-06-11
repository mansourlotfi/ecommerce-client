import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
// import { StoreProvider } from "./app/context/StoreContext";
import App from "./app/layout/App";
import "./app/layout/styles.css";
import { store } from "./app/store/configureStore";

// Create a root object
const container = document.getElementById("root");
const root = createRoot(container!);

// Render your app using the root object
root.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <StoreProvider> */}
      <Provider store={store}>
        <App />
      </Provider>
      {/* </StoreProvider> */}
    </BrowserRouter>
  </React.StrictMode>
);

// Unmount your app using the root object
// root.unmount();
