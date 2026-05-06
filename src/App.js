import "./App.css";
import Dictionary from "./Dictionary";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <section>
          <header>
            This project was coded by
            <a
              href="https://paucruz-portfolio.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              Paulina Cruz
            </a>{" "}
            and it's open-sourced on{" "}
            <a
              href="https://github.com/paucruz5/Weather-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>{" "}
            and hosted on{" "}
            <a
              href="https://the-meaning-archive.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Netlify
            </a>
          </header>
        </section>
        <main>
          <Dictionary />
        </main>
      </div>
    </div>
  );
}
