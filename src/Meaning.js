import React from "react";
import Synonyms from "./Synonyms";
import Antonyms from "./Antonyms";

export default function Meaning(props) {
  function example() {
    if (props.meaning.example) {
      return <p className="example">{props.meaning.example}</p>;
    } else {
      return null;
    }
  }
  return (
    <div className="Meaning">
      <h3>
        <strong>{props.meaning.partOfSpeech}</strong>
      </h3>
      <span>
        {props.meaning.definition}
        <em>{example()}</em>
      </span>

      <Synonyms synonyms={props.meaning.synonyms} />
      <Antonyms antonyms={props.meaning.antonyms} />
    </div>
  );
}
