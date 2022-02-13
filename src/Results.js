import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";
import "./Results.css";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <section>
          <h2 className="word">{props.results.word}</h2>
          {props.results.phonetics.map(function (phonetic, index) {
            // Need to loop through each phonetic value
            return (
              <div key={index}>
                <Phonetic phonetic={phonetic} />
              </div>
            );
          })}
        </section>
        {props.results.meanings.map(function (meaning, index) {
          /* the 'map' refers to looping through the 'menaings' array */
          return (
            <section key={index}>
              <Meaning meaning={meaning} />
              {/* The first Meaning is the component */}
              {/* The second meaning is the property name */}
              {/* The third meaning is the variable */}
            </section>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
