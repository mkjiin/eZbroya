import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/app/App";
import "./style/style.scss";
import { Provider } from "react-redux";
import "./firebase";

import store from "./store";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
