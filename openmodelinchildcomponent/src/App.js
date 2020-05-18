import React from "react";
import { Container } from "@material-ui/core";
import ParentComponent from "./ParentComponent";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="App">
        <Container maxWidth="sm">
          <ParentComponent />
        </Container>
      </div>
    </React.Fragment>
  );
}

export default App;
