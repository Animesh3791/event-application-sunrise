import "reflect-metadata";
import React from "react";
import ReactDOM from "react-dom/client";
import { store } from "./store/store";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
localStorage.setItem(
  "user",
  JSON.stringify({
    name: "Animesh Gaurav",
    email: "animesh@gmail.com",
    password: "Abcd@1234"
  })
);

localStorage.setItem(
  "events",
  JSON.stringify(JSON.parse(localStorage.getItem("events") || "[]"))
);
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
