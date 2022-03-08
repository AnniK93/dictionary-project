import React, { useState } from "react";
import axios from "axios";
import "./TranslationResults.css";

export default function TranslationResults(props) {
  // console.log(props);
  let [translationResponse, setTranslationResponse] = useState(null);

  let languageCode = props.value.languageCode;
  let languageIcon = props.value.languageIcon;
  let translationKeyword = props.translationKeyword;

  function handleTranslationResponse(response) {
    setTranslationResponse(response.data.exact_matches[0].translations[0].text);
  }

  function searchTranslation() {
    let translationApiUrl = `https://linguee-api.herokuapp.com/api?dst=${languageCode}&q=${translationKeyword}&src=en`;

    axios.get(translationApiUrl).then(handleTranslationResponse);
  }
  searchTranslation();

  if (translationResponse) {
    return (
      <div className="TranslationResults">
        <h6>
          {languageIcon} {""}
          {translationResponse}
        </h6>
      </div>
    );
  } else {
    return null;
  }
}
