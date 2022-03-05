import React from "react";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <ul>
              <li>
                <p>
                  {definition.definition}
                  <br />
                  <em>{definition.example}</em>
                </p>
              </li>
            </ul>
          </div>
        );
      })}
    </div>
  );
}
