import React from "react";
import ReactDOM from "react-dom";
import Navigator from "./navigation/nav";
// import Header from "./header/header";
import Main from "./header/main";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./styles.css";

function App() {
  // return <div className="App" />;
  return (
    <div>
      <BrowserRouter>
        <Navigator />
        {/* <Header /> */}
        <Main />
      </BrowserRouter>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
