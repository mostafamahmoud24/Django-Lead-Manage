import React from "react";
import ReactDOM from "react-dom";
import Header from "./layout/Header";
import Dashboard from "./leads/Dashboard";

export default function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <Dashboard />
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));
