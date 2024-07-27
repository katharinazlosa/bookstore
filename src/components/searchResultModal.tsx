import React, { useState } from "react";
import Modal from "react-modal";
import Button from "./button";

const searchResultModal = ({ isOpen, onClose, results }) => {
  return (
    <>
      <div className="modal-container">
        <Modal
          isOpen={isOpen}
          onRequestClose={onClose}
          contentLabel="Search Results"
        >
          <div className="modal-container__header">
            <h2>Search Results</h2>
            <Button position="closebtn" onClick={onClose} text="close" />
          </div>

          {results.map((result, index) => (
            <div className="modal-container__section">
              <div className="modal-container__section--text">
                {result.volumeInfo.imageLinks && (
                  <img
                    src={result.volumeInfo.imageLinks.thumbnail}
                    alt={result.volumeInfo.title}
                  />
                )}
              </div>
              <div className="modal-container__section--text" key={index}>
                <h3>{result.volumeInfo.title}</h3>
                <p>
                  {result.volumeInfo.authors &&
                    result.volumeInfo.authors.join(", ")}
                </p>
                <p>{result.volumeInfo.publishedDate}</p>
              </div>
            </div>
          ))}
        </Modal>
      </div>
    </>
  );
};

export default searchResultModal;
