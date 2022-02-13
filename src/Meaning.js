import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {/* partOfSpeech refers to if the word is a noun, verb, etc. */}
      {props.meaning.definitions.map(function (definition, index) {
        /* the function will receive a definition according to the index value */
        return (
          <div key={index}>
            <p className="definition-text">
              {definition.definition}
              <br />
              <div className="example-text">{definition.example}</div>
              <br />
              <Synonyms synonyms={definition.synonyms} />
            </p>
          </div>
        );
      })}
    </div>
  );
}
