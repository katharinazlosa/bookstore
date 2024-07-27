import React, { useEffect, useState } from "react";
import Button from "./button";

type BookProps = {
  rank: number;
  book_image: string;
  title: string;
  author: string;
};

const BookSlider = () => {
  const [books, setBooks] = useState<BookProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const apiKey = "";
        const response = await fetch(
          `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${apiKey}`
        );
        if (!response.ok) {
          throw new Error(
            `Network response was not ok: ${response.statusText}`
          );
        }
        const data = await response.json();
        console.log("API response:", data);
        if (!data.results || !data.results.books) {
          throw new Error("Invalid data structure");
        }
        const bookData = data.results.books.map((book: any) => ({
          rank: book.rank,
          book_image: book.book_image,
          title: book.title,
          author: book.author,
        }));
        console.log("Processed books:", bookData);
        setBooks(bookData);
      } catch (error) {
        setError(`Error fetching books: ${error.message}`);
        console.error("Error fetching books:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 3) % books.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 3 + books.length) % books.length
    );
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (books.length === 0) {
    return <p>No books found.</p>;
  }

  return (
    <div className="slider-container">
      <h2>Our bestselling books: </h2>
      <div
        className="slider"
        style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
      >
        {books.map((book) => (
          <div key={book.rank} className="slide">
            <img src={book.book_image} alt={book.title} />
            <h3>{book.title}</h3>
            <p>{book.author}</p>
          </div>
        ))}
      </div>
      <div className="nav-buttons">
        <Button position="sliderposition" onClick={prevSlide} text="❮" />
        <Button position="sliderposition" onClick={nextSlide} text="❯" />
      </div>
    </div>
  );
};

export default BookSlider;
