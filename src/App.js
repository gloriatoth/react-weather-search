import React from "react";
import Weather from "./Weather";

import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <footer>
          This project was created by{" "}
          <a
            href="https://velvety-cocada-0047ed.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            gloria
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/gloriatoth/react-weather-search"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>
          .
        </footer>
      </div>
    </div>
  );
}
