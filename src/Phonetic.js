import React from "react";

import ReactAudioPlayer from "react-audio-player";
import "./Phonetic.css";

export default function Phonetic(props) {
  if (props.phonetic.audio && props.phonetic.text) {
    return (
      <div className="Phonetic">
        <span>{props.phonetic.text}</span>
        <span>
          <ReactAudioPlayer
            src={props.phonetic.audio}
            className="audioPlayer"
            controls
          />
        </span>
      </div>
    );
  } else if (props.phonetic.audio === "") {
    return (
      <div className="Phonetic">
        <span>{props.phonetic.text}</span>
      </div>
    );
  } else {
    return null;
  }
}
