import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <button className="btn btn-primary">test</button>

        <h1>Weather App</h1>
        <footer>
          This project was created by{" "}
          <a
            href="https://astounding-nasturtium-470d21.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            gloria
          </a>{" "}
          and is{" "}
          <a
            href="httfooters://github.com/gloriatoth/react-weather-search"
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
