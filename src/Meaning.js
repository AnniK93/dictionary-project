import React from "react";
import "./Meaning.css";
import Synonyms from "./Synonyms";
import Example from "./Example";

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
                  <Example example={definition.example} />

                  <Synonyms synonyms={definition.synonyms} />
                </p>
              </li>
            </ul>
          </div>
        );
      })}
    </div>
  );
}
