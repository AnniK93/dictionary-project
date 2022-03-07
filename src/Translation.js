import React from "react";

import TranslationResults from "./TranslationResults";

export default function Translation(props) {
  let languages = [
    {
      languageIcon: "🇩🇪",
      languageCode: "de",
    },
    {
      languageIcon: "🇫🇷",
      languageCode: "fr",
    },
    {
      languageIcon: "🇮🇹",
      languageCode: "it",
    },
    {
      languageIcon: "🇪🇸",
      languageCode: "es",
    },
    {
      languageIcon: "🇵🇱",
      languageCode: "pl",
    },
  ];

  let translationKeyword = props.keyword;

  return (
    <div className="Translation">
      <h3>Check this word out in different languages:</h3>
      <ul>
        {languages.map(function (value, index) {
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
