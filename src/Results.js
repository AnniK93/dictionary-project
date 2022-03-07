import React from "react";
import Phonetic from "./Phonetic";
import Meaning from "./Meaning";
import Translation from "./Translation";
import "./Results.css";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <section className="section">
          <h2>{props.results.word}</h2>
          {props.results.phonetics.map(function (phonetic, index) {
            return (
              <div key={index}>
                <Phonetic phonetic={phonetic} />
              </div>
            );
          })}{" "}
          {props.results.meanings.map(function (meaning, index) {
            return (
              <div key={index}>
                <Meaning meaning={meaning} />
              </div>
            );
          })}
        </section>
        <section>
          <Translation keyword={props.results.word} />
        </section>
      </div>
    );
  } else {
    return null;
  }
}
