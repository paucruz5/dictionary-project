import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("love");
  let [results, setResults] = useState(null);

  useEffect(() => {
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=love&key=8ct2716ea6f8a04o8535eed14cbdd63a`;
    axios.get(apiUrl).then(handleResponse);
  }, []);

  function handleResponse(response) {
    setResults(response.data);
  }

  function search(event) {
    event.preventDefault();

    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=8ct2716ea6f8a04o8535eed14cbdd63a`;
    axios.get(apiUrl).then(handleResponse);
    setKeyword("");
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <section className="form-section">
        <form onSubmit={search}>
          <input
            type="search"
            placeholder="Type a word..."
            autoFocus={true}
            autoComplete="on"
            defaultValue="love"
            value={keyword}
            onChange={handleKeywordChange}
          />
        </form>
        <div className="hint">
          Suggestions: talk, laugh, love, breathe, fight, f...
        </div>
      </section>
      <Results results={results} />
    </div>
  );
}
