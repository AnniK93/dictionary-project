import React, { useState } from "react";
//import axios from "axios";
import TranslationResults from "./TranslationResults";

export default function Translation(props) {
  let languageCodes = ["de", "fr", "it", "es", "pl"];

  let translationKeyword = props.keyword;

  return (
    <div className="Translation">
      <h3>Check this word out in different languages:</h3>
      <ul>
        {languageCodes.map(function (value, index) {
          return (
            <div key={index}>
              <TranslationResults
                value={value}
                translationKeyword={translationKeyword}
              />
            </div>
          );
        })}
      </ul>
    </div>
  );
}
