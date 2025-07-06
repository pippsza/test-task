import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./components/App";
import "./index.css";
import "modern-normalize/modern-normalize.css";
import { BrowserRouter } from "react-router-dom";
import { persistor, store } from "./redux/store.js";
import { PersistGate } from "redux-persist/es/integration/react";
import Loader from "./components/Loader/Loader.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <PersistGate loading={<Loader />} persistor={persistor}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>,
);
