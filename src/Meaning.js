import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  console.log(props.result);
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {/* partOfSpeech refers to if the word is a noun, verb, etc. */}
      {props.meaning.definitions.map(function (definition, index) {
        /* the function will receive a definition according to the index value */
        return (
          <div key={index}>
            <p>
              {definition.definition}
              <br />
              <em>{definition.example}</em>
              <br />
              <Synonyms synonyms={definition.synonyms} />
            </p>
          </div>
        );
      })}
    </div>
  );
}
