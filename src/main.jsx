import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import App from "./components/App";
import "./index.css";
import "modern-normalize/modern-normalize.css";
import { BrowserRouter } from "react-router-dom";
import { store } from "./redux/store.js";
// import { PersistGate } from "redux-persist/integration/react";
// import Loader from "./components/Loader/Loader.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
);
