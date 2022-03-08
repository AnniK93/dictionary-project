import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);
  let [photos, setPhotos] = useState(null);

  function handleDictionaryResponse(response) {
    //console.log(response.data[0]);
    //console.log(response.data[0].meanings[0].definitions[0].definition);
    setResults(response.data[0]);
  }

  function handlePexelsResponse(response) {
    //console.log(response);
    setPhotos(response.data.photos);
  }

  function search(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    let pexelsApiKey =
      "563492ad6f91700001000001c565acd50b6f49e0a37f63528c4d91f5";

    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <section>
        <h2>What word do you want to look up?</h2>
        <form onSubmit={search}>
          <input
            className="search-input"
            type="search"
            autoFocus={true}
            onChange={handleKeywordChange}
          />
          <button type="Submit" className="search-button">
            Search
          </button>
        </form>
      </section>
      <Results results={results} />
      <Photos photos={photos} />
    </div>
  );
}
