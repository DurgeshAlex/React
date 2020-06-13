import React from "react";
import logo from "./logo.svg";
import "./App.css";
import StopWatch from "./component/stopwatchcomponent";

function App() {
  const style = {
    maxWidth: "30rem",
    padding: "100px 0",
  };
  return (
    <div className="App">
      <div className="row">
        <div className="col col-sm-12 mx-auto" style={style}>
          <div className="card mb-3 p-5">
            <div className="card-body">
              <h5 className="card-title">STOP WATCH </h5>
              <StopWatch />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
