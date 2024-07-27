import React from "react";
import books from "./../assets/img/books.png";

const Benefits = () => {
  return (
    <>
      <div className="benefits-container">
        <div className="color-container"></div>
        <div className="benefits-container--left">
          <img src={books}></img>
        </div>
        <div className="benefits-container--right">
          <h2>Benefits of reading a book</h2>
          <ol>
            <li>Mental stimulation</li>
            <li>Improve yourself</li>
            <li>Improve your memory</li>
          </ol>
        </div>
      </div>
    </>
  );
};

export default Benefits;
