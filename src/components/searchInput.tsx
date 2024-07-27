import React from "react";
import { useState } from "react";
import SearchResultModal from "./searchResultModal";
import Button from "./button";

const SearchInput = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [results, setResults] = useState([]);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setResults(data.items || []);
      setIsModalOpen(true);
    } catch (error) {
      console.error("Error fetching the book data", error);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <div className="input-container">
        <input
          type="text"
          placeholder="Search for a book..."
          value={searchTerm}
          onChange={handleChange}
        />
        <Button
          text="Search"
          position="bannerposition"
          onClick={handleSearch}
        />
        <SearchResultModal
          isOpen={isModalOpen}
          onClose={closeModal}
          results={results}
        />
      </div>
    </>
  );
};

export default SearchInput;
