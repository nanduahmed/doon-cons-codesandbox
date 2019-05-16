import React from "react";
import ReactDOM from "react-dom";
import Navigator from "./navigation/nav";
import Header from "./header/header";
// import "bootstrap/dist/css/bootstrap.css";

import "./styles.css";

function App() {
  // return <div className="App" />;
  return (
    <div>
      <Navigator />
      <Header />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
