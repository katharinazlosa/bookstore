import { useState } from "react";

import React from "react";
import Header from "../layout/header";
import Footer from "../layout/footer";
import Button from "../ui/button";

const books = [
  {
    id: 1,
    title: "The Midnight Library",
    author: "Matt Haig",
    image: "/images/midnight-library.jpg",
    rating: 4.5,
    price: 3,
  },
  {
    id: 2,
    title: "Where the Crawdads Sing",
    author: "Delia Owens",
    image: "/images/crawdads-sing.jpg",
    rating: 4.7,
    price: 4.5,
  },
  {
    id: 3,
    title: "Atomic Habits",
    author: "James Clear",
    image: "/images/atomic-habits.jpg",
    rating: 4.9,
    price: 5.0,
  },
  {
    id: 4,
    title: "It Ends With Us",
    author: "Colleen Hoover",
    image: "/images/it-ends.jpg",
    rating: 4.6,
    price: 4.8,
  },
  {
    id: 5,
    title: "The Let Them Theory",
    author: "Mel Robbins",
    image: "/images/let-them.jpg",
    rating: 4.7,
    price: 4.2,
  },
  {
    id: 6,
    title: "Fourth Wing",
    author: "Rebecca Yarros",
    image: "/images/fourth-wing.jpg",
    rating: 4.8,
    price: 5.5,
  },
  {
    id: 7,
    title: "Wild Side",
    author: "Elsie Silver",
    image: "/images/wild-side.jpg",
    rating: 4.8,
    price: 4.9,
  },
  {
    id: 8,
    title: "Deep End",
    author: "Ali Hazelwood",
    image: "/images/deep-end.jpg",
    rating: 4.5,
    price: 4.3,
  },
];

const Popular = () => {
  const [filter, setFilter] = useState("all");

  const filteredBooks =
    filter === "all" ? books : books.filter((book) => book.rating >= 4.7);

  return (
    <>
      <Header />
      <div className="popular">
        <div className="popular__container">
          <h1 className="popular__title" aria-label="Popular Books">
            Popular Books
          </h1>
          <p className="popular__subtitle">
            Discover the most-loved books by our readers.
          </p>

          <div className="popular__filter">
            <button
              className={`popular__filter-button ${
                filter === "all" ? "popular__filter-button--active" : ""
              }`}
              onClick={() => setFilter("all")}
              aria-label="Show all books"
            >
              All
            </button>
            <button
              className={`popular__filter-button ${
                filter === "high" ? "popular__filter-button--active" : ""
              }`}
              onClick={() => setFilter("high")}
              aria-label="Show highest-rated books"
            >
              Highly Rated (4.7+)
            </button>
          </div>

          <div className="popular__grid">
            {filteredBooks.map((book) => (
              <div key={book.id} className="popular__book">
                <img
                  src={book.image}
                  alt={book.title}
                  className="popular__book-image"
                />
                <h2 className="popular__book-title">{book.title}</h2>
                <p className="popular__book-author">{book.author}</p>
                <p className="popular__book-rating">⭐ {book.rating}</p>
                <p className="popular__book-price"> {book.price}$</p>

                <Button
                  className="cart-button"
                  text="Add to Cart"
                  book={book}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Popular;
