import React from "react";

export default function Antonyms(props) {
  if (props.antonyms) {
    return (
      <div className="Antonyms">
        <p>
          <strong>Antonyms:</strong>
        </p>
        {props.antonyms.map(function (antonym, index) {
          return (
            <ul key={index}>
              <li>{antonym}</li>
            </ul>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
