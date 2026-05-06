import React from "react";
import Synonyms from "./Synonyms";
import Antonyms from "./Antonyms";

export default function Meaning(props) {
  function example() {
    if (props.meaning.example) {
      return (
        <p>
          <strong>Example:</strong> {props.meaning.example}
        </p>
      );
    } else {
      return null;
    }
  }
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      <strong>Definition:</strong> {props.meaning.definition}
      <br />
      <em>{example()}</em>
      <Synonyms synonyms={props.meaning.synonyms} />
      <Antonyms antonyms={props.meaning.antonyms} />
    </div>
  );
}
