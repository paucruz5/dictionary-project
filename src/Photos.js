import React from "react";
import "./Photos.css";

export default function Photos(props) {
  if (props.photos) {
    return (
      <div className="Photos">
        <section className="Photos">
          <div className="row">
            {props.photos.map(function (photo, index) {
              return (
                <div className="col-4" key={index}>
                  <a
                    href={photo.src.original}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <img
                      src={photo.src.landscape}
                      className="img-fluid"
                      alt={photo.alt}
                    />
                  </a>
                </div>
              );
            })}
          </div>
        </section>
        The photos are taken from{" "}
        <a
          href="https://www.pexels.com"
          target="_blank"
          rel="noreferrer noopener"
        >
          Pexels
        </a>{" "}
        , a free stock photo website. Thank you, Pexels.
      </div>
    );
  } else {
    return null;
  }
}
