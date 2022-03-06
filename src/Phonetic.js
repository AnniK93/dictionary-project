import React from "react";
import volume from "./volume.svg";
import silent from "./silent.svg";
import "./Phonetic.css";

export default function Phonetic(props) {
  console.log(props);
  if (props.phonetic.audio && props.phonetic.text) {
    return (
      <div className="Phonetic">
        <span>
          <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
            <img src={volume} className="listen-icon" />
          </a>
        </span>
        <span>{props.phonetic.text}</span>
      </div>
    );
  } else if (props.phonetic.audio === "") {
    return (
      <div className="Phonetic">
        <span>
          <img src={silent} className="silent-icon" />
        </span>
        <span>{props.phonetic.text}</span>
      </div>
    );
  } else {
    return null;
  }
}
