import React from "react";
import Meaning from "./Meaning";

export default function Results(props) {
  console.log(props.results);
  if (props.results) {
    return (
      <div className="Results">
        <h2>{props.results.word}</h2>
        {props.results.meanings.map(function (meaning, index) {
          /* the 'map' refers to looping through the 'menaings' array */
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
              {/* The first Meaning is the component */}
              {/* The second meaning is the property name */}
              {/* The third meaning is the variable */}
            </div>
          );
        })}
        
      </div>
    );
  } else {
    return null;
  }
}
