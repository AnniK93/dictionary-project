import React, { useState } from "react";
import axios from "axios";
import "./TranslationResults.css";

export default function TranslationResults(props) {
  let [translationResponse, setTranslationResponse] = useState(null);

  let languageCode = props.value;
  let translationKeyword = props.translationKeyword;
  console.log(props.translationKeyword);

  function handleTranslationResponse(response) {
    setTranslationResponse(response.data.exact_matches[0].translations[0].text);
  }

  function searchTranslation() {
    let translationApiUrl = `https://linguee-api.herokuapp.com/api?dst=${languageCode}&q=${translationKeyword}&src=en`;

    axios.get(translationApiUrl).then(handleTranslationResponse);
  }
  searchTranslation();

  return (
    <div className="TranslationResults">
      <h6>{translationResponse}</h6>
    </div>
  );
}
