import Dictionary from "./Dictionary";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 className="dictionary-title">Dictionary</h1>
        <main>
          <Dictionary defaultKeyword="hello" />
        </main>
        <footer className="App-footer">
          Coded by Scarleth Bernabe and{" "}
          <a
            href="https://github.com/sbot19/react-dictionary-app"
            className="github-link"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced{" "}
          </a>
          on GitHub
          <br />
          <a
            className="background-source"
            href="https://www.freepik.com/photos/background"
          >
            Background photo by jcomp
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
