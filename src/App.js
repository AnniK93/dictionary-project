import "./App.css";

import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"></header>

        <main>
          <Dictionary />
        </main>

        <footer className="App-footer">
          <small>
            <a
              href="https://github.com/AnniK93/dictionary-project"
              target="_blank"
              rel="noreferrer"
            >
              Open source code
            </a>{" "}
            by Anni
          </small>
        </footer>
      </div>
    </div>
  );
}
