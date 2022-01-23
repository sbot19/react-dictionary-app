import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);
  // A state was created for results because the results change whenever the keyword changes

  function search(event) {
    event.preventDefault();

    function handleResponse(response) {
      setResults(response.data[0]);
    }

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
    // documentation: https://dictionaryapi.dev/
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
    //This is a whenever a state is changes; The state changes whenever the keyword changes
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" autoFocus={true} onChange={handleKeywordChange} />
      </form>
      <Results results={results} />
      {/* The first Results is the component */}
      {/* The second Results is the property name */}
      {/* The third results is the property value (aka the state) */}
    </div>
  );
}
