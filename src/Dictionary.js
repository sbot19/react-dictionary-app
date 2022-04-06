import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  // A state was created for results because the results change whenever the keyword changes
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleDictionResponse(response) {
    setResults(response.data[0]);
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function search() {
    // It will only call the API
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleDictionResponse);
    // documentation: https://dictionaryapi.dev/

    let pexelsApiKey =
      "563492ad6f9170000100000107d3351b907f455280895ae6571aea9c";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;

    let headers = { Authorization: `Bearer ${pexelsApiKey}` };

    axios
      .get(pexelsApiUrl, {
        headers: headers,
      })
      .then(handlePexelsResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
    // the function 'search' will create the APIUrl and then call on it to get the results
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
    //This is a whenever a state is changes; The state changes whenever the keyword changes
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <form onSubmit={handleSubmit}>
            <h4>What's on your mind?</h4>
            <input
              type="search"
              autoFocus={true}
              placeholder="Type a word"
              onChange={handleKeywordChange}
              defaultValue={props.defaultKeyword}
            />
          </form>
          <div className="hint">
            Suggested words: sunrise, garden, coffee, music ...
          </div>
        </section>

        <Results results={results} />
        {/* The first Results is the component */}
        {/* The second Results is the property name */}
        {/* The third results is the property value (aka the state) */}

        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return "Loading ...";
  }
}
