import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleDictionaryResponse(response) {
    setResults(response.data);
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function search(word) {
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${word}&key=8ct2716ea6f8a04o8535eed14cbdd63a`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    let pexelsApiKey =
      "2GR5JiLyTOfJpTlRaY05ZfaWGjyggkLUEap21fxJNvoepGOXzmXz1L3W";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${word}&per_page=9`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (keyword.trim()) {
      search(keyword);
      setKeyword("");
    }
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search(props.defaultKeyword);
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section className="form-section">
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              placeholder="Type a word..."
              autoFocus={true}
              autoComplete="on"
              value={keyword}
              onChange={handleKeywordChange}
              id="searchBar"
            />
          </form>
          <div className="hint">
            Suggestions: talk, laugh, love, breathe, fight, f...
          </div>
        </section>
        <Results results={results} />
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}
