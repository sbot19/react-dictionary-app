import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
  if (props.synonyms) {
    // If a noun/verb/adjective/etc has synonym(s) then it will be displayed
    return (
      <div className="synonyms">
        {props.synonyms.map(function (synonym, index) {
          // map function is used because the results are listed as index values
          return <span key={index} className="synonym">{synonym}</span>;
        })}
      </div>
    );
  } else {
    return null;
  }
}
