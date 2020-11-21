import React from "react";
import ReactDOM from "react-dom";
import Header from "./layout/Header";
import Dashboard from "./leads/Dashboard";
import Alerts from "./layout/Alerts";
import { Provider } from "react-redux";
import store from "../store";
import { transitions, positions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

//Alert Options
const alertOptions = {
  position: positions.TOP_CENTER,
  timeout: 3000,
  offset: "30px",
  transition: transitions.FADE,
};

export default function App() {
  return (
    <Provider store={store}>
      <AlertProvider template={AlertTemplate} {...alertOptions}>
        <div>
          <Header />
          <div className="container">
            <Dashboard />
            <Alerts />
          </div>
        </div>
      </AlertProvider>
    </Provider>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));
